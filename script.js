const form = document.forms.add

let input = document.querySelector('.input')
let cont = document.querySelector('.container')
let btnAdd = document.querySelector('.add')
let todos = []

form.onsubmit = (event) => {
   event.preventDefault()

   if (input.value.length <= 4) {
      input.classList.add('error')
      btnAdd.classList.add('error-btn')
      return;
   } else {
      input.classList.remove('error')
      btnAdd.classList.remove('error-btn')
   }

   let task = {
      id: Math.random(),
      isDone: false,
      time: new Date().getHours() + ':' + new Date().getMinutes()
   }

   task.task = input.value;

   let cardBlock = document.querySelector('.card-classlist')
   let card = document.createElement('div')
   let pGoal = document.createElement('p')
   let pTime = document.createElement('p')

   card.classList.add('card')
   pTime.classList.add('time')
   pTime.innerHTML = task.time
   pGoal.innerHTML = input.value
   input.setAttribute('name', 'task')
   cardBlock.append(card)
   card.append(pGoal, pTime)

   todos.push(task)
   // reload(todos, )

   console.log(todos);
   form.reset()
}
//  else {
//    form.onsubmit = (event) => {
//       event.preventDefault()
   
   
//       form.reset()
   
//    }
// }

function reload(arr, place) {
   place.innerHTML = ''

   for(let item of arr) {
       
   }
}