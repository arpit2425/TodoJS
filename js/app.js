const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')
let LIST, id
const CHECK = 'fa-check-circle'
const UNCHECK = 'fa-circle-thin'
const LINE_THROUGH = 'lineThrough'
let options = { weekday: 'long', month: 'short', day: 'numeric' }
let date = new Date()
dateElement.innerHTML = date.toLocaleDateString('en-us', options)
function addItem (todo, id, done, trash) {
  if (trash) {
    return
  }

  const DONE = done ? CHECK : UNCHECK
  const LINE = done ? LINE_THROUGH : ''
  const item = `
     <li class="item">
    <i class="fa ${DONE} co" job="complete" id=${id}></i>
    <p class="text ${LINE}">${todo}</p>
    <i class="fa fa-trash-o de" job="delete" id=${id}></i>
  </li> 
    `
  const position = 'beforeend'
  list.insertAdjacentHTML(position, item)
}
document.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    const val = input.value
    addItem(val, id, false, false)
    input.value = ''
    LIST.push({
      name: val,
      id: id,
      done: false,
      trash: false
    })
    id++
  }
})
