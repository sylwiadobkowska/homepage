console.log("Witaj na mojej pierwszej stronie!");

let button = document.querySelector(".button");
let image = document.querySelector(".image");

button.addEventListener("click", () => {
    if (button.innerText === "Ukryj zdjęcie") {
        button.innerText = "Pokaż zdjęcie";
    } else button.innerText = "Ukryj zdjęcie";

    const x = document.getElementById("photo");
    x.style.display = x.style.display === "none" ? "block" : "none";
})