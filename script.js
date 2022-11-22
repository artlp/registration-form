const pw1 = document.querySelector('#password1');
const pw2 = document.querySelector('#password2');
const errDiv1 = document.querySelectorAll('.errormsg')[0];
const errDiv2 = document.querySelectorAll('.errormsg')[1];
// const varName = document.querySelector('cssSelector');
pw2.addEventListener('input', () => {
    let pass1 = pw1.value;
    let pass2 = pw2.value;
    if (pass1 !== pass2) {
        errDiv2.innerText = "Passwords do not match!" } 
        else {
        errDiv2.innerText = "" 
        pw1.classList.remove('error'); 
        pw2.classList.remove('error'); 
        }
})
pw1.addEventListener('input', () => {
    let pass1 = pw1.value;
    let pass2 = pw2.value;
    if (pass1 !== pass2) {
        errDiv2.innerText = "Passwords do not match!" } 
        else {
        errDiv2.innerText = "" 
        pw1.classList.remove('error'); 
        pw2.classList.remove('error'); 
        }
})