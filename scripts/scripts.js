document.getElementById('click').onclick = function() 
{
    let password = document.getElementById('password').ariaValueMax;
    let outputMessages = ""
    let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']
    
    if (password.length < 8) {
        outputMessages += "The password must be at least 8 characters long.";
    }

    
    

    


}