// Get the modal
var modal = document.getElementById('id01');

localStorage.setItem("username", "Sara");
// Retrieve
document.getElementById("save").innerHTML = localStorage.getItem("username");

localStorage.setItem("password", "qwe123");
// Retrieve
document.getElementById("save").innerHTML = localStorage.getItem("passwword");



// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
  
   
    let uname = document.getElementsByName("uname")[0].value;
    let psw = document.getElementsByName("psw")[0].value;
    try { 
      if(uname == "Sara" && psw =="qwe123")
      {  alert( "välkommen, du är nu inloggad");}
      
      else{
        alert("försök igen");
      }
      
      
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }