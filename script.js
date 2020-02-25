const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}


const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event)=> {
        inputNumber(event.target.value)
        updateScreen(currentInput)

    })
    
})

let prevInput = "0"
let calculationoperator =''
let currentInput = "0"

const inputNumber = (number) => {
    if(currentInput === '0'){
    currentInput = number
}
else{
    currentInput += number
}


const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event)=> {
        inputoperator(event.target.value)
        

    })
    
})
const inputoperator = (operator) => {
    prevInput = currentInput
    calculationoperator = operator
    currentInput = '0'
}

const equalsign = document.querySelector('.equal-sign');

equalsign.addEventListener("click", (event) => {
    calculate()
    updateScreen(currentInput)
})

const calculate = () => {
    let result = 0
    switch(calculationoperator) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break;
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break;
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            break;
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput)
            break;
        default:
        return
    
    }
    currentInput = result.toString()
    calculationoperator=''
}

const clearbtn = document.querySelector('.all-clear')

clearbtn.addEventListener("click", ()=>{
    claerAll()
    updateScreen(currentInput)

})

const claerAll = () =>{
    prevInput = '0'
    calculationoperator = ''
    currentInput = '0'
}





































































































































































































































































































}