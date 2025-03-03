const photoInput = document.querySelector(".photo");

if (sessionStorage.getItem('name') != null){
    let value = sessionStorage.getItem('name');
    document.title = 'Twister | ' + value;
    document.querySelector(".name").innerText = value;
}

if(sessionStorage.getItem('description') != null) document.querySelector(".area").value = sessionStorage.getItem('description');

if (sessionStorage.getItem('photo') != null) document.querySelector("img").src = sessionStorage.getItem('photo');

function saveDesc() {
    const value = document.querySelector(".area").value;
    sessionStorage.setItem('description', value);
}

document.querySelector('.photo').onchange = event => {
    let reader = new FileReader();
    reader.onload = e => document.querySelector('img').src = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
};

photoInput.addEventListener("input", () => {
    let value = photoInput.value;
    sessionStorage.setItem('photo', value);
})