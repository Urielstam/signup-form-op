
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#password-confirmed');
const pswdMsg =  document.querySelector('#pswd-msg'); 


const checkConfirmed = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    }
    else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Confirm password does not match');
    } 
    else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
}

const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('input', function (e) {
    checkConfirmed();
});
