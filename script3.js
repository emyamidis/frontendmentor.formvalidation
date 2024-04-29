document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.call-to-action');
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password')
    let formSubmitted = false;

    button.addEventListener('click', e => {
        e.preventDefault();
        validateInput();
        formSubmitted = true; 
    })

    firstName.addEventListener('input', () => {
        if (formSubmitted) {
            checkFirstName();
        }
    });

    lastName.addEventListener('input', () => {
        if (formSubmitted) {
            checkLastName();
        }
    });


    email.addEventListener('input', () => {
        if (formSubmitted) {
            checkEmail();
        }
    });

    password.addEventListener('input', () => {
        if (formSubmitted) {
            checkPassword();
        }
    });



    function setError(element, message) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error-message')
        const iconDisplay = inputControl.querySelector('.icon')

        errorDisplay.innerText = message;
        errorDisplay.style.display = 'block'
        iconDisplay.style.display = 'block'
        element.classList.add('input-error')
    }

   function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message')
    const iconDisplay = inputControl.querySelector('.icon')

    errorDisplay.innerText = '';
    errorDisplay.style.display = 'none'
    iconDisplay.style.display = 'none'
    element.classList.remove('input-error')
    }

    function validateEmail(element) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(element)
    }

    

    function checkFirstName() {
        const firstNameValue = firstName.value.trim();
        if (firstNameValue === '') {
            setError(firstName, 'First Name cannot be empty');
        } else {
            setSuccess(firstName);}
    }

    function checkLastName() {
        const lastNameValue = lastName.value.trim();
        if (lastNameValue === ''){
            setError(lastName, 'Last Name cannot be empty');
             } else {
            setSuccess(lastName);}
    }

    function checkEmail() {
        const emailValue = email.value.trim();
        if (emailValue === '') {
            setError(email, 'Email cannot be empty')
        } else if (!validateEmail(emailValue)) {
            setError(email, 'Looks like this is not an email')
        } else {
            setSuccess(email)
        }
    }

    function checkPassword() {
        const passwordValue = password.value.trim();

        if (passwordValue === '') {
            setError(password, 'Password cannot be empty')
        } else if (passwordValue.length < 8) {
            setError(password, 'Password length must be at least 8 character')
        } else {
            setSuccess(password)
        }
    }


    function validateInput() {
        checkFirstName();
        checkLastName();
        checkEmail();
        checkPassword();   

    }


})