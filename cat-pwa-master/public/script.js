setInterval(() => {
  document.getElementById(
    'time'
  ).innerHTML = `Meow. The time is ${new Date().toLocaleTimeString()}.`
}, 500)
