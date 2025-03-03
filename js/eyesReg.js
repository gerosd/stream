const loginInput1 = document.querySelectorAll('.login')[1];
const photo1 = document.querySelector('#photo');
const passInput1 = document.querySelectorAll('.password')[1];
const images1 = [
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
    const length = passInput1.value.length;
    const previousLength = passInput1.dataset.previousLength || 0;

    if (length === 0) {
        if (previousLength > length) {
            for (let i = images1.length - 1; i >= 0; i--) {
                await sleep(50);
                photo1.src = images1[i];
            }
        } else {
            photo1.src = "../images/login/eyes_open.png";
        }
    } else if (length === 1) {
        if (previousLength < length) {
            for (let i = 0; i < images1.length; i++) {
                await sleep(50);
                photo.src = images1[i];
            }
        } else {
            photo1.src = "../images/login/close.png";
        }
    } else {
        photo1.src = images1[4];
    }

    passInput1.dataset.previousLength = length;
}

function changePhoto() {
    const length = loginInput1.value.length;

    if (length === 0) {
        photo1.src = "../images/login/eyes_open.png";
    } else if (length >= 1 && length < 10) {
        photo1.src = "../images/login/eyes_1.png";
    } else if (length >= 10 && length < 15) {
        photo1.src = "../images/login/eyes_2.png";
    } else if (length >= 15 && length < 20) {
        photo1.src = "../images/login/eyes_3.png";
    } else if (length >= 20 && length < 25) {
        photo1.src = "../images/login/eyes_4.png";
    } else if (length >= 25 && length < 30) {
        photo1.src = "../images/login/eyes_5.png";
    } else if (length >= 30) {
        photo1.src = "../images/login/eyes_6.png";
    }
}

function stock() {
    photo1.src = "../images/login/eyes_open.png";
}

passInput1.addEventListener('input', eyesClose);
loginInput1.addEventListener('blur', stock);
loginInput1.addEventListener('input', changePhoto);