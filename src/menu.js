function createMenu() {
    const menu = document.createElement("div")
    menu.classList.add("menu")

    menu.innerHTML = `
    <div class="menu-container"><div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza1.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Margaritha: <span>$2.49</span></h4>
        <p>Mozarella-Käse, Tomaten, Öl, Basilikum.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza2.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Capricciosa: <span>$5.99</span></h4>
        <p>Mozarella-Käse, Tomaten, Öl, Basilikum & würzige Salami.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza3.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Diavola: <span>$6.49</span></h4>
        <p>Mozarella-Käse, Tomaten, Oliven & Champignons.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza4.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Prosciutto e funghi: <span>$7.99</span></h4>
        <p>Mozarella-Käse, Tomaten, Oliven, Salami.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza5.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Hawaii: <span>$6.99</span></h4>
        <p>Mozarella-Käse, Tomaten, Ananass, Schinken.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza6.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Pepperoni: <span>$6.99</span></h4>
        <p>Mozarella-Käse, Tomaten, Salami & Oliven.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza7.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Ortolana: <span>$9.99</span></h4>
        <p>Mozarella-Käse, Tomaten, Salami & verschiedenes Gemüse.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza8.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Boscaiola: <span>$9.99</span></h4>
        <p>Mozarella-Käse, Tomaten, Oliven, Salami.</p>
    </div>
</div>
<div class='menu-item'>
    <img class='test' src='./img/pizzas/pizza9.png') alt=''>
    <div class='item-content'>
        <h4>Pizza Frutti di Mare: <span>$8.99</span></h4>
        <p>Mozarella-Käse, Tomaten, Oliven, Salami.</p>
    </div>
</div>
</div>`

    return menu;


}

function loadMenu() {
    const container = document.querySelector(".container");
    container.textContent = "";
    container.appendChild(createMenu());
}

export default loadMenu;