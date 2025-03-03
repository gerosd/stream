const loginInput = document.querySelectorAll('.login')[0];
const photo = document.querySelector('#photo');
const passInput = document.querySelectorAll('.password')[0];
const images = [
    "../images/login/eyes_open.png",
    "../images/login/25close.png",
    "../images/login/50close.png",
    "../images/login/75close.png",
    "../images/login/close.png"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function eyesClose() {
    const length = passInput.value.length;
    const previousLength = passInput.dataset.previousLength || 0;

    if (length === 0) {
        if (previousLength > length) {
            for (let i = images.length - 1; i >= 0; i--) {
                await sleep(50);
                photo.src = images[i];
            }
        } else {
            photo.src = "../images/login/eyes_open.png";
        }
    } else if (length === 1) {
        if (previousLength < length) {
            for (let i = 0; i < images.length; i++) {
                await sleep(50);
                photo.src = images[i];
            }
        } else {
            photo.src = "../images/login/close.png";
        }
    } else {
        photo.src = images[4];
    }

    passInput.dataset.previousLength = length;
}

function changePhoto() {
    const length = loginInput.value.length;

    if (length === 0) {
        photo.src = "../images/login/eyes_open.png";
    } else if (length >= 1 && length < 10) {
        photo.src = "../images/login/eyes_1.png";
    } else if (length >= 10 && length < 15) {
        photo.src = "../images/login/eyes_2.png";
    } else if (length >= 15 && length < 20) {
        photo.src = "../images/login/eyes_3.png";
    } else if (length >= 20 && length < 25) {
        photo.src = "../images/login/eyes_4.png";
    } else if (length >= 25 && length < 30) {
        photo.src = "../images/login/eyes_5.png";
    } else if (length >= 30) {
        photo.src = "../images/login/eyes_6.png";
    }
}

function stock() {
    photo.src = "../images/login/eyes_open.png";
}

passInput.addEventListener('input', eyesClose);
loginInput.addEventListener('blur', stock);
loginInput.addEventListener('input', changePhoto);