/*funtion for onblur validation*/
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
/*funtion for oninput validation*/
function myFunction2() {
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}
/*funtion for onclick validation*/
function myFunction3() {
  document.getElementById("demo1").innerHTML = "Welcome";
}

function Validate() {
        var password = document.getElementById("txtPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }