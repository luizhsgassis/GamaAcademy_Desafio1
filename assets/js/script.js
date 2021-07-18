const form = document.getElementById("form");

form.addEventListener("submit", (e) => {

    let name = document.getElementById("inpName").value;
    let email = document.getElementById("inpEmail").value;

    let data = {
        name,
        email,
    };
    let convertData = JSON.stringify(data);

    alert("Obrigado por cadastrar seu e-mail :)\nFique ligado nas promoções exclusivas do site!");
    localStorage.setItem("lead", convertData);
    location.reload();
});