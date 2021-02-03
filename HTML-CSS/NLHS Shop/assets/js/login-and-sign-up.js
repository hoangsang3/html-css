const modal = document.getElementById("modal");
const login = document.getElementById("login");
const signUp = document.getElementById("sign-up");
const formLogin = document.getElementById("form-login");
const formSignUp = document.getElementById("form-sign-up");
const close = document.getElementsByClassName("close");

for (let c = 0; c < close.length; c++) {
    close[c].onclick = () => {
        modal.style.display = "none";
    };
}

login.onclick = function () {
    modal.style.display = "block";
    formLogin.style.display = "block";
    formSignUp.style.display = "none";
};

signUp.onclick = () => {
    modal.style.display = "block";
    formSignUp.style.display = "block";
    formLogin.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const classLogin = document.getElementsByClassName("login");
const classSignUp = document.getElementsByClassName("sign-up");

for (let cl = 0; cl < classLogin.length; cl++) {
    classLogin[cl].addEventListener("click", function () {
        formLogin.style.display = "block";
        formSignUp.style.display = "none";
    });
}
for (let cS = 0; cS < classLogin.length; cS++) {
    classSignUp[cS].addEventListener("click", function () {
        formSignUp.style.display = "block";
        formLogin.style.display = "none";
    });
}

var esc = 27;
document.addEventListener("keydown", function (e) {
    if (e.keyCode == esc) {
        modal.style.display = "none";
    }
});
