const username = document.getElementById("username");
const password = document.getElementById("password");
const loggain = document.getElementById("loggain");
const loggaut = document.getElementById("loggaut");




let userChecker = localStorage.getItem("username");


if (userChecker == 'Sara'  );  { 

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


// Här nere rensar du localStorage med en rad.
    localStorage.clear();
    document.getElementById("sida1").style.display = "block";

    document.getElementById("loggaut").style.display = "none";
}


);