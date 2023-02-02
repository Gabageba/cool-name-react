const getOptions = () => {
  chrome.storage.sync.get(null).then((item) => {
    console.log(item)
  })
}

$(window).on('load', () => {
  getOptions()
})

