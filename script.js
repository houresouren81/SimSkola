const username = document.getElementById("username");
const password = document.getElementById("password");
const loggain = document.getElementById("loggain");
const loggaut = document.getElementById("loggaut");








if (localStorage.getItem("username") == "Sara" && localStorage.getItem("password")=="qwe123") { 

    document.getElementById("sida1").style.display= "none";
    document.getElementById("loggaut").style.display="block";

    
   
   
    
    }




loggain.addEventListener("click", function () {

    if (username.value == "Sara" && password.value == "qwe123") {

        localStorage.setItem("usernamn", "Sara");
        localStorage.setItem("password", "qwe123");
        document.getElementById("sida1").style.display = "none";


        document.getElementById("loggaut").style.display = "block";


    }
    else {

        alert("Fel password försök igen.");
    }
});


loggaut.addEventListener("click", function () {



    localStorage.removeItem("usernamn", "Sara");
    localStorage.removeItem("password", "qwe123");
    document.getElementById("sida1").style.display = "block";

    document.getElementById("loggaut").style.display = "none";
}


);





