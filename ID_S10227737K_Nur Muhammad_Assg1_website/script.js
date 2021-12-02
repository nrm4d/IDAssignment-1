const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const emailaddy = document.getElementById('email')
const form = document.getElementById('myForm')
const errorElement = document.getElementById('error')

myForm.addEventListener('submit', (e) => {
  let messages = []
  if (fname.value === '' || fname.value == null) {
    messages.push('First Name is required')
  }
  if (lname.value === '' || lname.value == null) {
    messages.push('Last Name is required')
  }


  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (email.value.match(mailformat)) {

    }
    else {
        messages.push('Invalid Email address')
    } 
 

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})