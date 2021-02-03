//Remove Toast Message
var faTimes = document.querySelectorAll(".fa-times");
for (let t = 0; t < faTimes.length; t++) {
    faTimes[t].addEventListener("click", function (e) {
        const toastMessage = document.getElementsByClassName("toast-message");
        for (let m = 0; m < toastMessage.length; m++) {
            toastMessage[m].style.animation = "fadeOut linear 0.5s forwards";
        }
    });
}

//Variable
var containerAnimation = document.getElementById("container-animation");
var toastMessageSuccess = document.getElementById("toast-message--success");
var toastMessageInfo = document.getElementById("toast-message--info");
var toastMessageWarning = document.getElementById("toast-message--warning");
var toastMessageDanger = document.getElementById("toast-message--danger");

var valueMarginTop = 0;
//Display flex and display none when click in success
var btnSuccess = document.getElementById("btn--success");
btnSuccess.addEventListener("click", function () {
    const toastMessage = document.getElementsByClassName("toast-message");
    for (let m = 0; m < toastMessage.length; m++) {
        toastMessage[m].style.animation = "fadeIn linear 0.5s forwards";
    }
    containerAnimation.style.animation = "fadeIn linear 0.5s forwards";

    toastMessageSuccess.style.display = "flex";
    toastMessageInfo.style.display = "none";
    toastMessageWarning.style.display = "none";
    toastMessageDanger.style.display = "none";
});

//Display flex and display none when click in success
var btnInfo = document.getElementById("btn--info");
btnInfo.addEventListener("click", function () {
    const toastMessage = document.getElementsByClassName("toast-message");
    for (let m = 0; m < toastMessage.length; m++) {
        toastMessage[m].style.animation = "fadeIn linear 0.5s forwards";
    }
    containerAnimation.style.animation = "fadeIn linear 0.5s forwards";

    toastMessageSuccess.style.display = "none";
    toastMessageInfo.style.display = "flex";
    toastMessageWarning.style.display = "none";
    toastMessageDanger.style.display = "none";

    toastMessageInfo.style.marginTop = `${valueMarginTop}`;
});

//Display flex and display none when click in success
var btnWarning = document.getElementById("btn--warning");
btnWarning.addEventListener("click", function () {
    const toastMessage = document.getElementsByClassName("toast-message");
    for (let m = 0; m < toastMessage.length; m++) {
        toastMessage[m].style.animation = "fadeIn linear 0.5s forwards";
    }
    containerAnimation.style.animation = "fadeIn linear 0.5s forwards";

    toastMessageSuccess.style.display = "none";
    toastMessageInfo.style.display = "none";
    toastMessageWarning.style.display = "flex";
    toastMessageDanger.style.display = "none";
    toastMessageWarning.style.marginTop = `${valueMarginTop}`;
});

//Display flex and display none when click in success
var btnDanger = document.getElementById("btn--danger");
btnDanger.addEventListener("click", function () {
    const toastMessage = document.getElementsByClassName("toast-message");
    for (let m = 0; m < toastMessage.length; m++) {
        toastMessage[m].style.animation = "fadeIn linear 0.5s forwards";
    }
    containerAnimation.style.animation = "fadeIn linear 0.5s forwards";

    toastMessageSuccess.style.display = "none";
    toastMessageInfo.style.display = "none";
    toastMessageWarning.style.display = "none";
    toastMessageDanger.style.display = "flex";
    toastMessageDanger.style.marginTop = `${valueMarginTop}`;
});
