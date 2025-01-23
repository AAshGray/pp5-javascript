document.getElementById('click').onclick = function() {
    let password = document.getElementById('password').value;
    let outputMessages = ""
    let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']
    
    // Password Requirements
    // Minimum length: 8
    // At least one special character (from specialCharacters array)
    // no spaces
    // At least 1 uppercase letter
    // At least 1 lowercase letter
    // At least 1 numeric digit

    if (password.length < 8) {
        outputMessages += "The password must be at least 8 characters long.";
    }

    if (!specialCharacters.some(char => password.includes(char))) {
        outputMessages += "The password must contain at least one special character (!, @, #, $).\n";
    }
    
    document.getElementById('result').innerHTML = outputMessages;
}