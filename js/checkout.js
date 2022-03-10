// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firstName = document.querySelector('.name');
var mail = document.querySelector('.email');
var text = document.querySelectorAll('input[type=text]');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorEmail = document.getElementById('errorEmail');
var errorAdress = document.getElementById('errorAdress');




(function () {
'use strict'
const forms = document.querySelectorAll('.requires-validation')
Array.from(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
  
      form.classList.add('was-validated')
    }, false)
  })
})()

// Exercise 6
function validate() {
/*
    //firstName.oninvalid = function(event) {event.target.setCustomValidity('Numbers in the name are not valid'); }}
    //text.addEventListener('input', function(event){ if ( 'block' === elem.style.display ) { input.className = ''; elem.style.display = 'none'; } });
    // Validate fields entered by the user: name, phone, password, and email
    const isRequired = value => value === '' ? false : true; //++in the html5 validation++
    const isBetween = (length, min, max) => length < min || length > max ? false : true; // ++in the html5 validation++
    const hasNumbers = () => { /\d/.test()};
    const isEmailValid = (mail) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(mail);
    };
    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{3,})");
        return re.test(password);
    };

   /* if(hasNumbers(firstName)){
        firstName.appendChild(errorName);
        errorName.style.display = 'block';

    } else {
        errorName.style.display = 'none';
    }

    mail.addEventListener("input", function (event) {
        if (mail.validity.typeMismatch) {
          mail.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
        } else {
          mail.setCustomValidity("");
        }
      });

}

if (firstName.value == isRequired || firstName.value.length < 3 || !firstName.value.match(hasNumbers)) {
    firstName.classList.add('is-invalid');
    errorName.style.display = 'block';
}
}
/*
    //name
    const checkName = () => {
        let valid = false;
        const min = 3,
            max = 25;
    //minlength="3" pattern="[A-zÀ-ú]{3,25}" required
        if (!isRequired(firstName)) {
            firstName.classList.add('invalid');
            firstName.innerHTML = `This field is required`;
            errorName.style.display = 'block';
            firstName.style.color = 'red';
        } else if (!isBetween(firstName.length, min, max)) {
            firstName.classList.add('invalid');
            errorName.innerHTML = `Name must be between ${min} and ${max} characters.`;
            errorName.style.display = 'block';
        } else
         if (hasNumbers(firstName)) {
            firstName.classList.add('invalid');
            errorName.style.display = 'block';
        }   else {
            firstName.classList.remove('invalid');
            errorName.style.display="none";
        }
        
    }

//mail
const checkEmail = () => {
    let valid = false;
    
     if (!isEmailValid(mail)) {
        showError(mail, 'Email is not valid.')
    } else {
        showSuccess(mail);
        valid = true;
    }
    return valid;
}
//adress
const checkAdress = () => {
    let valid = false;
    const min = 3,
            max = 40;
    const Adress = adress.value.trim();
    if (!isRequired(Adress)) {
        showError(adress, 'Adress cannot be blank.');
    } else if (!isBetween(Adress.length, min, max)) {
        showError(adress, `Adress must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(adress);
        valid = true;
    }
    return valid;
}
//lastName
const checkLastName = () => {
    let valid = false;
    const min = 3,
        max = 25;
    const LastName = lastName.value.trim();

    if (!isRequired(LastName)) {
        showError(lastName, 'Last Name cannot be blank.');
    } else if (!isBetween(LastName.length, min, max)) {
        showError(lastName, `Last Name must be between ${min} and ${max} characters.`)
    } else if (hasNumbers(LastName)) {
        showError(errorName)
    }   else {
        showSuccess(lastName);
        valid = true;
    }
    return valid;
}
//password
const checkPassword = () => {
    let valid = false;
    const Password = password.value.trim();
    if (!isRequired(Password)) {
        showError(password, 'Password cannot be blank.');
    } else if (!isPasswordSecure(Password)) {
        showError(password, errorPassword);
    } else {
        showSuccess(password);
        valid = true;
    }

    return valid;
}

checkName(); 
 checkEmail();
 checkAdress();
 checkLastName();
 checkPassword();
}*/}
