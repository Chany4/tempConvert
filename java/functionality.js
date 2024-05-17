let multi1 = document.querySelector('#degC')
let span1 = document.querySelector('#answer')
let multiButton1 = document.querySelector('#Convert')

multiButton1.addEventListener('click', ()=>{
    span1.innerHTML = [(multi1.value * 9/5) + 32] 
})