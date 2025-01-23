document.getElementById('click').onclick = function() {
    let password = document.getElementById('password').value;
    let outputMessages = "Password is invalid:<br>"
    let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']
    
    // Password Requirements
    // Minimum length: 8
    // At least one special character (from specialCharacters array)
    // no spaces
    // At least 1 uppercase letter
    // At least 1 lowercase letter
    // At least 1 numeric digit

    let counter = 0;

    if (password.length < 8) {
        outputMessages += "The password must be at least 8 characters long.<br>";
        counter++;
    }

    if (!specialCharacters.some(char => password.includes(char))) {
        outputMessages += "The password must contain at least one special character (!, @, #, $).<br>";
        counter++;
    }

    if (password.includes(" ")) {
        outputMessages += "The password must not contain spaces.<br>";
        counter++;
    }

    if (password === password.toLowerCase()) {
        outputMessages += "The password must have at least one capital letter.<br>";
        counter++;
    }

    if (password === password.toUpperCase()) {
        outputMessages += "The password must have at least one lowercase letter.<br>";
        counter++;
    }



    // Needs to be the last thing in the file
    if (counter > 0) {
        document.getElementById('result').innerHTML = outputMessages;
    }
    
}