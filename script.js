console.log('This is a quote generator')

const navbar = document.querySelector('.navbar')
const navBarOffsetTop = navbar.offsetTop
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [97, 90, 86, 85, 83, 65, 60]

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navBarOffsetTop) {
    console
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    const progressPercent = document.querySelectorAll('.progress-percent')
    console.log('progress')
    document.querySelectorAll('.progress-percent').forEach((element, i) => {
      element.style.width = `${progressBarPercents[i]}%`
    })
  }
})

// window.addEventListener('scroll', () => {
//   console.log(window.pageYOffset, navbar.offsetTop)
// })
