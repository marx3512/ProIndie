let image = ""
let name = ""
let desc = ""

function edit(){
    name = document.querySelector("#name")
    image = document.querySelector("#image")
    desc = document.querySelector("#desc")
    const div = document.querySelector("#editable")
    
    div.innerHTML = ""
    const input = document.createElement("input")
    input.value = name.innerHTML

    const area = document.createElement("textarea")
    area.value = desc.innerHTML
    const b = document.createElement("button")
    b.innerHTML = "save"
    b.setAttribute("onclick", "save()")
    b.setAttribute("class", "btn btn-primary btn-sm mb-3")
    div.appendChild(b)
    div.appendChild(input)
    div.appendChild(area)
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