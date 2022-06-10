const up = "🡡"
const down = "🡣"
const right = "🡢"
const left = "🡠"

const slider = document.querySelector('.container')
const arrow = document.querySelector('.arrow')

let isDragging = false
let currentPositionX = 0
let previousPositionX = 0
let currentPositionY = 0
let previousPositionY = 0

// Події доторкання до сенсору
slider.addEventListener('touchstart', () => console.log('Доторкнулися до екрану')) 
slider.addEventListener('touchend', () => console.log('Дотик закінчено'))
slider.addEventListener('touchmove', () => console.log('Переміщення по екрану'))

// Події натиску мишкою
slider.addEventListener("mousedown", () => console.log('Мишку натиснуто'))
slider.addEventListener("mouseup", () => console.log('Мишку відпущено'))
slider.addEventListener("mouseleave", () => console.log('Мишку виведено за межі'))
slider.addEventListener("mousemove", () => console.log('Переміщення курсору'))