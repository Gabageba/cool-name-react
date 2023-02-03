let options

let defaultAnimeGoStorage = {
  autoplayEpisode: true,
  nextEpisodeBind: 68,
  prevEpisodeBind: 65,
}

const findCurrentEpisode = () => {
  console.log($('.tns-item'))
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
  if (watchButton !== []) {
    watchButton[0].click()
  }
}

getOptions()

$(window).on('load', () => {
  setTimeout(() => {
    if (options.autoplayEpisode) {
      autoSkroll()
      findCurrentEpisode()
    }
  }, 500)
})
