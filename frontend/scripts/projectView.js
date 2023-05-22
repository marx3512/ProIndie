const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch(`http://localhost:3000/projeto/pegarUmProjeto/${id}`, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    const divNomeProjeto = document.getElementById("nomeProjeto");
    const hNomeProjeto = document.createElement("h4");
    hNomeProjeto.innerHTML = data[0].Nome;

    const divImgProjeto = document.getElementById("imgProjeto");
    const imgProjeto = document.createElement("img");
    imgProjeto.src = data[0].Foto;
    imgProjeto.setAttribute("class", "rounded-circle");
    imgProjeto.width = 250;

    divNomeProjeto.appendChild(hNomeProjeto);
    divImgProjeto.appendChild(imgProjeto);

    const divDescricaoProjeto = document.getElementById("descricaoProjeto");
    const pDescricaoProjeto = document.createElement("p");
    pDescricaoProjeto.setAttribute("class", "card-text");
    pDescricaoProjeto.innerHTML = data[0].Descricao_projeto;

    divDescricaoProjeto.appendChild(pDescricaoProjeto);

    const divDescricaoVaga = document.getElementById("descricaoVaga");
    const pDescricaoVaga = document.createElement("p");
    pDescricaoVaga.setAttribute("class", "card-text");
    console.log(data[0].Descricao_vaga);
    pDescricaoVaga.innerHTML = data[0].Descricao_vaga;

    divDescricaoVaga.appendChild(pDescricaoVaga);

    const hPerfilColaborador = document.getElementById("perfilColaborador")
    const imgPerfilColaborador = document.createElement("img");
    imgPerfilColaborador.src = data[0].Usuario.Foto;
    imgPerfilColaborador.setAttribute("class", "rounded-circle");
    imgPerfilColaborador.width = 50;
    const aPerfilColaborador = document.createElement("a");
    aPerfilColaborador.href = `./perfil.html?id=${data[0].Id_usuario}`;
    aPerfilColaborador.innerHTML = data[0].Usuario.Nome;
    aPerfilColaborador.setAttribute("class", "text-decoration-none m-2 marx");

    hPerfilColaborador.appendChild(imgPerfilColaborador);
    hPerfilColaborador.appendChild(aPerfilColaborador);

    const aImage = document.getElementById("aImage");
    const img = document.createElement("img");
    img.setAttribute("class", "rounded-circle");
    img.setAttribute("width", "100");
    img.setAttribute("height", "100");
    img.setAttribute("src", data[0].Usuario.Foto);
    aImage.appendChild(img);

    const aNovoProjeto = document.getElementById("novoProjeto");
    aNovoProjeto.href = `./newProject.html?id=${data[0].Id_usuario}`;

    const aPerfil = document.getElementById("perfil");
    aPerfil.href = `./perfil.html?id=${data[0].Id_usuario}`;

    const aLogo = document.getElementById("logo");
    aLogo.href = `./home.html?id=${data[0].Id_usuario}`;
})