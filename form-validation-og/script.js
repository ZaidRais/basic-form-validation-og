let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");

form.addEventListener("submit", e => {
    e.preventDefault();

    // console.log("hello");

    validedform();
});

let setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

let setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success")
    inputControl.classList.remove("error")
}

// var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let validedform = () => {
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var cpasswordValue = cpassword.value.trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var mailformat = /zaid/ ;

    if (usernameValue === "") {
        setError(username, "Username is Required");
    }
    else if (!isNaN(usernameValue)) {
        setError(username, "Username Can Not be number");

    } else {
        setSuccess(username);
    }

    // console.log(emailValue.match(mailformat))


    if (!emailValue.match(mailformat)) {
        // setSuccess(email);
        setError(email, 'Provide a valid email address');

    }
    else {
        // setError(email, 'Provide a valid email address');
        setSuccess(email);
    }



    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }



    if (cpasswordValue === '') {
        setError(cpassword, 'Please confirm your password');
    } else if (passwordValue !== cpasswordValue) {
        setError(cpassword, "Passwords doesn't match");
    } else {
        setSuccess(cpassword);
    }


}