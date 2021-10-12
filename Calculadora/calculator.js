
const calculator = (() => {
  let entrance = []
  let historic = []

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

  const filter = (operation, filter) => operation.length === filter

  const filterNumbers = (operation, op, x, y) => filter(operation, x) && isNaN(op) || filter(operation, y) && isNaN(op)

  const addInEntrance = x => entrance = [...entrance, x]

  const entranceOperatorsFilter = (x) => handlerOperators[x] ?
    addInEntrance(x) :
    `${x} não é um operador válido`

  const addInHistoric = array => historic = [...historic, array]

  const filterLastNumber = op => {
    addInEntrance(op)
    addInHistoric(entrance)

    return entrance
  }

  const enter = operator => {

    if (filterNumbers(entrance, operator, 0, 2)) {
      return `${operator} não é um número`
    }

    if (filter(entrance, 1)) {
      return entranceOperatorsFilter(operator)
    }

    if (filter(entrance, 2)) {
      return filterLastNumber(operator)
    }

    if (entrance.length > 2) {
      return entrance = [operator]
    }

    return addInEntrance(operator)
  }


  const equalResult = (arr) => {
    let [number1, operator, number2] = arr

    return handlerOperators[operator] ?
      handlerOperators[operator](number1, number2) :
      `${operator} não é um operador válido`
  }
  const equal = () => {
    return equalResult(entrance)
  }

  const listFilter = (listOperations) => {
    listResult = []

    for (const operation of listOperations) {
      let [number1, operator, number2] = operation
      listResult = [...listResult, `${number1}${operator}${number2} => ${equalResult(operation)}`]
    }
    return listResult
  }

  const list = () => listFilter(historic)

  const reset = () => historic = []

  return {
    enter,
    equal,
    list,
    reset
  };
})()