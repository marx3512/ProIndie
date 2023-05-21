var botao = document.getElementById("confirmarBtn");

export var idLogin = 0

botao.addEventListener("click", (e) => {
    var email = document.getElementById("typeEmailX");
    var password = document.getElementById("typePasswordX");

    var dadosLogin = {
        email: email.value,
        senha: password.value
    }

    if(email.value == "" || password.value == ""){
        alert("Existe alguns campos vazios");
        e.preventDefault();
    }

    fetch("http://localhost:3000/usuario/logar", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(dadosLogin)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.Id)
            idLogin = data.Id;
            window.location = `http://127.0.0.1:5500/pages/home.html?id=${data.Id}`;
        })
        .catch(error => {
            console.log("Ocorreu um error:", error);
        })
})