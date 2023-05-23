const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let image = ""
let name = ""
let desc = ""

let linkFoto = ""
let linkGithub = ""
let linkTwitter = ""

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
    const div = document.querySelector("#editable")
    
    div.innerHTML = ""

    const imgInput = document.createElement("input");
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
    const input = document.createElement("input")
    input.setAttribute("class", "form-control form-control-lg");
    input.value = name.innerHTML

    const hInputDescricao = document.createElement("h5");
    hInputDescricao.setAttribute("class", "form-label mt-3");
    hInputDescricao.innerHTML = "Descrição";

    const area = document.createElement("textarea")
    area.setAttribute("class", "form-control form-control-lg");
    area.value = desc.innerHTML

    const b = document.createElement("button")
    b.innerHTML = "save"
    b.setAttribute("onclick", "save()")
    b.setAttribute("class", "btn btn-primary btn-sm mt-3")

    const hLinkRedesSociais = document.createElement("h5");
    hLinkRedesSociais.setAttribute("class", "form-label mt-3");
    hLinkRedesSociais.innerHTML = "Redes sociais";


    const divInputGrupoGithub = document.createElement("div");
    divInputGrupoGithub.setAttribute("class", "input-group mb-3");
    const divGithub = document.createElement("div");
    divGithub.setAttribute("class", "input-group-prepend");
    const spanInputGithub = document.createElement("span");
    spanInputGithub.setAttribute("class", "input-group-text");
    const iIconeGithub = document.createElement("i");
    iIconeGithub.setAttribute("class", "bi bi-github");
    const inputLinkGithub = document.createElement("input");
    inputLinkGithub.setAttribute("class", "form-control");
    inputLinkGithub.type = "text";
    inputLinkGithub.id = "linkGithub";
    inputLinkGithub.placeholder = linkGithub;

    divInputGrupoGithub.appendChild(divGithub);
    divGithub.appendChild(spanInputGithub);
    divInputGrupoGithub.appendChild(inputLinkGithub);
    spanInputGithub.appendChild(iIconeGithub);

    const divInputGrupoTwitter = document.createElement("div");
    divInputGrupoTwitter.setAttribute("class", "input-group mb-3");
    const divTwitter = document.createElement("div");
    divTwitter.setAttribute("class", "input-group-prepend");
    const spanInputTwitter = document.createElement("span");
    spanInputTwitter.setAttribute("class", "input-group-text");
    const iIconeTwitter = document.createElement("i");
    iIconeTwitter.setAttribute("class", "bi bi-twitter");
    const inputLinkTwitter = document.createElement("input");
    inputLinkTwitter.setAttribute("class", "form-control");
    inputLinkTwitter.type = "text";
    inputLinkTwitter.id = "linkTwitter";
    inputLinkTwitter.placeholder = linkTwitter;

    divInputGrupoTwitter.appendChild(divTwitter);
    divTwitter.appendChild(spanInputTwitter);
    divInputGrupoTwitter.appendChild(inputLinkTwitter);
    spanInputTwitter.appendChild(iIconeTwitter);

    const divInputGrupoInstagram = document.createElement("div");
    divInputGrupoInstagram.setAttribute("class", "input-group mb-3");
    const divInstagram = document.createElement("div");
    divInstagram.setAttribute("class", "input-group-prepend");
    const spanInputInstagram = document.createElement("span");
    spanInputInstagram.setAttribute("class", "input-group-text");
    const iIconeInstagram = document.createElement("i");
    iIconeInstagram.setAttribute("class", "bi bi-instagram");
    const inputLinkInstagram = document.createElement("input");
    inputLinkInstagram.setAttribute("class", "form-control");
    inputLinkInstagram.type = "text";
    inputLinkInstagram.id = "linkTwitter";
    inputLinkInstagram.placeholder = linkTwitter;

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
    name = document.querySelector("#name")
    image = document.querySelector("#image")
    desc = document.querySelector("#desc")

    name.innerHTML = data.Nome;
    linkFoto = data.Foto;
    image.setAttribute("src", data.Foto);
    if(data.Descricao != null){
        desc = data.Descricao;
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

    if(data.linkGithub != null){
        linkGithub = data.linkGithub;
        const aIconeGithub = document.createElement("a");
        aIconeGithub.setAttribute("href", data.linkGithub);
        aIconeGithub.setAttribute("class", "btn btn-primary");
        aIconeGithub.setAttribute("style", "background-color: #333333");
        aIconeGithub.setAttribute("role", "button");
        const iIconeGithub = document.createElement("i");
        iIconeGithub.setAttribute("class", "bi bi-github");
        aIconeGithub.appendChild(iIconeGithub);
        divRedesSociais.appendChild(aIconeGithub);

    }

    if(data.linkTwitter != null){
        linkTwitter = data.linkTwitterç
        const aIconeTwitter = document.createElement("a");
        aIconeTwitter.setAttribute("href", data.linkTwitter);
        aIconeTwitter.setAttribute("class", "btn btn-primary");
        aIconeTwitter.setAttribute("style", "background-color: #55acee");
        aIconeTwitter.setAttribute("role", "button");
        const iIconeTwitter = document.createElement("i");
        iIconeTwitter.setAttribute("class", "bi bi-twitter");
        aIconeTwitter.appendChild(iIconeTwitter);
        divRedesSociais.appendChild(aIconeTwitter);

    }

    if(data.linkInstagram != null){
        const aIconeInstagram = document.createElement("a");
        aIconeInstagram.setAttribute("href", data.linkInstagram);
        aIconeInstagram.setAttribute("class", "btn btn-primary");
        aIconeInstagram.setAttribute("style", "background-color: #ac2bac");
        aIconeInstagram.setAttribute("role", "button");
        const iIconeInstagram = document.createElement("i");
        iIconeInstagram.setAttribute("class", "bi bi-instagram");
        aIconeInstagram.appendChild(iIconeInstagram);
        divRedesSociais.appendChild(aIconeInstagram);

    }

    const aImg = document.getElementById("aImg");
    const imgPerfil = document.createElement("img");
    imgPerfil.src = data.Foto;
    imgPerfil.setAttribute("class", "rounded-circle");
    imgPerfil.width = 100;
    imgPerfil.height = 100;
    aImg.appendChild(imgPerfil);

    const aNovoProjeto = document.getElementById("aNovoProjeto");
    aNovoProjeto.href = `./newProject.html?id=${id}`
    const aPerfil = document.getElementById("aPerfil");
    aPerfil.href = `./perfil.html?id=${id}`;

})

fetch(`http://localhost:3000/projeto/${id}`)
.then(response => response.json())
.then(data => {
    const divTabelaProjeto = document.getElementById("tabelaProjetos");
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
        aPaginaProjeto.href = `./projectView.html?id=${elemento.Id}`;
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