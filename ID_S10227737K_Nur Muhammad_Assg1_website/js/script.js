
//these are the variables that i will use
const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const emailaddy = document.getElementById('email')
const form = document.getElementById('myForm')
const errorElement = document.getElementById('error')


//this will listen to the user of the form and what they the input is, if there is no input and they click submit
//a message will be shown to notify to fill in the requiered fields
myForm.addEventListener('submit', (e) => {
  let messages = []
  if (fname.value === '' || fname.value == null) {
    messages.push('First Name is required')
  }
  if (lname.value === '' || lname.value == null) {
    messages.push('Last Name is required')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email Address is required')
  }

  //these are the values which are invalid email so if user has any of these in their email address
  //message will be shown saying invalid email address
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