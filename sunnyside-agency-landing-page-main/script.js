/*quando clicar no .hamburguer mostrar o nav*/

const navShow = () => {
    const hamburguer = document.querySelector('.hamburguer')
    const nav = document.querySelector('.nav-links')

    hamburguer.addEventListener('click', () => {
        nav.classList.toggle('show-nav')
    })
}

navShow()


// Create a media condition that targets viewports at least 800px wide
const mediaQuery = window.matchMedia('(min-width: 800px)')
// Change the media src
mediaQuery.addListener(changeImg)
// Function to change the media(s)
function changeImg() {
    if (mediaQuery.matches){
        const sec1Img = document.getElementById('sec1-img').src="images/desktop/image-transform.jpg"
        const sec2Img = document.getElementById('sec2-img').src="images/desktop/image-stand-out.jpg"

        const img1 = document.getElementById('img1').src="images/desktop/image-gallery-milkbottles.jpg"
        const img2 = document.getElementById('img2').src="images/mobile/image-gallery-orange.jpg"
        const img3 = document.getElementById('img3').src="images/mobile/image-gallery-cone.jpg"
        const img4 = document.getElementById('img4').src="images/mobile/image-gallery-sugar-cubes.jpg"
    }
}


