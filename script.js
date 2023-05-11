const form = document.forms.add

let input = document.querySelector('.input')
let cont = document.querySelector('.container')
let btnAdd = document.querySelector('.add')
let todos = []
let trush = document.querySelector('.trush')

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
   let imgClose = document.createElement('img')
   let btnDone = document.createElement('button')
   let done = document.createElement('p')

   card.classList.add('card')
   pTime.classList.add('time')
   imgClose.classList.add('img-close')

   pTime.innerHTML = task.time
   pGoal.innerHTML = input.value
   btnDone.innerHTML = 'Done'
   btnDone.classList.add('btn-done')
   imgClose.src = './icon/211651_close_round_icon.svg'
   input.setAttribute('name', 'task')

   cardBlock.append(card)
   card.append(pGoal, pTime, imgClose, btnDone, done)  

   btnDone.onclick = () => {
      pGoal.classList.add('text')
      done.classList.add('done')
      done.innerHTML = 'Done in ' + new Date().getHours() + ':' + new Date().getMinutes()
   }

   imgClose.onclick = () => {
      card.remove()
      todos.splice(todos.length - 1, 1)
      todos = []
      console.log(todos)
   }

   trush.onclick = () => {
      const cards = document.querySelectorAll('.card')
      cards.forEach(card => {
      //   card.classList.add('trush-bum')
      //   setTimeout(() => {
          card.remove()
      //   }, 3000)
      })
      todos = []
      console.log(todos)
   }


   todos.push(task)

   console.log(todos)
   form.reset()
}
