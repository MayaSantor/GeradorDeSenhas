function getChartTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;
    console.log('Uppercase:', uppercase);
}


document.querySelector('#include_uppercase').addEventListener('click', function () {
    getChartTypes();
    
})


let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containterPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha = "";

sizePassword.innerHTML=sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i <sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containterPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}
