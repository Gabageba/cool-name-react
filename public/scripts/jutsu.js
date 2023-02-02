const config = {
  attributes: true,
  attributeFilter: ['class'],
}
let options

const getOptions = () => {
  chrome.storage.sync.get('jutsu').then((item) => {
    options = item.jutsu
    console.log(options)
  })
}

const handleStorageChange = (storage) => {
  for (let key in storage) {
    if (key === 'fullscreenBind') {
      reloadKeyPress()
    }
  }
}

chrome.storage.onChanged.addListener((changes) => {
  for (let [key, { newValue }] of Object.entries(changes)) {
    options = newValue
    console.log(newValue)
  }
})

const reloadKeyPress = () => {
  $('body').off('keyup')

  $('body').keyup((event) => {
    if (event.keyCode === options.fullscreenBind) {
      $('.vjs-fullscreen-control').click()
    }
  })
}

getOptions()

$(window).on('load', () => {
  setTimeout(() => {
    reloadKeyPress()
  }, 500)
})
