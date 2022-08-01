import loadMenu from "./menu";

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home")

    const greeting = document.createElement("h1")
    greeting.classList.add("greeting");
    greeting.innerHTML = `<span class="word">Herzlich</span> Willkommen`;

    const greetingSub = document.createElement("h1")
    greetingSub.classList.add("greeting-sub");
    greetingSub.textContent = "Mario's Restaurante";

    const paragraph = document.createElement("p")
    paragraph.classList.add("paragraph");
    paragraph.textContent = "Gutes Essen erleben und genießen!...";

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "Unser Menü"

    btn.addEventListener("click", loadMenu)

    home.appendChild(greeting);
    home.appendChild(greetingSub);
    home.appendChild(paragraph);
    home.appendChild(btn);

    return home
}

function loadHome() {
    const container = document.querySelector(".container");
    container.textContent = "";
    container.appendChild(createHome());
}

export default loadHome;
