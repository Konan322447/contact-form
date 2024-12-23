// Inputs Variables
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const enquiry = document.getElementById('enquiry');
const support = document.getElementById('support');
const message = document.getElementById('message');
const required = document.getElementById('required');
const myForm = document.getElementById('myForm');

// Error Message Variables
const fNameError = document.getElementById('firstNameError');
const lNameError = document.getElementById('lastNameError');
const consentError = document.getElementById('consentError');
const emailErrorOne = document.getElementById('emailErrorOne'); 
const queryError = document.getElementById('queryError');
const messageError = document.getElementById('messageError');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;

    if (fName.value.trim().length === 0) {
        fNameError.style.display = 'block';
        fName.style.border = '1px solid hsl(0, 66%, 54%)';
        isFormValid = false;
    } else {
        fNameError.style.display = 'none';
        fName.style.border = '1px solid hsl(187, 24%, 22%)';
    }

    if (lName.value.trim().length === 0) {
        lNameError.style.display = 'block';
        lName.style.border = '1px solid hsl(0, 66%, 54%)';
        isFormValid = false;
    } else {
        lNameError.style.display = 'none';
        lName.style.border = '1px solid hsl(187, 24%, 22%)';
    }

    const isValidEmail = (emaili) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emaili);

    if (!isValidEmail(email.value) || email.value.trim().length === 0) {
        emailErrorOne.style.display = 'block';
        email.style.border = '1px solid hsl(0, 66%, 54%)';
        isFormValid = false;
    } else {
        emailErrorOne.style.display = 'none';
        email.style.border = '1px solid hsl(187, 24%, 22%)';
    }

    if (message.value.trim().length === 0) {
        messageError.style.display = 'block';
        message.style.border = '1px solid hsl(0, 66%, 54%)';
        isFormValid = false;
    } else {
        messageError.style.display = 'none';
        message.style.border = '1px solid hsl(187, 24%, 22%)';
    }

    const radios = document.getElementsByName('radio');
    let selected = false;

    for (const radio of radios) {
        if (radio.checked) {
            selected = true;
            break;
        }
    }

    if (!selected) {
        queryError.style.display = 'block';
        isFormValid = false;
    } else {
        queryError.style.display = 'none';
    }

    if (!required.checked) {
        consentError.style.display = 'block';
        isFormValid = false;
    } else {
        consentError.style.display = 'none';
    }

    if (isFormValid) {
        window.scrollTo({
            top: 0,       
            behavior: 'smooth' 
        });
        
        document.querySelector('.confirmation').style.top = '6%';
        // myForm.reset();
    }
});
