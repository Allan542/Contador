let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0;
let buttonPlus = document.getElementsByTagName('button')[1]
let buttonMinus = document.getElementsByTagName('button')[0]

buttonPlus.addEventListener('click', increment)
buttonMinus.addEventListener('click', decrement)

buttonPlus.addEventListener('click', disable)
buttonMinus.addEventListener('click', disable)

color()

function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
    color()
}

function decrement() {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
    color()
}

function disable() {
    if (currentNumber <= -10) buttonMinus.disabled = true
    else if (currentNumber >= 20) buttonPlus.disabled = true
    else {
        buttonMinus.disabled = false
        buttonPlus.disabled = false
    }
}

function color() {
    if (currentNumber <= 0) currentNumberWrapper.style.color = 'red'
    else currentNumberWrapper.style.color = 'green'
}