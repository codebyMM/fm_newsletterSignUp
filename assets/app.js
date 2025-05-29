const btnSubmit = document.querySelector('#btnSubmit');
const btnDismiss = document.querySelector('#btnDismiss');
const modalContainer = document.querySelector('.modal-container');
const emailAddress = document.querySelector('.email-address');

const mail = document.querySelector('#mail');

btnDismiss.addEventListener('click', () => {
    modalContainer.classList.toggle('show');
});

btnSubmit.addEventListener('click', (e) => {
    emailAddress.innerText = mail.value;
    mail.value = '';
    modalContainer.classList.toggle('show');
    e.preventDefault();
});

document.querySelector('form').addEventListener('submit', (e) => {
    if (mail.checkValidity()) {
        error.innerText = validationMessage;
    }
    e.preventDefault();
});

mail.addEventListener('input', (e) => {
    if (e.currentTarget.validity.typeMismatch) {
        document.querySelector('.error').innerText = "Valid Email Required";
        mail.style.border = '.5px solid red';
        mail.style.background = 'rgba(255, 51, 51, 0.47)';
    } else {
        document.querySelector('.error').innerText = "";
        mail.style.background = '';
        mail.style.border = '';
    }
});