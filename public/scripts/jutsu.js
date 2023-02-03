const config = {
  attributes: true,
  attributeFilter: ['class'],
}
let options

let defaultJutsuStorage = {
  autoplayEpisode: true,
  fullscreenBind: 71,
  nextEpisode: true,
  skipEnding: true,
  skipOpening: true,
}

const getOptions = () => {
  chrome.storage.sync.get({ jutsu: defaultJutsuStorage }).then((item) => {
    options = item.jutsu
  })
}

const getButton = (validator) => {
  let currentButton = []
  const buttons = $('.vjs-overlay-skip-intro')
  for (let i = 0; i < buttons.length; i++) {
    if (validator(buttons[i])) {
      currentButton.push(buttons[i])
    }
  }
  return currentButton
}

const validateOpenningSkip = (value) => {
  return (
    value.nodeName === 'DIV' &&
    value.classList.contains('vjs-overlay-bottom-left') &&
    value.innerText === 'Пропустить заставку'
  )
}

const validateNextEpisode = (value) => {
  return (
    value.nodeName === 'DIV' &&
    value.classList.contains('vjs-overlay-bottom-right') &&
    value.innerText === 'Следующая серия'
  )
}

const addObserver = (key) => {
  switch (key) {
    case 'skipOpening':
      const skipOpeningButton = getButton(validateOpenningSkip)
      if (skipOpeningButton[0]) {
        observer.observe(skipOpeningButton[0], config)
      }
      break
    case 'skipEnding':
      const skipEndingButtons = getButton(validateNextEpisode)
      if (skipEndingButtons[0]) {
        observer.observe(skipEndingButtons[0], config)
      }
      break
    case 'nextEpisode':
      const nextEpisodeButtons = getButton(validateNextEpisode)
      if (nextEpisodeButtons[1]) {
        observer.observe(nextEpisodeButtons[1], config)
      } else if (nextEpisodeButtons[0]) {
        observer.observe(nextEpisodeButtons[0], config)
      }
      break
    default:
      break
  }
}

const handleStorageChange = (storage) => {
  for (let key in storage) {
    if (storage[key]) {
      addObserver(key)
    } else if (!storage[key]) {
      deleteObserver(key)
    }
  }
}

chrome.storage.onChanged.addListener((changes) => {
  for (let [key, { newValue }] of Object.entries(changes)) {
    options = newValue
    handleStorageChange(newValue)
  }
})

const reloadKeyPress = () => {
  $('body').unbind()
  $('body').keyup((event) => {
    if (event.keyCode === options.fullscreenBind) {
      $('.vjs-fullscreen-control').click()
    }
  })
}

const turnOnObserver = () => {
  for (let key in options) {
    if (options[key]) {
      addObserver(key)
    }
  }
}

const deleteObserver = () => {
  observer.disconnect()
  turnOnObserver()
}

const callback = (mutationList) => {
  for (let mutation of mutationList) {
    if (!mutation.target.classList.contains('vjs-hidden')) {
      mutation.target.click()
    }
  }
}

const observer = new MutationObserver(callback)
getOptions()

$(window).on('load', () => {
  setTimeout(() => {
    reloadKeyPress()
    handleStorageChange(options)
    if (options.autoplayEpisode) {
      $('.vjs-big-play-button').click()
    }
  }, 500)
})
