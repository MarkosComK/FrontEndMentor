let imgHero = document.querySelector('#hero-img')
let img1 = document.querySelector('#img-grid-1')
let img2 = document.querySelector('#img-grid-2')
let img3 = document.querySelector('#img-grid-3')
let img4 = document.querySelector('#img-grid-4')
let img5 = document.querySelector('#img-grid-5')
let img6 = document.querySelector('#img-grid-6')
let img7 = document.querySelector('#img-grid-7')
let img8 = document.querySelector('#img-grid-8')
let grid = document.querySelector('.sec2-container')

function myFunction(x) {
    if (x.matches) { // If media query matches
        imgHero.src="images/mobile/image-interactive.jpg"
        img1.src="images/mobile/image-deep-earth.jpg"
        img2.src="images/mobile/image-night-arcade.jpg"
        img3.src="images/mobile/image-soccer-team.jpg"
        img4.src="images/mobile/image-grid.jpg"
        img5.src="images/mobile/image-from-above.jpg"
        img6.src="images/mobile/image-pocket-borealis.jpg"
        img7.src="images/mobile/image-curiosity.jpg"
        img8.src="images/mobile/image-fisheye.jpg"
        grid.classList.remove('grid-auto')

    } else{
        hamburguer.classList.add('none')
    }
}
  


var x = window.matchMedia("(max-width: 555px)")
myFunction(x) 
x.addListener(myFunction) 
