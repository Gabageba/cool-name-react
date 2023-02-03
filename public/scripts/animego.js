const config = {
  attributes: true,
  attributeFilter: ['class'],
}

let options

let defaultAnimeGoStorage = {
  autoplayEpisode: true,
  nextEpisodeBind: 68,
  prevEpisodeBind: 65,
}

let navigateEpisode = {
  prevEpisode: undefined,
  currentEpisode: undefined,
  nextEpisode: undefined,
}

chrome.storage.onChanged.addListener((changes) => {
  for (let [key, { newValue }] of Object.entries(changes)) {
    options = newValue
  }
})

const reloadKeyPress = (prevEpisode, nextEpisode) => {
  $('body').unbind()
  $('body').keyup((event) => {
    if (prevEpisode && event.keyCode === options.prevEpisodeBind) {
      prevEpisode.click()
    } else if (nextEpisode && event.keyCode === options.nextEpisodeBind) {
      nextEpisode.click()
    }
  })
}

const episodeButtonsObserve = () => {
  const episodeButtons = $('.video-player-bar-series-item')
  for (let i = 0; i < episodeButtons.length; i++) {
    observer.observe(episodeButtons[i], config)
  }
}

const findCurrentEpisode = () => {
  const episodes = $('.video-player-bar-series-item')
  for (let i = 0; i < episodes.length; i++) {
    if (episodes[i].classList.contains('video-player__active')) {
      navigateEpisode.prevEpisode = episodes[i - 1]
      navigateEpisode.currentEpisode = episodes[i]
      navigateEpisode.nextEpisode = episodes[i + 1]
    }
  }
  return navigateEpisode
}

const getOptions = () => {
  chrome.storage.sync.get({ animego: defaultAnimeGoStorage }).then((item) => {
    options = item.animego
  })
}

const watchButtonValidator = (value) => {
  return (
    value.nodeName === 'A' &&
    value.children[1].innerText === 'Смотреть онлайн' &&
    value.classList.contains('btn-primary')
  )
}

const autoSkroll = () => {
  let watchButton = []
  const buttons = $('.btn-primary')
  for (let i = 0; i < buttons.length; i++) {
    if (watchButtonValidator(buttons[i])) {
      watchButton.push(buttons[i])
    }
  }
  if (watchButton.length > 0) {
    watchButton[0].click()
  }
}

const callback = (mutationList) => {
  for (let mutation of mutationList) {
    if (mutation.target.classList.contains('video-player__active')) {
      findCurrentEpisode()
      reloadKeyPress(navigateEpisode.prevEpisode, navigateEpisode.nextEpisode)
    }
  }
}

const observer = new MutationObserver(callback)
getOptions()

$(window).on('load', () => {
  setTimeout(() => {
    if (options.autoplayEpisode) {
      autoSkroll()
    }
    setTimeout(() => {
      findCurrentEpisode()
      episodeButtonsObserve()
      reloadKeyPress(navigateEpisode.prevEpisode, navigateEpisode.nextEpisode)
    }, 500)
  }, 500)
})
