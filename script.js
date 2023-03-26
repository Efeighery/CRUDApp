const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
});

const sendData = (usernameVal, sRate, Count) =>{
    if(sRate === Count){
        swal("Hello "+usernameVal+ "; Registration complete!", "success");
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

function Validate(){
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
    alert("Psyche!");
    setSuccessMsg(usernameVal);
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = "form-control error";
    small.innerHTML = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}