var botao = document.getElementById("confirmarBtn");

botao.addEventListener("click", (e) => {
    var email = document.getElementById("typeEmailX");
    var confirmEmail = document.getElementById("confirmEmail");
    var password = document.getElementById("typePasswordX");
    var confirmPassword = document.getElementById("confirmPassword");
    var occupationArea = document.getElementById("typeOccupation");
    
    if(email.value === "" || confirmEmail.value == "" || password.value === "" || confirmPassword.value === "" || occupationArea.value === ""){
        alert("Existe alguns campos vazios");
        e.preventDefault();
    }

    else if(email.value !== confirmEmail.value){
        alert("Os emails são diferentes");
        e.preventDefault();
    }

    else if(password.value !== confirmPassword.value){
        alert("As senhas são diferentes");
        e.preventDefault();
    }

    var dadosUsuario = {
        nome: "Marx Borges Machado",
        email: email.value,
        senha: password.value,
        ocupacoes: occupationArea.value,
        foto: "Testando Front"
    }

    fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosUsuario)
    })
      .then(response => response.json())
      .then(data => {
        alert("Cadastro realizado com sucesso");
        console.log(data)
      })
      .catch(error => {
        console.log("Ocorreu um erro:", error);
      })

    e.preventDefault();

});
