function Validate() {
  let password = document.getElementById("password-field1").value;
  let confirmPassword = document.getElementById("password-field2").value;
  let a = document.getElementById("Username").value;



  if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
  }



  

  if ((a.length < 5) || (a.length > 15))
  {
  alert("Your Username must be 5 to 15 Character");
  document.getElementById("Username").focus();
  
  return false;
  }






  return true;
}






const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}