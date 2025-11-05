const imgs = document.querySelectorAll('.parallex')

/**
 * 
 * @param {HTMLImageElement} imgEle 
 * @param {*} per 
 */
function setupParallex(imgEle, per) {
  console.log('Setting Parallex', imgEle, per)
  imgEle.style.objectPosition = `0 -${Math.ceil(per*50)}px`
}

(async () => {
  MyEventHandler.addHandler('scroll', async (eve, per) => {
    for (const img of imgs) {
      setupParallex(img, per);
    }
  })
})()