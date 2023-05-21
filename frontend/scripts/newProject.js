const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

var botao = document.getElementById("confirmarBtn");

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