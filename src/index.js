const darkModeKnap = document.querySelector("#darkmodeknap");
const lightModeKnap = document.querySelector("#lightmodeknap");

darkModeKnap.addEventListener("click", skiftTilDark);
lightModeKnap.addEventListener("click", skiftTilLight);

function skiftTilDark() {
    document.documentElement.classList.add("dark");
}

function skiftTilLight() {
    document.documentElement.classList.remove("dark");
}



  
