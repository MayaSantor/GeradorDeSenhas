function getChartTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;
   
    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }
    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz')
    }
    if (number) {
        charTypes.push('0123456789')
    }
    if (specialCharacter) {
        charTypes.push('!@#$%^&*()_-+={}[]|\\/?><:;"\'.,~`')
    }

    return charTypes;
}

function getPasswordSize() {
    const slider = document.querySelector('#slider');
    let size = slider.value;
    document.querySelector('#valor').textContent = size;
    return size;
    //puxa o valor escolhido no slider e atualiza o valor que vai pro span onde o usuário de fato vê o número    
}

function randomCharType(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}


document.querySelector('#button').addEventListener('click', function () {
    const size = getPasswordSize();
    const charTypes = getChartTypes();

    if (charTypes.length === 0) {
        alert("Selecione pelo menos um tipo de caractere.");
        return; 
    }

    generatePassword(size, charTypes);
})




let sliderElement = document.querySelector("#slider")
let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")
let containterPassword = document.querySelector("#container-password")
let novaSenha = "";

sizePassword.innerHTML=sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(size, charTypes) {
    let pass = "";

    for (let i = 0; i < size; i++) {
        pass += randomCharType(charTypes);
    }
    containterPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

    return pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}
