function makeArray(listSize) {
  const listSizeReformed = listSize * 10
  let arr = []

  for (let i = 0; i < parseInt(Math.random() * listSizeReformed); i++) {
    arr = [...arr, parseInt(Math.random() * 1000)]
  }

  return arr
}

function makePromise(listSize, seconds) {
  const secondsTransformed = seconds * 1000
  const promise = new Promise(resolve => setTimeout(() => resolve(makeArray(listSize)), secondsTransformed
  ))


  return promise
}

function createLi(text) {
  const li = document.createElement('li')
  li.innerText = text

  return li
}

function makeList(arrPromise, ul) {
  const arr = arrPromise

  arr.forEach(element => {
    const li = createLi(element)
    ul.appendChild(li)
  });
}

function createAllList(arrayOfPromise, divList) {

  const ul = document.createElement('ul')

  const h2 = document.createElement('h2')

  divList.appendChild(ul)

  h2.innerText = `Lista`

  ul.appendChild(h2)

  arrayOfPromise.forEach((obj) => {
    makeList(obj.value, ul)
  })
}

function askToWaitList(elementFather, text) {
  const p = document.createElement('p')

  p.innerText = text

  elementFather.appendChild(p)

  p.style = 'color: #71f07b;'

  return p
}

function createDivForLists(elementFather) {
  const div = document.createElement('div')

  elFather = document.querySelector(`.${elementFather}`)

  div.classList.add('list')

  elFather.appendChild(div)

  return div
}

function removeLi() {
  const divChildren = document.querySelector('.list')

  if (divChildren) {

    const divFather = document.querySelector('.father-list')

    divFather.removeChild(divChildren)
  }
}

async function makePromisesList() {
  removeLi()

  const divList = createDivForLists("father-list")

  const p = askToWaitList(divList, 'Criando a lista. Aguarde, por favor...')

  const promise1 = makePromise(1000, 1)
  const promise2 = makePromise(100, 5)
  const promise3 = makePromise(10, 3)

  const threePromises = Promise.allSettled([promise1, promise2, promise3])

  const threeLists = await threePromises

  createAllList(threeLists, divList)

  divList.removeChild(p)

  const div = document.querySelector('div')

  const pSuccess = askToWaitList(div, 'Lista criada com sucesso')

  setTimeout(() => div.removeChild(pSuccess), 5000)
}
