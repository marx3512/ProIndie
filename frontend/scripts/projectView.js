const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const idUsuarioLogado = urlParams.get("idUsuario");

const divNomeProjeto = document.getElementById("nomeProjeto");
const divDescricaoProjeto = document.getElementById("descricaoProjeto");
const divDescricaoVaga = document.getElementById("descricaoVaga");

const spinnerPerfil = document.getElementById("spinnerPerfil");
const spinnerPerfilColaborador = document.getElementById("spinnerPerfilColaborador");

const spinner = document.createElement("span");
spinner.setAttribute("class", "spinner-border");
spinner.setAttribute("role", "status");
spinner.setAttribute("aria-hidden", "true");
spinnerPerfil.appendChild(spinner);

const spanSpinnerPerfil = document.createElement("span");
spanSpinnerPerfil.setAttribute("class", "spinner-border");
spanSpinnerPerfil.setAttribute("role", "status");
spanSpinnerPerfil.setAttribute("aria-hidden", "true");
spinnerPerfilColaborador.appendChild(spanSpinnerPerfil);

const spanSpinnerProjeto = document.createElement("span");
spanSpinnerProjeto.setAttribute("class", "spinner-border");
spanSpinnerProjeto.setAttribute("role", "status");
spanSpinnerProjeto.setAttribute("aria-hidden", "true");
divNomeProjeto.appendChild(spanSpinnerProjeto);

const spanSpinnerDescricaoProjeto = document.createElement("span");
spanSpinnerDescricaoProjeto.setAttribute("class", "spinner-border");
spanSpinnerDescricaoProjeto.setAttribute("role", "status");
spanSpinnerDescricaoProjeto.setAttribute("aria-hidden", "true");
divDescricaoProjeto.appendChild(spanSpinnerDescricaoProjeto);

const spanSpinnerDescricaoVaga = document.createElement("span");
spanSpinnerDescricaoVaga.setAttribute("class", "spinner-border");
spanSpinnerDescricaoVaga.setAttribute("role", "status");
spanSpinnerDescricaoVaga.setAttribute("aria-hidden", "true");
divDescricaoVaga.appendChild(spanSpinnerDescricaoVaga);

fetch(`http://localhost:3000/projeto/pegarUmProjeto/${id}`, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    spanSpinnerPerfil.setAttribute("hidden", "");
    spanSpinnerProjeto.setAttribute("hidden", "");
    spanSpinnerDescricaoProjeto.setAttribute("hidden", "");
    spanSpinnerDescricaoVaga.setAttribute("hidden", "");
    //const divNomeProjeto = document.getElementById("nomeProjeto");
    const hNomeProjeto = document.createElement("h4");
    hNomeProjeto.innerHTML = data[0].Nome;

    const divImgProjeto = document.getElementById("imgProjeto");
    const imgProjeto = document.createElement("img");
    imgProjeto.src = data[0].Foto;
    imgProjeto.setAttribute("class", "rounded-circle");
    imgProjeto.width = 250;

    divNomeProjeto.appendChild(hNomeProjeto);
    divImgProjeto.appendChild(imgProjeto);

    const pDescricaoProjeto = document.createElement("p");
    pDescricaoProjeto.setAttribute("class", "card-text");
    pDescricaoProjeto.innerHTML = data[0].Descricao_projeto;

    divDescricaoProjeto.appendChild(pDescricaoProjeto);

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
    aPerfilColaborador.href = `./perfil.html?id=${data[0].Id_usuario}&idUsuario=${idUsuarioLogado}`;
    aPerfilColaborador.innerHTML = data[0].Usuario.Nome;
    aPerfilColaborador.setAttribute("class", "text-decoration-none m-2 marx");

    hPerfilColaborador.appendChild(imgPerfilColaborador);
    hPerfilColaborador.appendChild(aPerfilColaborador);
})

fetch(`http://localhost:3000/usuario/pegarUmUsuario/${idUsuarioLogado}`, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    spinner.setAttribute("hidden", "");
    const aImage = document.getElementById("aImage");
    const img = document.createElement("img");
    img.setAttribute("class", "rounded-circle");
    img.setAttribute("width", "100");
    img.setAttribute("height", "100");
    img.setAttribute("src", data.Foto);
    aImage.appendChild(img);

    const aNovoProjeto = document.getElementById("novoProjeto");
    aNovoProjeto.href = `./newProject.html?id=${idUsuarioLogado}`;

    const aPerfil = document.getElementById("perfil");
    aPerfil.href = `./perfil.html?id=${idUsuarioLogado}&idUsuario=${idUsuarioLogado}`;

    const aLogo = document.getElementById("logo");
    aLogo.href = `./home.html?id=${idUsuarioLogado}`;
})