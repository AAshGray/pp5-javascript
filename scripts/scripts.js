document.getElementById('click').onclick = function() {
    let password = document.getElementById('password').value;
    let outputMessages = "Password is invalid:"
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
        outputMessages += "<p>The password must be at least 8 characters long.</p>";
        counter++;
    }

    if (!specialCharacters.some(char => password.includes(char))) {
        outputMessages += "The password must contain at least one special character (!, @, #, $).\n";
        counter++;
    }
    
    if (counter > 0) {
        document.getElementById('result').innerHTML = outputMessages;
    }
    
}