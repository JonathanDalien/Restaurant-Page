function createAbout() {
    const about = document.createElement("div");
    about.classList.add("aboutus")

    about.innerHTML = `<div class="aboutus">
    <div class="aboutUs-container">
        <div class="about location">
            <p><i class="icon fa-solid fa-location-dot"></i>Rohrbacher Str. 3<br>69115 Heidelberg</p>
        </div>
        <div class="about opening">
            <p><i class="icon fa-solid fa-clock"></i>Mo. - Sa. 11 Uhr - 23 Uhr<br>So. Geschlossen</p>
        </div>
        <div class="about phone">
            <p><i class="icon fa-solid fa-phone"></i>06221 183591</p>
        </div>
    </div>
    <div class="frame">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10384.08870610872!2d8.692802!3d49.4084863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1d53f2bb18faee6!2sRistorante%20Da%20Mario!5e0!3m2!1sde!2sde!4v1659442888470!5m2!1sde!2sde"
            width="600" height="440" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`

    return about
}

function loadAbout() {
    const container = document.querySelector(".container")
    container.textContent = "";
    container.appendChild(createAbout());
}

export default loadAbout;