{
    const welcome = () => {
        console.log("Witaj na mojej pierwszej stronie!");
    }

    const togglePhoto = () => {
        const photo = document.getElementById("photo");
        photo.style.display = photo.style.display === "none" ? "block" : "none";
    }
    
    {
        let button = document.querySelector(".button");
    const changeButtonInnerText = () => {
        togglePhoto();

        button.innerText = button.innerText === "Pokaż zdjęcie" ? "Ukryj zdjęcie" : "Pokaż zdjęcie";
    }

    const init = () => {
        button.addEventListener("click", changeButtonInnerText);

        welcome();

    }

    init();
    }



}