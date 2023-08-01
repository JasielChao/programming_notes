const mainContent = document.getElementById("main")
const switchBTN = document.getElementById("switch")


function clickEvent() {
  if(mainContent.classList.contains('main--light')) {
    mainContent.classList.remove('main--light')
    mainContent.classList.add('main--dark')
  } else {
    mainContent.classList.remove('main--dark')
    mainContent.classList.add('main--light')
  }
}

switchBTN.addEventListener('click', clickEvent)