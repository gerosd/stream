const namee = document.querySelector(".name");
const chang = document.querySelectorAll(".chang");
const loginreg = document.querySelector(".login_reg");

document.addEventListener("DOMContentLoaded", () => {
    const URLParam = new URLSearchParams(window.location.search);
    const mode = URLParam.get('login');

    if (mode === 'false') {
        namee.textContent = "Регистрация";
        chang[0].style.display = "none";
        chang[1].style.display = "flex";
        loginreg.classList.add("changeColor");
    } else {
        namee.textContent = "Вход";
        chang[0].style.display = "flex";
        chang[1].style.display = "none";
        loginreg.classList.remove("changeColor");
    }
});

function changan(arg) {
    if (arg === 1) {
        namee.innerHTML = "Регистрация";
        chang[0].style.display = "none";
        chang[1].style.display = "flex";
        loginreg.classList.add("changeColor");
    } else if (arg === 2) {
        namee.innerHTML = "Вход";
        chang[0].style.display = "flex";
        chang[1].style.display = "none";
        loginreg.classList.remove("changeColor");
    }
}