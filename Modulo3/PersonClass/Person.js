class Person {

  constructor(firstName, lastName, age, gender) {
    this.name = [firstName, lastName]
    this.age = age
    this.gender = gender
    this.interests = []
  }

  updateInterests(interest) {
    this.interests = [...this.interests, interest]
  }

  get fullName() {
    return `${this.name[0]} ${this.name[1]}`
  }

  get firstName() {
    return `${this.name[0]}`
  }

  get lastName() {
    return `${this.name[1]}`
  }

  Bio() {
    return `${this.fullName} is ${this.age} years old. They like ${this.interests.join(', ')}`
  }

  Greeting() {
    return `Hi! I'm ${this.fullName}`
  }
}

class Teacher extends Person {

  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender)
    this.subject = subject
  }

  Greeting() {
    return `Hello, My name is ${this.lastName}, and I teach ${this.subject}`
  }
}

class Student extends Person {

  constructor(firstName, lastName, age, gender) {
    super(firstName, lastName, age, gender)
  }

  Greeting() {
    return `Yo! I'm ${this.firstName}`
  }
}

const maria = new Person('Maria', 'Sant\'Ana', 0, 'feminino')
maria.updateInterests('Mamãe')
maria.updateInterests('Papai')
console.log(maria.Bio())
console.log(maria.Greeting())
console.log(maria)

const murilo = new Teacher('Murilo', 'Silva', 20, 'masculino', 'Javascript')
murilo.updateInterests('Javascript')
murilo.updateInterests('React')
console.log(murilo.Bio())
console.log(murilo.Greeting())

console.log(murilo)


const tiago = new Student('Tiago', 'Sant\'Ana', 33, 'masculino')
tiago.updateInterests('Javascript')
tiago.updateInterests('React')
tiago.updateInterests('Job')
console.log(tiago.Bio())
console.log(tiago.Greeting())



console.log(tiago)
