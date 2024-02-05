{
    const welcome = () => {
        console.log("Witaj na mojej pierwszej stronie!");
    }

    const togglePhoto = () => {
        const photo = document.getElementById("photo");
        photo.style.display = photo.style.display === "none" ? "block" : "none";
    }

    const changeButtonInnerText = (button) => {
        togglePhoto();

        button.innerText = button.innerText === "Pokaż zdjęcie" ? "Ukryj zdjęcie" : "Pokaż zdjęcie";
    }

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", () => {
            changeButtonInnerText(button);
        });

        welcome();

    }

    init();




}