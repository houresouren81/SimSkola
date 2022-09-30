var modal = document.getElementById('id01');




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
      {  alert( "välkommen, du är nu inloggad");
      localStorage.setItem("username", "Sara");
      document.getElementById("save").innerHTML = localStorage.getItem("username");
      
      localStorage.setItem("password", "qwe123");
      document.getElementById("save").innerHTML = localStorage.getItem("passwword");
    }
      
      else{
        alert("försök igen");
      }
      
      
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }