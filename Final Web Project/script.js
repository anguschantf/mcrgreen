document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('myName');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');
    fields.newsletter = document.getElementById('newsletter');
   })

   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }   

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.myName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
   
    return valid;
   }

   class User {
    constructor(myName, email, newsletter, question) {
    this.myName = myName;
    this.email = email;
    this.newsletter = newsletter;
    this.question = question;
    }
   }

   function sendContact() {
    if (isValid()) {
        let usr = new User(myName, email, newsletter, question);

        alert(`${usr.myName} Thanks for your message!`)
    }

    else {
        alert("There is an error.")
    }
   }

   sendContact()