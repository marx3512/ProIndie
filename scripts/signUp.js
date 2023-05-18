import('../scripts/bancoDeDados.js').then(module => {
    const minhaVariavel = module.data;

}).catch(error => {
    console.error('Error:', error);
});

var botao = document.getElementById("confirmarBtn");

botao.addEventListener("click", (e) => {
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

    import('../scripts/bancoDeDados.js').then(module => {
        module.data.dadoNovo = "Dado Novo";
        const minhaVariavel = module.data;
        console.log(minhaVariavel);
    }).catch(error => {
        console.error('Error:', error);
    });

    /*console.log("Email: " + email.value);
    console.log("ConfirmEmail: " + confirmEmail.value);
    console.log("Password: " + password.value);
    console.log("confirmPassword: " + confirmPassword.value);
    console.log("OccupationArea: " + occupationArea.value);*/
    

    
});

/*function cadastrarUsuario(){
    var form = document.getElementById("formulario");

    form.addEventListener('submit', (e) => {
        var email = document.getElementById("typeEmailX");
        console.log(form);
        alert(email.value);

        e.preventDefault();
    })
}*/