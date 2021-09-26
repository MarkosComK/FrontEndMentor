const body = document.getElementById('body')
let input = document.getElementById('myRange')

input.addEventListener('click', () => {
    let input = document.getElementById('myRange').value
    if (input === '1'){
        theme1()
    }
    if (input === '2'){
        theme2()
    }
})

function theme1(){
    body.classList.toggle('body1')
}

function theme2(){
    body.classList.toggle('body2')
}