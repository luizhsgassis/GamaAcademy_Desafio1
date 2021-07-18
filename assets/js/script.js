// scroll Home
function scrollHome () {
    window.scrollTo(0, 0);
};

// scroll Popular Products
function scrollPopular () {
    window.scrollTo(0, 725);
};

// scroll Black Friday
function scrollBlack () {
    window.scrollTo(0, 1450);
};

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("inpName").value;
    let email = document.getElementById("inpEmail").value;

    let data = {
        name,
        email,
    };
    let convertData = JSON.stringify(data);

    alert("Obrigado por cadastrar seu e-mail :)\nFique ligado nas promoções exclusivas do site!");
    localStorage.setItem("lead", convertData);
    location.href= "/assets/pages/ecommerce.html"
});