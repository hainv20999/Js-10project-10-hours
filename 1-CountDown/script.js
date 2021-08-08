const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const secondsEl = document.getElementById('seconds')
const minutesEl = document.getElementById('minutes')

const newYears = '31 Jan 2022'
function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const secondsTotal = (newYearsDate - currentDate) / 1000 // tong so giay
  const days = Math.floor(secondsTotal / 3600 / 24) // so giay chia 24 * 60 * 60
  const hours = Math.floor((secondsTotal / 3600) % 24) //
  const minutes = Math.floor((secondsTotal / 60) % 60)
  const seconds = Math.floor(secondsTotal) % 60
  daysEl.innerHTML = days
  hoursEl.innerHTML = formatTime(hours)
  minutesEl.innerHTML = formatTime(minutes)
  secondsEl.innerHTML = formatTime(seconds)
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

const x = countdown()

setInterval(countdown, 1000)
