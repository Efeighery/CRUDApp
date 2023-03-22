const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

var pass;

while (pass !== "beans"){
    pass = prompt("Guess the password to enter the application");

    if(pass === "beans"){
        break;
    }
}

// Sign up functionality
function signUp(e){
    event.preventDefault();

    console.log('Testing');

    var username = document.getElementById('username');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');

    var user = {
        username: username,
        surname: surname,
        email: email,
        password: password,
        cpassword: cpassword,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(user, json);

    console.log('User added');
}

form.addEventListener('submit', event =>{
    event.preventDefault();

    validateInputs();
});

const sendData = (usernameVal, sRate, Count) =>{
    if(sRate === Count){
        console.log("Hello "+usernameVal+ "; Registration complete!", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementById('form-control');
    var Count = formContr.length - 1;

    for(var a = 0; a < formContr.length; a++){
        if(formContr[a].className === "form-control success"){
            var sRate = 0 + a;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function validateInputs(){
    const usernameVal = username.value.trim();
    const surnameVal = surname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // username
    if(usernameVal === ""){
        setErrorMsg(username, 'First name can NOT be blank');
    }
    else if (usernameVal.length <=5){
        setErrorMsg(username, '6 characters at most');
    }
    else{
        setSuccessMsg(username);
    }

    // last name
    if(surnameVal === ""){
        setErrorMsg(surname, 'Surname can NOT be blank');
    }
    else if (surnameVal.length <=5){
        setErrorMsg(surname, '6 characters at most');
    }
    else{
        setSuccessMsg(surname);
    }

    // email
    if(emailVal === ""){
        setErrorMsg(email, 'Email can NOT be blank');
    }
    else if (!isEmail(emailVal)){
        setErrorMsg(email, 'Email isnt valid');
    }
    else{
        setSuccessMsg(email);
    }

    // password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password can NOT be blank');
    }
    else if (passwordVal.length <=7){
        setErrorMsg(password, '8 characters at most');
    }
    else{
        setSuccessMsg(password);
    }

        // Confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Password can NOT be blank');
    }
    else if (passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'No matches!!');
    }
    else{
        setSuccessMsg(cpassword);
        // alert('Boo!');
    }

    setSuccessMsg(usernameVal);
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = "form-control error";
    
    // Avoids XSS attacks (DOM based)
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

module.exports.index = async function (req, res) {
    const value = req.query.value;
  
    res.setHeader("X-Data", value);
    res.cookie("data", value);
  };