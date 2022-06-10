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
slider.addEventListener("touchstart", swipeStart)
slider.addEventListener("touchend", swipeEnd)
slider.addEventListener("touchmove", swipeMove)

// Події натиску мишкою
slider.addEventListener("mousedown", swipeStart)
slider.addEventListener("mouseup", swipeEnd)
slider.addEventListener("mouseleave", swipeEnd)
slider.addEventListener("mousemove", swipeMove)

// Відключення контекстного меню
window.oncontextmenu = function(event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function swipeStart(event) {
  isDragging = true
  let startPositionX = getPositionX(event)
  currentPositionX = startPositionX
  previousPositionX = startPositionX
  let startPositionY = getPositionY(event)
  currentPositionY = startPositionY
  previousPositionY = startPositionY
}

function swipeMove(event) {
  if (isDragging) {
    currentPositionX = getPositionX(event)
    currentPositionY = getPositionY(event)

    let xMovedBy = previousPositionX - currentPositionX
    if (xMovedBy > 100) {
      arrow.innerText = left
    } else if (xMovedBy < -100) {
      arrow.innerText = right
    }
    
    let yMovedBy = previousPositionY - currentPositionY
    if (yMovedBy > 100) {
      arrow.innerText = up
    } else if (yMovedBy < -100) {
      arrow.innerText = down
    }
  }
}

function swipeEnd() {
  isDragging = false
}

function getPositionX(e) {
  // if (e.type.includes("mouse")) {
  //   // Мишка
  //   return e.pageX
  // } else {
  //   // Дотик
  //   return e.touches[0].clientX
  // }

  return e.type.includes("mouse") 
    ?  e.pageX
    :  e.touches[0].clientX 

}

function getPositionY(e) {
  return e.type.includes("mouse") 
    ?  e.pageY
    :  e.touches[0].clientY 
}