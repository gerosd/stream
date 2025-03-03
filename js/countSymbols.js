const area = document.querySelector(".area");
let description;

if (sessionStorage.getItem('description') != null) {
    description = sessionStorage.getItem('description');
    document.querySelector(".countSymbols").innerText = `${description.length}/180`;
}

area.addEventListener("input", () => {
    document.querySelector(".countSymbols").innerText = `${area.value.length}/180`;
})