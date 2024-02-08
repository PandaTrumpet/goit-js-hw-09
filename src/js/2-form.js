'use strict'

const KEY_LOCAL = 'feedback-form-state'

const form = document.querySelector('.feedback-form')

form.addEventListener('input',handler)

function handler(e) {
  const email = e.email.value
  const message = e.message.value
 return {email, message}
}
form.addEventListener('submit', (event)=>{
  event.preventDefault()
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.message.value);
  localStorage.clear()
  form.reset()
})

form.addEventListener('input', (event)=>{
  const localMessage = handler(event.currentTarget)
  const json = JSON.stringify(localMessage)
localStorage.setItem(KEY_LOCAL, json )
})



const localData = localStorage.getItem(KEY_LOCAL)

if(localData) {
  const dataInfo  = JSON.parse(localData)

   form.email.value = dataInfo.email 
  form.message.value = dataInfo.message 

}

