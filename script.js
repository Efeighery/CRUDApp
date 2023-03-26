const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// When the submit button is clicked, the method used to validate user account credentials is triggered within the Event Listener
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

// Potential broken access control technique?
var pass = prompt('Finish this phrase: She sells seashells....');

while(pass !== "by the seashore"){
    if(pass === "by the seashore"){
        break;
    }
}

alert("Welcome, welcome");


const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

// Validating the email to see if it's written in the way that it was intended
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}


// Used to prevent potential code injection through input validation
function Validate(){
    const usernameVal = username.value.trim();
    const surnameVal = surname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // Checking the first name to see if meets the specified length
    if(usernameVal === ""){
        setErrorMsg(username, 'first name cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 char');
    }
    else{
        setSuccessMsg(username);
    }

    // Checking the surname to see if meets the specified length
    if(surnameVal === ""){
        setErrorMsg(surname, 'last name cannot be blank');
    }
    else if(surnameVal.length <=2){
        setErrorMsg(surname, 'min 3 char');
    }
    else{
        setSuccessMsg(surname);
    }

    // Checking the email to see if meets the specified length
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email is not valid');
    }
    else{
        setSuccessMsg(email);
    }

    // Analysing the password to see if it met credentials
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min 8 char');
    }
    else{
        setSuccessMsg(password);
    }

    //Confirming password to see if they match with the password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'confirm password cannot be blank');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Not Matched!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    SuccessMsg(usernameVal);

}

// Setting the error message if the credentials for all fields aren't met
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = "form-control error";
    
    // Avoids XSS attacks (DOM based) via Inner Text
    small.innerText = errormsgs;
}

// Setting the success message if the credentials for all fields are met
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Keep HTTP responses from session fixation
module.exports.index = async function (req, res) {
    const value = req.query.value;
  
    res.setHeader("X-Data", value);
    res.cookie("data", value);
  };

// CSRF implementation strategy
const express = require('express');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const cookieParser = require('cookie-parser')

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'html');

app.get('/', csrfProtection, (req, res) =>{
    res.render('index', {csrfToken: req.csrfToken() });
});

app.post('index', csrfProtection, (req, res, next) => {
    res.send(req.body.username);
});

app.listen(8080);