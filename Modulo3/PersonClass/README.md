# Exercicio: Classes Person, Teacher e Student

### O exercício:

![PersonExercise](https://user-images.githubusercontent.com/82619418/137971821-222539d8-fd40-464b-8704-fc7702594525.png)

Fazer as classes conforme a imagem, sendo que as classes Teacher e Student sejam instâncias de Person

### Como usar a aplicação:

Para criar uma Pessoa, ou professor ou estudante basta fazer fazer uma instância passando o primeiro nome, sobrenome, idade e sexo, no caso do professor precisa passar a matéria qie ele leciona também:

```js
const personName = new Person('Maria', 'Silva', 20, 'feminino')

const teacherName = new Teacher(
  'Murillo',
  'Morais',
  18,
  'masculino',
  'Javascript'
)

const studentName = new Student('Tiago', "Sant'Ana", 33, 'masculino')
```

Depois pode atualizar as interesses da pessoa/professor/estudante:

```js
personName.updateInterests('Javascript')
```

Pode consultar a biografia da pessoa:

```js
personName.Bio()
```

Pode também, pedir para a pessoa se apresentar:

```js
personName.Greeting()
```
