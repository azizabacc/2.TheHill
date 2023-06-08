/*Add a keyup listener on the first input field, 
so that once you type a letter in this field, it goes into the <span id="display-firstname">. 
The content of the field and the span should always remain the same.
*/
const inputFirstname = document.getElementById('firstname');
const displayFirstname = document.getElementById('display-firstname');
inputFirstname.addEventListener('keyup', function() {
    displayFirstname.textContent = inputFirstname.value;
});
/*Add a keyup listener on the second input (the number input), 
so that if the age is below 18 the content of the section a-hard-truth remains hidden, 
otherwise show them this hard to swallow fact. */
const inputAge = document.getElementById('age');
const displayHardTruth = document.getElementById('a-hard-truth');
inputAge.addEventListener('keyup', function(){
    if( inputAge.value > 18){
        displayHardTruth.style.visibility ="visible";

    }
});
/*Well this is a common one. 
Add a keyup listener on both fields and show a visual hint (for instance turn the field red)
 if the password is too short (less than 6 characters) 
 or if the password and its confirmation do not match. */
// Get the password input fields
const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('pwd-confirm');

// Add a keyup event listener to both password fields
passwordInput.addEventListener('keyup', validatePassword);
confirmPasswordInput.addEventListener('keyup', validatePassword);

// Function to validate the password fields
function validatePassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if the password is too short
  const isPasswordShort = password.length < 6;

  // Check if the password and its confirmation match
  const doPasswordsMatch = password === confirmPassword;

  // Apply visual hint based on validation results
  passwordInput.style.backgroundColor = isPasswordShort ? 'red' : '';
  confirmPasswordInput.style.backgroundColor = !doPasswordsMatch ? 'red' : '';
}
/*Finally, use a change listener on the <select> field to toggle a dark mode on the whole page.
 For ease of use, we'll say that the dark mode is just turning the background black and the text white.*/
let select = document.querySelector('select');
select.onchange = function(){
    const selectValue = select.value;
    //console.log(selectValue);
    if(selectValue =="dark"){
        console.log(selectValue);
        document.body.style.backgroundColor="black";
        document.body.style.color = "white"; 
    }else if(selectValue =="light"){
        document.body.style.backgroundColor="white";
        document.body.style.color = "black"; 
    }
}