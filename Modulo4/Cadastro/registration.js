const selectElement = elementSelector => document.querySelector(elementSelector)

const joinString = string => string.split(' ').join('')

const createElements = (whereWillBeCreated, inputText, fnCreateLi) => (fnCreateChild) => fnCreateChild(fnCreateLi(whereWillBeCreated, inputText))


const createLi = (whereWillBeCreated, inputText) => {
  const whereBeCreated = document.querySelector(whereWillBeCreated)

  const li = document.createElement('li')

  whereBeCreated.appendChild(li)

  li.textContent = inputText
  
  return li
}

const createButtonRemove = li => {

  const button = document.createElement('button')

  li.appendChild(button)

  const classButton = joinString(li.innerText) + parseInt(Math.random() * 100000)

  button.innerText = 'remove'

  button.classList.add('remove', `${classButton}`)
  
  document.querySelector(`.${classButton}`).addEventListener('click', function () { this.parentNode.remove() })

}


const form = document.querySelector('form')

form.addEventListener('submit', function (evt) {
  evt.preventDefault()
  
  const input = document.querySelector('input')

  const createButtonRemoveInLi = createElements(createButtonRemove(createLi('ul', input.value)))
  

  input.value = ''

  input.focus()

})

