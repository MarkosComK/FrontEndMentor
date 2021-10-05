window.addEventListener('scroll', () => {
    let nav = document.querySelector('.header')
    let navC = document.querySelector('.h-container1')
    
    nav.classList.toggle('scrolling-active', window.scrollY > 40)
    navC.classList.toggle('scrolling-height', window.scrollY > 40)
    
})

let hamburguer = document.querySelector('.hamburguer')

function myFunction(x) {
    if (x.matches) { // If media query matches
        hamburguer.classList.remove('none')
    }else{
        hamburguer.classList.add('none')
    }
  }
  
  var x = window.matchMedia("(max-width: 940px)")
  myFunction(x) 
  x.addEventListener("change", myFunction) 

  hamburguer.addEventListener('click', () => {
      let navLinks = document.querySelector('.links')
      let nav = document.querySelector('.header')
      let navC = document.querySelector('.h-container1')
      
      hamburguer.classList.toggle('active')
      navLinks.classList.toggle('links-active')
      if(window.scrollY == 0){
          nav.classList.toggle('scrolling-active')
          navC.classList.toggle('scrolling-height')
      }
  })
navLinks = document.querySelector('.links')
navLinks.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
    navLinks.classList.toggle('links-active')
})