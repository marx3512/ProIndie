const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const idUsuarioLogado = urlParams.get("idUsuario");

let image = ""
let name = ""
let desc = ""

let linkFoto = ""
let linkGithub = ""
let linkTwitter = ""
let linkInstagram = ""

let b = document.createElement("button");
const div = document.querySelector("#editable")
const imgInput = document.createElement("input");
const input = document.createElement("input");
const area = document.createElement("textarea");
const inputLinkGithub = document.createElement("input");
const inputLinkTwitter = document.createElement("input");
const inputLinkInstagram = document.createElement("input");
const divTabelaProjeto = document.getElementById("tabelaProjetos");
const botaoEdit = document.getElementById("botaoEdit");

if(id != idUsuarioLogado){
    botaoEdit.setAttribute("hidden", "")   
}

let descricaoUsuario = "";

const spinnerPerfil = document.getElementById("spinnerPerfil");

const spinner = document.createElement("span");
spinner.setAttribute("class", "spinner-border");
spinner.setAttribute("role", "status");
spinner.setAttribute("aria-hidden", "true");

spinnerPerfil.appendChild(spinner);

const spinnerPerfilInformation = document.createElement("span");
spinnerPerfilInformation.setAttribute("class", "spinner-border");
spinnerPerfilInformation.setAttribute("role", "status");
spinnerPerfilInformation.setAttribute("aria-hidden", "true");

const spinnerProjetos = document.createElement("span");
spinnerProjetos.setAttribute("class", "spinner-border");
spinnerProjetos.setAttribute("role", "status");
spinnerProjetos.setAttribute("aria-hidden", "true");

div.appendChild(spinnerPerfilInformation);
divTabelaProjeto.appendChild(spinnerProjetos);

let formData = new FormData();


function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const image = document.getElementById("image");
      image.src = event.target.result;
    };
    
    reader.readAsDataURL(file);
}

function edit(){
    name = document.querySelector("#name")
    image = document.querySelector("#image")
    desc = document.querySelector("#desc")
    //const div = document.querySelector("#editable")
    
    div.innerHTML = ""

    //INPUT DA IMAGEM
    imgInput.setAttribute("class", "form-control");
    imgInput.setAttribute("onchange", "loadImage(event)");
    imgInput.type = "file";

    const imgShow = document.createElement("img");
    imgShow.src = linkFoto;
    imgShow.setAttribute("class", "rounded-circle mt-4");
    imgShow.width = 150;
    imgShow.height = 150;
    imgShow.id = "image";

    const labelInputNome = document.createElement("h5");
    labelInputNome.setAttribute("class", "form-label")
    labelInputNome.innerHTML = "Nome"
    //INPUT DO NOME
    input.setAttribute("class", "form-control form-control-lg");
    input.value = name.innerHTML

    const hInputDescricao = document.createElement("h5");
    hInputDescricao.setAttribute("class", "form-label mt-3");
    hInputDescricao.innerHTML = "Descrição";
    //INPUT DA DESCRICAO
    area.setAttribute("class", "form-control form-control-lg");
    area.value = descricaoUsuario;

    b.innerHTML = "save"
    //b.setAttribute("onclick", "save()")
    b.setAttribute("class", "btn btn-primary btn-sm mt-2 mb-3")

    const hLinkRedesSociais = document.createElement("h5");
    hLinkRedesSociais.setAttribute("class", "form-label mt-3");
    hLinkRedesSociais.innerHTML = "Redes sociais";

    //LINK DO GITHUB
    const divInputGrupoGithub = document.createElement("div");
    divInputGrupoGithub.setAttribute("class", "input-group mb-3");
    const divGithub = document.createElement("div");
    divGithub.setAttribute("class", "input-group-prepend");
    const spanInputGithub = document.createElement("span");
    spanInputGithub.setAttribute("class", "input-group-text");
    const iIconeGithub = document.createElement("i");
    iIconeGithub.setAttribute("class", "bi bi-github");
    inputLinkGithub.setAttribute("class", "form-control");
    inputLinkGithub.type = "text";
    inputLinkGithub.id = "linkGithub";
    inputLinkGithub.value = linkGithub;

    divInputGrupoGithub.appendChild(divGithub);
    divGithub.appendChild(spanInputGithub);
    divInputGrupoGithub.appendChild(inputLinkGithub);
    spanInputGithub.appendChild(iIconeGithub);
    //LINK DO TWITTER
    const divInputGrupoTwitter = document.createElement("div");
    divInputGrupoTwitter.setAttribute("class", "input-group mb-3");
    const divTwitter = document.createElement("div");
    divTwitter.setAttribute("class", "input-group-prepend");
    const spanInputTwitter = document.createElement("span");
    spanInputTwitter.setAttribute("class", "input-group-text");
    const iIconeTwitter = document.createElement("i");
    iIconeTwitter.setAttribute("class", "bi bi-twitter");
    inputLinkTwitter.setAttribute("class", "form-control");
    inputLinkTwitter.type = "text";
    inputLinkTwitter.id = "linkTwitter";
    inputLinkTwitter.value = linkTwitter;

    divInputGrupoTwitter.appendChild(divTwitter);
    divTwitter.appendChild(spanInputTwitter);
    divInputGrupoTwitter.appendChild(inputLinkTwitter);
    spanInputTwitter.appendChild(iIconeTwitter);
    //LINK DO INSTAGRAM
    const divInputGrupoInstagram = document.createElement("div");
    divInputGrupoInstagram.setAttribute("class", "input-group mb-3");
    const divInstagram = document.createElement("div");
    divInstagram.setAttribute("class", "input-group-prepend");
    const spanInputInstagram = document.createElement("span");
    spanInputInstagram.setAttribute("class", "input-group-text");
    const iIconeInstagram = document.createElement("i");
    iIconeInstagram.setAttribute("class", "bi bi-instagram");
    inputLinkInstagram.setAttribute("class", "form-control");
    inputLinkInstagram.type = "text";
    inputLinkInstagram.id = "linkTwitter";
    inputLinkInstagram.value = linkInstagram;

    divInputGrupoInstagram.appendChild(divInstagram);
    divInstagram.appendChild(spanInputInstagram);
    divInputGrupoInstagram.appendChild(inputLinkInstagram);
    spanInputInstagram.appendChild(iIconeInstagram);

    div.appendChild(imgInput);
    div.appendChild(imgShow);
    div.appendChild(labelInputNome);
    div.appendChild(input);
    div.appendChild(hInputDescricao);
    div.appendChild(area);
    div.appendChild(hLinkRedesSociais);
    div.appendChild(divInputGrupoGithub);
    div.appendChild(divInputGrupoTwitter);
    div.appendChild(divInputGrupoInstagram);
    
    div.appendChild(b);
    console.log(input.value);

    b.addEventListener("click", (e) => {
        createForm();
        b.setAttribute("disabled", "");
        const spinner = document.createElement("span");
        spinner.setAttribute("class", "spinner-border spinner-border-sm");
        spinner.setAttribute("role", "status");
        spinner.setAttribute("aria-hidden", "true");
        b.innerHTML = "Carregando "
        b.appendChild(spinner);
    })
}

function createForm(){
    formData.append("image", imgInput.files[0]);
    formData.append("nome", input.value);
    formData.append("descricao", area.value);
    formData.append("linkGithub", inputLinkGithub.value);
    formData.append("linkTwitter", inputLinkTwitter.value);
    formData.append("linkInstagram", inputLinkInstagram.value);

    fetch(`http://localhost:3000/usuario/${id}`, {
            method: "PUT",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Dados atualizados");
            window.location.reload(true);
        })
        .catch(error => {
            console.log("Ocorreu um erro:", error);
        })

}

function save(){
    const div = document.querySelector("#editable")
    name.innerHTML = div.querySelector("input").value
    
    desc.innerHTML = div.querySelector("textarea").value
    div.innerHTML = ""
    div.appendChild(image)
    div.appendChild(name)
    div.appendChild(desc)
}

fetch(`http://localhost:3000/usuario/pegarUmUsuario/${id}`, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    spinnerPerfilInformation.setAttribute("hidden", "");
    name = document.querySelector("#name")
    image = document.querySelector("#image")
    desc = document.querySelector("#desc")

    name.innerHTML = data.Nome;
    linkFoto = data.Foto;
    image.setAttribute("src", data.Foto);
    
    if(data.Descricao != ''){
        desc.innerHTML = data.Descricao;
    }
    else{
        desc.innerHTML = "Descricao vazia";
    }

    const divRedesSociais = document.getElementById("redesSociais");

    const aIconeGmail = document.createElement("a");
    aIconeGmail.setAttribute("href", data.Email);
    aIconeGmail.setAttribute("class", "btn btn-primary");
    aIconeGmail.setAttribute("style", "background-color: #dd4b39");
    aIconeGmail.setAttribute("role", "button");
    const iIconeGmail = document.createElement("i");
    iIconeGmail.setAttribute("class", "bi bi-google");
    aIconeGmail.appendChild(iIconeGmail);
    divRedesSociais.appendChild(aIconeGmail);

    if(data.linkGithub != '' && data.linkGithub != null){
        linkGithub = data.linkGithub;
        const aIconeGithub = document.createElement("a");
        aIconeGithub.setAttribute("href", data.linkGithub);
        aIconeGithub.setAttribute("class", "btn btn-primary");
        aIconeGithub.setAttribute("style", "background-color: #333333");
        aIconeGithub.setAttribute("role", "button");
        aIconeGithub.setAttribute("target", "_blank");
        const iIconeGithub = document.createElement("i");
        iIconeGithub.setAttribute("class", "bi bi-github");
        aIconeGithub.appendChild(iIconeGithub);
        divRedesSociais.appendChild(aIconeGithub);

    }

    if(data.linkTwitter != '' && data.linkTwitter != null){
        linkTwitter = data.linkTwitterç
        const aIconeTwitter = document.createElement("a");
        aIconeTwitter.setAttribute("href", data.linkTwitter);
        aIconeTwitter.setAttribute("class", "btn btn-primary");
        aIconeTwitter.setAttribute("style", "background-color: #55acee");
        aIconeTwitter.setAttribute("role", "button");
        aIconeTwitter.setAttribute("target", "_blank");
        const iIconeTwitter = document.createElement("i");
        iIconeTwitter.setAttribute("class", "bi bi-twitter");
        aIconeTwitter.appendChild(iIconeTwitter);
        divRedesSociais.appendChild(aIconeTwitter);

    }

    if(data.linkInstagram != '' && data.linkInstagram != null){
        const aIconeInstagram = document.createElement("a");
        aIconeInstagram.setAttribute("href", data.linkInstagram);
        aIconeInstagram.setAttribute("class", "btn btn-primary");
        aIconeInstagram.setAttribute("style", "background-color: #ac2bac");
        aIconeInstagram.setAttribute("role", "button");
        aIconeInstagram.setAttribute("target", "_blank");
        const iIconeInstagram = document.createElement("i");
        iIconeInstagram.setAttribute("class", "bi bi-instagram");
        aIconeInstagram.appendChild(iIconeInstagram);
        divRedesSociais.appendChild(aIconeInstagram);

    }

    descricaoUsuario = data.Descricao;
    linkGithub = data.linkGithub;
    linkTwitter = data.linkTwitter;
    linkInstagram = data.linkInstagram;
})

fetch(`http://localhost:3000/usuario/pegarUmUsuario/${idUsuarioLogado}`,{
    method: "GET"
})
.then(response => response.json())
.then(data => {
    spinner.setAttribute("hidden", "");
    const aImg = document.getElementById("aImg");
    const imgPerfil = document.createElement("img");
    imgPerfil.src = data.Foto;
    imgPerfil.setAttribute("class", "rounded-circle");
    imgPerfil.width = 100;
    imgPerfil.height = 100;
    aImg.appendChild(imgPerfil);

    const aNovoProjeto = document.getElementById("aNovoProjeto");
    aNovoProjeto.href = `./newProject.html?id=${idUsuarioLogado}`
    const aPerfil = document.getElementById("aPerfil");
    aPerfil.href = `./perfil.html?id=${idUsuarioLogado}&idUsuario=${idUsuarioLogado}`;
    const aLogo = document.getElementById("aLogo");
    aLogo.href = `./home.html?id=${idUsuarioLogado}`;
})

fetch(`http://localhost:3000/projeto/${id}`)
.then(response => response.json())
.then(data => {
    //const divTabelaProjeto = document.getElementById("tabelaProjetos");
    spinnerProjetos.setAttribute("hidden", "");
    data.map(elemento => {
        const divCol = document.createElement("div");
        divCol.setAttribute("class", "col-sm-6 mb-3")

        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        const imgProjeto = document.createElement("img");
        imgProjeto.setAttribute("class", "card-img-top")
        imgProjeto.src = elemento.Foto;

        const divCardBody = document.createElement("div");
        divCardBody.setAttribute("class", "card-body");

        const hTituloProjeto = document.createElement("h5");
        hTituloProjeto.setAttribute("class", "card-title");
        hTituloProjeto.innerHTML = elemento.Nome;

        const pDescricaoProjeto = document.createElement("p");
        pDescricaoProjeto.setAttribute("class", "card-text");
        pDescricaoProjeto.innerHTML = elemento.Descricao_projeto;

        const aPaginaProjeto = document.createElement("a");
        aPaginaProjeto.setAttribute("class", "btn btn-primary");
        aPaginaProjeto.href = `./projectView.html?id=${elemento.Id}&idUsuario=${elemento.Id_usuario}`;
        aPaginaProjeto.innerHTML = "Pagina do projeto"

        divTabelaProjeto.appendChild(divCol);
        divCol.appendChild(divCard);
        divCard.appendChild(imgProjeto);
        divCard.appendChild(divCardBody);
        divCardBody.appendChild(hTituloProjeto);
        divCardBody.appendChild(pDescricaoProjeto);
        divCardBody.appendChild(aPaginaProjeto);
    })
})