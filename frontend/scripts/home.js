const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`http://localhost:3000/usuario/pegarUmUsuario/${id}`, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        const aImage = document.getElementById("aImage");
        const img = document.createElement("img");

        img.setAttribute("class", "rounded-circle");
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");
        img.setAttribute("src", data.Foto);
        aImage.appendChild(img);
    })

fetch(`http://localhost:3000/projeto/`, {
    method: "GET"
})
    .then(response => response.json())
    .then(data => {
        const divTabelaCartas = document.getElementById("tabelaCartaProjeto");
        data.map(elemento => {
            const divCol = document.createElement("div");
            divCol.setAttribute("class", "col");

            const divCarta = document.createElement("div");
            divCarta.setAttribute("class", "card");

            const imgProjeto = document.createElement("img");
            imgProjeto.setAttribute("src", elemento.Foto);
            imgProjeto.setAttribute("class", "card-img-top");

            const divCardBody = document.createElement("div");
            divCardBody.setAttribute("class", "card-body");

            const hTituloProjeto = document.createElement("h5");
            hTituloProjeto.setAttribute("class", "card-title");
            hTituloProjeto.innerHTML = elemento.Nome;

            const pDescricaoProjeto = document.createElement("p");
            pDescricaoProjeto.setAttribute("class", "card-text");
            pDescricaoProjeto.innerHTML = elemento.Descricao_projeto

            const aPaginaProjeto = document.createElement("a");
            aPaginaProjeto.setAttribute("class", "btn btn-primary");
            aPaginaProjeto.setAttribute("href", `./projectView.html?id=${elemento.Id}`)
            aPaginaProjeto.innerHTML = "Pagina projeto";

            divTabelaCartas.appendChild(divCol);
            divCol.appendChild(divCarta);
            divCarta.appendChild(imgProjeto);
            divCarta.appendChild(divCardBody);
            divCardBody.appendChild(hTituloProjeto);
            divCardBody.appendChild(pDescricaoProjeto);
            divCardBody.appendChild(aPaginaProjeto);
        })
    })