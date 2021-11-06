const ul = document.querySelector('.list')
const p = document.querySelector('.currentTime p')
const stopButton = document.querySelector('.stop')
const form = document.querySelector('form')
const input = document.querySelector('input')
const winner = document.querySelector('.winner span')

let name;
let cron;
let count = 0;

const initList = () => {
  for (let i = 0; i < 10; i += 1) {
    const name = sessionStorage.key(i)
    if (name === null) { return }
    if (name !== 'IsThisFirstTime_Log_From_LiveServer') {
      const time = sessionStorage.getItem(name)
      const li = document.createElement('li')
      ul.appendChild(li)
      li.innerText = `${name}: ${time}`
    }
  }
}

const getWinnerLocal = () => {
  if (localStorage.getItem('winner') !== null) {
    const winnerName = localStorage.getItem('winner')
    const winnerTimer = localStorage.getItem('winnerTimer')
    winner.textContent = `${winnerName}: ${winnerTimer}`
  }
}

(() => {
  getWinnerLocal()

  initList()

}
)()



form.addEventListener('submit', function (e) {
  e.preventDefault()

  clearInterval(cron)

  count = 0

  name = input.value


  cron = setInterval(() => {
    count += 1
    p.innerText = convertTimer(count)
  }, 10);

  return count
}
)

const convertTimer = ms => {
  const msConverted = parseInt(ms % 1000)
  const segundos = parseInt((ms / 1000) % 60);
  const minutos = parseInt((ms / 60000) % 60)
  const horas = parseInt((ms / 3600000))

  const time = `${horas}:${minutos}:${segundos}:${msConverted}`

  return time
}

const stopTime = () => {
  if (input.value == '') { return }
  const currentLi = document.querySelector('li')
  const li = document.createElement('li')
  if (!currentLi) {
    ul.appendChild(li)
  } else {
    ul.insertBefore(li, currentLi)
  }

  li.innerText = `${name}: ${p.innerText}`

  clearInterval(cron)

  input.value = ''

  sessionStorage.setItem(name, p.innerText)
  saveLocalStorage(count)

}

const setWinnerInLocalStorage = () => {
  localStorage.setItem('winner', name)
  localStorage.setItem('winnerTimer', p.innerText)
  localStorage.setItem('winnerCount', count)

  getWinnerLocal()
}

const saveLocalStorage = timer => {
  if (localStorage.getItem('winner') === null) {
    setWinnerInLocalStorage()
  }
  const currentWinner = localStorage.getItem('winnerCount')

  currentWinner > timer ? setWinnerInLocalStorage() : null

}
