
const calculator = (() => {

  const sum = (x, y) => x + y
  const subtract = (x, y) => x - y
  const divide = (x, y) => x / y
  const multiply = (x, y) => x * y

  const handlerOperators = {
    '+': sum,
    '-': subtract,
    '/': divide,
    '*': multiply
  }

  let entries = []

  const clearInput = () => document.querySelector('.number').value = ''

  const buttonEnter = document.querySelector('.enter')

  const addInEntries = () => {
    const inputValue = parseFloat(document.querySelector('.number').value)

    if (isNaN(inputValue)) return alert('Digite números válidos')

    if (entries.length === 2) return alert('Apenas dois valores por operação')

    entries = [...entries, inputValue]

    clearInput()
  }

  buttonEnter.onclick = () => {

    addInEntries()

    document.querySelector('.number').focus()
  }

  const makeOperation = () => {
    const [n1, n2] = entries

    if (isNaN(n1) || isNaN(n2)) return alert('Digite números válidos')

    const operator = document.querySelector('.operators input:checked').value

    handlerOperators[operator] ?
      document.querySelector('.total').innerText = handlerOperators[operator](n1, n2) :
      `${operator} não é um operador válido`

    entries = []

    clearInput()

  }

  const buttonIgual = document.querySelector('.igual')


  buttonIgual.onclick = () => {

    makeOperation()

    document.querySelector('.number').focus()
  }
})()