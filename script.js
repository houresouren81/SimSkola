const username = document.getElementById("username");
const password = document.getElementById("password");
const loggain = document.getElementById("loggain");
const loggaut = document.getElementById("loggaut");




let userChecker = localStorage.getItem("username");
let passChecker = localStorage.getItem("password");


if (userChecker == 'Sara' && passChecker == 'qwe123' )  { 

    document.getElementById("sida1").style.display= "none";
    document.getElementById("loggaut").style.display="block";


}

loggain.addEventListener("click", function () {

    if (username.value == "Sara" && password.value == "qwe123") {

        localStorage.setItem("username", "Sara");
        localStorage.setItem("password", "qwe123");
        document.getElementById("sida1").style.display = "none";


        document.getElementById("loggaut").style.display = "block";


    }
    else {

        alert("Fel password försök igen.");
    }
});


loggaut.addEventListener("click", function () {



    localStorage.clear();
    document.getElementById("sida1").style.display = "block";

    document.getElementById("loggaut").style.display = "none";
});