(() => {
  factoryCalculator = () => {
    let entrance = []
    let historic = []

    const enter = (operator) => {

      if (entrance.length === 0 && isNaN(operator) || entrance.length === 2 && isNaN(operator)) {
        return console.log(`${operator} não é um número`)
      }

      if (entrance.length === 1) {
        return entranceOperatorsFilter(operator)
      }

      if (entrance.length === 2) {
        entrance = [...entrance, operator]
        historic = [...historic, entrance]

        return entrance
      }
      else if (entrance.length > 2) {
        return entrance = [operator]
      }

      return entrance = [...entrance, operator]
    }

    let sum = (x, y) => x + y
    let subtract = (x, y) => x + y
    let divide = (x, y) => x / y
    let multiply = (x, y) => x * y

    const handlerOperators = {
      '+': sum,
      '-': subtract,
      '/': divide,
      '*': multiply
    }

    const entranceOperatorsFilter = (x) => handlerOperators[x] ?
      entrance = [...entrance, x] :
      console.log(`${x} não é um operador válido`)

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

      for (const i of listOperations) {
        listResult = [...listResult, `${i[0]}${i[1]}${i[2]} => ${equalResult(i)}`]
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
  }

  let calculator = factoryCalculator();

  calculator.enter('true')
  calculator.enter(5)
  calculator.enter('tiago')
  calculator.enter('+')
  calculator.enter('true')
  calculator.enter(2)
  console.log(calculator.equal())

  calculator.enter(2)
  calculator.enter('+')
  calculator.enter(8)
  console.log(calculator.equal())

  console.log(calculator.list())
  calculator.reset()

  console.log(calculator.list())


})()




