const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

var botao = document.getElementById("confirmarBtn");

fetch(`http://localhost:3000/usuario/pegarUmUsuario/${id}`, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        var aImg = document.getElementById("aImg");
        var imgPerfil = document.createElement("img");
        imgPerfil.setAttribute("class", "rounded-circle");
        imgPerfil.width = "100";
        imgPerfil.height = "100";
        imgPerfil.src = data.Foto;
        aImg.appendChild(imgPerfil);

        var aNovoProjeto = document.getElementById("aNovoProjeto");
        aNovoProjeto.href = `./newProject.html?id=${id}`
        var aPerfil = document.getElementById("aPerfil");
        aPerfil.href = `./perfil.html?id=${id}`;
        var aLogo = document.getElementById("aLogo");
        aLogo.href = `./home.html?id=${id};`
    })


botao.addEventListener("click", (e) => {
    var nomeProjeto = document.getElementById("nomeProjeto");
    var descricaoProjeto = document.getElementById("exampleFormControlTextarea1");
    var descricaoVaga = document.getElementById("descricaoVaga");
    var file = document.getElementById("formFile");

    if(nomeProjeto.value == "" || descricaoProjeto.value == ""){
        alert("Existe alguns campos vazios");
        e.preventDefault();
    }

    const formData = new FormData();
    formData.append("image", file.files[0]);
    formData.append("nome", nomeProjeto.value);
    formData.append("descricaoProjeto", descricaoProjeto.value);
    formData.append("descricaoVaga", descricaoVaga.value);

    fetch(`http://localhost:3000/projeto/${id}`, {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert("Cadastro do projeto realizado com sucesso");
            console.log(data)
        })
        .catch(error => {
            console.log("Ocorreu um erro:", error);
        })
    
    e.preventDefault();
})