const form = document.getElementById("form");
const alphanumeric = document.getElementById("alphanumeric");
const correctsize = document.getElementById("correctsize");
const email = document.getElementById("email");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
});


//Email Validation
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol<1)
    return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot<=atSymbol + 2)
    return false;
    if(dot === emailVal.length-1)
    return false;
    return true;
}

function Isalphanumeric(alphanumericVal) {

    for (var i = 0; i < alphanumericVal.length; i++) {
        var char1 = alphanumericVal.charAt(i);
        var cc = char1.charCodeAt(0);

        if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
        } else {
            return false;
        }
    }

    return true;
}

const validate = () => {
    const alphanumericVal = alphanumeric.value.trim();
    const correctsizeVal = correctsize.value.trim();
    const emailVal = email.value.trim();

    //Alphanumeric Check
    if(alphanumericVal === ""){
        setErrorMsg(alphanumeric,'Input cannot be only spaces');
    }
    else if(!Isalphanumeric(alphanumericVal))
    {
        setErrorMsg(alphanumeric,'Input is not Alphanumeric');
    }
    else{
        setSuccessMsg(alphanumeric,'Great!! Input is Alphanumeric');
    }

    //CorrectSize Check
    if(correctsizeVal === ""){
        setErrorMsg(correctsize,'Input cannot be only spaces');
    }
    else if(correctsizeVal.length != 5)
    {
        setErrorMsg(correctsize,'Input must be of 5 digits');
    }
    else{
        setSuccessMsg(correctsize,'Great!! Input is of 5 digits');
    }

    //Email Validation
    if(emailVal === ""){
        setErrorMsg(email,'Email cannot be only spaces');
    }
    else if(!isEmail(emailVal))
    {
        setErrorMsg(email,'The Email entered is not valid');
    }
    else{
        setSuccessMsg(email,'Great!! Email is valid');
    } 
}

  function setErrorMsg(input,errormsgs){
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = "form-control error";
      small.innerText = errormsgs;
  }

  function setSuccessMsg(input,successmsgs){
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = "form-control success";
      small.innerText = successmsgs;
  }