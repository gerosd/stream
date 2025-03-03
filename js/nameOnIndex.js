window.onload = function(){
    let savedName = sessionStorage.getItem('name');
    if (savedName === null) {
        console.log('Имя не найдено в sessionStorage.');
    } else {
        document.querySelector(".login_reg").innerHTML =
            `<a href="profile.html">${savedName}</a>`;
        console.log(`Привет, ${savedName}!`);
    }
}