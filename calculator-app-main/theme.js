let input = document.getElementById('myRange')
const body = document.querySelector('#body')
const main = document.querySelector('#main')
const header = document.querySelector('#header')
const slider = document.querySelector('#myRange')
const calcContainer = document.querySelector('#calc-container')
const buttonsBg = document.querySelector('#buttonsBg')
const buttonsContainer = document.querySelector('#buttons-container')
const button = document.querySelectorAll('.button')

input.addEventListener('click', () => {
    let input = document.getElementById('myRange').value
    if (input === '1'){
        theme1()
    }
    if (input === '2'){
        theme2()
    }
})
//.contains(class)


function theme1(){
    for(let i = 0; i < button.length; i++){
        if (button[i].classList.contains('button2')){
            for (let i = 0; i < button.length; i++){
                button[i].classList.toggle('button2')
            }
    }
    }
    for(let i = 0; i < itemsTemeArray.length; i++){
        if(itemsTemeArray[i].classList.contains(classesTeme2[i])){
            itemsTemeArray[i].classList.remove(classesTeme2[i])
        }
    }
    body.classList.replace('body2', 'body')
}

function theme2(){
    body.classList.toggle('body2')
    main.classList.toggle('main2')
    header.classList.toggle('header2')
    slider.classList.toggle('slider2')
    calcContainer.classList.toggle('calc-container2')
    buttonsBg.classList.toggle('buttons-background2')
    buttonsContainer.classList.toggle('buttonsContainer2')
    //troca a cor de totdos os botões dentro da array obtida com querySelectorAll
    for (let i = 0; i < button.length; i++){
        button[i].classList.toggle('button2')
    }
}

itemsTemeArray = [body, main, header, slider, calcContainer, buttonsBg, buttonsContainer]
classesTeme2 = ['body2', 'main2', 'header2', 'slider2', 'calc-container2', 'buttons-background2', 'buttonsContainer2']