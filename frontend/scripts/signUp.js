var botao = document.getElementById("confirmarBtn");

botao.addEventListener("click", (e) => {
    var file = document.getElementById("formFile");
    var nome = document.getElementById("typeNomeX");
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

    const formData = new FormData();
    formData.append("nome", nome.value);
    formData.append("email", email.value);
    formData.append("senha", password.value);
    formData.append("ocupacoes", occupationArea.value);
    formData.append("image", file.files[0]);

    /*var dadosUsuario = {
        nome: nome.value,
        email: email.value,
        senha: password.value,
        ocupacoes: occupationArea.value,
        image: file.files[0]
    }*/

    fetch("http://localhost:3000/usuario", {
        method: "POST",
        /*headers: {
            "Content-Type": "application/json"
        },*/
        body: formData
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
function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const image = document.getElementById("image");
      image.src = event.target.result;
    };
    
    reader.readAsDataURL(file);
  }