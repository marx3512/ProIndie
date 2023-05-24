const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`http://localhost:3000/usuario/pegarUmUsuario/${id}`, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    const inputNome = document.getElementById("typeNomeX");
    inputNome.placeholder = data.Nome;

    const inputDescricao = document.getElementById("exampleFormControlTextarea1");
    inputDescricao.placeholder = data.Descricao;


    console.log(data);
})