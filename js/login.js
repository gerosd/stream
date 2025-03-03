let users = {
    admin: {
        name: "admin",
        password: "admin",
    },
};

let username = "user";
let q = 0;

document.getElementById('password_registr').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        saveData();
    }
});

document.getElementById('password_login').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkData();
    }
});

function saveData() {
    let newUser = {
        name: "",
        password: "",
    };
    q++;
    let a = username + String(q);
    let newObj = Object.create(newUser);

    newUser.name = document.getElementById("login_registr").value;
    newUser.password = document.getElementById("password_registr").value;

    for (let key in users) {
        const user = users[key];

        if (newObj.name === user.name) {
            alert("Пользователь с таким логином существует")
            deleteValues();
            return;
        }
    }

    deleteValues();

    users[a] = newObj;
}

function checkData() {
    let checkName = document.getElementById('login_login').value;
    let checkPassword = document.getElementById('password_login').value;

    for (let key in users) {
        const user = users[key];
        if (checkName === user.name && checkPassword === user.password) {
            alert("Успешно!");
            deleteLoginValues()
            window.sessionStorage.setItem("name", checkName);
            return;
        }
    }
    alert("Неверный логин и(ли) пароль");
    deleteLoginValues()
}

function deleteLoginValues() {
    document.getElementById('login_login').value = '';
    document.getElementById('password_login').value = '';
}

function deleteValues() {
    document.getElementById("login_registr").value = "";
    document.getElementById("password_registr").value = "";
}