const progressbar = document.getElementsByClassName
('progress-bar')[2]

setInterval(() => {
const computerStyle = getComputedStyle(progressbar)
const width = parseFloat (computerStyle.getPropertyValue
('--width')) || 0
progressbar.style.setProperty('--width', width + .1)
},5)
