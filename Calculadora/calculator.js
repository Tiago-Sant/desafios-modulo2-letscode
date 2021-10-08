(() => {
  factoryCalculator = () => {
    let entrance = []
    let historic = []

    const enter = (x) => {

      if (entrance.length === 0 && isNaN(x) || entrance.length === 2 && isNaN(x)) {
        return console.log(`${x} não é um número`)
      }

      if (entrance.length === 1) {
        return entranceOperatorsFilter(x)
      }

      if (entrance.length === 2) {
        entrance = [...entrance, x]
        historic = [...historic, entrance]

        return entrance
      }
      else if (entrance.length > 2) {
        return entrance = [x]
      }

      return entrance = [...entrance, x]
    }

    const entranceOperatorsFilter = (x) => {

      switch (x) {
        case '+':
          return entrance = [...entrance, x]

        case '-':
          return entrance = [...entrance, x]

        case '/':
          return entrance = [...entrance, x]

        case '*':
          return entrance = [...entrance, x]

        default: console.log(`${x} não é um operator válido. Os operadores permitidos são: +, -, / e *`)
          break
      }
    }


    const equalResult = (operators) => {

      switch (operators[1]) {
        case '+':
          return `${operators[0] + operators[2]}`

        case '-':
          return `${operators[0] - operators[2]}`

        case '/':
          return `${operators[0] / operators[2]}`

        case '*':
          return `${operators[0] * operators[2]}`

        default: console.log('Os operadores permitidos são: +, -, / e *')
          break
      }
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




