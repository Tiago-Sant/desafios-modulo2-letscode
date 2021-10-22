const selectElement = elementSelector => document.querySelector(elementSelector)

const joinString = string => string.split(' ').join('')

const createElements = whereWillBeCreated => (elementParent, fnCreateParent) => (elementChild, fnCreateChild) => fnInButton => fnInButton(fnCreateChild(elementChild, fnCreateParent(whereWillBeCreated, elementParent)))


const createParentELement = (whereWillBeCreated, elementParent) => {
  const ul = selectElement(whereWillBeCreated)

  const elParent = document.createElement(elementParent)

  ul.appendChild(elParent)

  const input = selectElement('input').value

  elParent.textContent = input

  return elParent
}

const createElementChild = (elementChild, fnCreateParent) => {

  const elParent = fnCreateParent

  const elChild = document.createElement(elementChild)

  elParent.className = joinString(selectElement('input').value)

  elParent.appendChild(elChild)

  const classElChild = joinString(selectElement('input').value) + parseInt(Math.random() * 100000)

  elChild.innerText = 'remove'

  elChild.classList.add('remove', `${classElChild}`)

  return `.${classElChild}`
}

const removeParent = fnCreateChild => {
  const childrenSelector = fnCreateChild

  selectElement(childrenSelector).addEventListener('click', function () { this.parentNode.remove() })
}

const createInUL = createElements('ul')

const createLiInUl = createInUL('li', createParentELement)

const createElementButtonInLi = createLiInUl('button', createElementChild)

const form = selectElement('form')

form.addEventListener('submit', function (evt) {
  evt.preventDefault()

  const createButtonRemoveInLi = createElementButtonInLi(removeParent)

  selectElement('input').value = ''

  selectElement('input').focus()

})