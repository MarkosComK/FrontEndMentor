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
    if (input === '3'){
        theme3()
    }
})

function theme1(){
    removeTheme2()
    removeTheme3()
}

function theme2(){
    removeTheme3()
    body.classList.add('body2')
    main.classList.add('main2')
    header.classList.add('header2')
    slider.classList.add('slider2')
    calcContainer.classList.add('calc-container2')
    buttonsBg.classList.add('buttons-background2')
    buttonsContainer.classList.add('buttonsContainer2')
    //troca a cor de totdos os botões dentro da array obtida com querySelectorAll
    for (let i = 0; i < button.length; i++){
        button[i].classList.add('button2')
    }
}

function theme3(){
    removeTheme2()
    body.classList.add('body3')
    main.classList.add('main3')
    header.classList.add('header3')
    slider.classList.add('slider3')
    calcContainer.classList.add('calc-container3')
    buttonsBg.classList.add('buttons-background3')
    buttonsContainer.classList.add('buttonsContainer3')
    for (let i = 0; i < button.length; i++){
        button[i].classList.add('button3')
    }
}

function removeTheme2(){
    //verifica se há e remove todas as cores do 2º tema (nos botões) 
    for(let i = 0; i < button.length; i++){
        if (button[i].classList.contains('button2')){
            for (let i = 0; i < button.length; i++){
                button[i].classList.toggle('button2')
            }
    }
    }
    //verifica se há e remove todas as cores do 2º tema 
    for(let i = 0; i < itemsTemeArray.length; i++){
        if(itemsTemeArray[i].classList.contains(classesTeme2[i])){
            itemsTemeArray[i].classList.remove(classesTeme2[i])
        }
    }
}
function removeTheme3(){
    //verifica se há e remove todas as cores do 3º tema (nos botões) 
    for(let i = 0; i < button.length; i++){
        if (button[i].classList.contains('button3')){
            for (let i = 0; i < button.length; i++){
                button[i].classList.toggle('button3')
            }
    }
    }
    //verifica se há e remove todas as cores do 3º tema 
    for(let i = 0; i < itemsTemeArray.length; i++){
        if(itemsTemeArray[i].classList.contains(classesTeme3[i])){
            itemsTemeArray[i].classList.remove(classesTeme3[i])
        }
    }
}

itemsTemeArray = [body, main, header, slider, calcContainer, buttonsBg, buttonsContainer]
classesTeme2 = ['body2', 'main2', 'header2', 'slider2', 'calc-container2', 'buttons-background2', 'buttonsContainer2']

classesTeme3 = ['body3', 'main3', 'header3', 'slider3', 'calc-container3', 'buttons-background3', 'buttonsContainer3']