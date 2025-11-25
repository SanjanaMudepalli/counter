const increase = document.querySelector('.in-button')
const reset = document.querySelector('.reset-button')
const decrease = document.querySelector('.de-button')
let element = document.querySelector('.counter-value')

let counter = 0
increase.addEventListener('click',function(e){
    counter += 1
    if (counter > 0){
        element.style.color = 'green'
    }
    if(counter == 0){
        element.style.color = 'black'
    }
    element.innerHTML = `${counter}`
})
reset.addEventListener('click',function(e){
    counter = 0
    element.style.color = 'black'
    element.innerHTML = `${counter}`
})
decrease.addEventListener('click',function(e){
    counter -= 1
    if (counter < 0){
        element.style.color = 'red'
    }
    if(counter == 0){
        element.style.color = 'black'
    }
    element.innerHTML = `${counter}`
})