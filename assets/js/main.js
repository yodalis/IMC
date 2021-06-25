function calculoIMC(e) {
    let peso = document.getElementById('input-peso').value;
    let altura = document.getElementById('input-altura').value;
    let message = document.getElementById('message');

    e.preventDefault()
    let calculoIMC = (peso/ Math.pow(altura,2)).toFixed(2);
    if(calculoIMC < 18.5){
        message.style = 'display: block;'
        message.style = 'background-color: #50F2B9;'
        message.innerHTML = `Seu IMC é ${calculoIMC} (Abaixo do peso)`
    } 
    else if(calculoIMC >= 18.5 && calculoIMC <= 24.9){
        message.style = 'display: block;'
        message.style = 'background-color: #50D2F2;'
        message.innerHTML = `Seu IMC é ${calculoIMC} (Peso normal)`
    }
    else if(calculoIMC >= 25 && calculoIMC <= 29.9){
        message.style = 'display: block;'
        message.style = 'background-color: #F5DA3F;'
        message.innerHTML = `Seu IMC é ${calculoIMC} (Sobrepeso)`
    }
    else if(calculoIMC >= 30 && calculoIMC <= 34.9){
        message.style = 'display: block;'
        message.style = 'background-color: #EB7D23;'
        message.innerHTML = `Seu IMC é ${calculoIMC} (Obesidade grau 1)`
    }
    else if(calculoIMC >= 35 && calculoIMC <= 39.9){
        message.style = 'display: block;'
        message.style = 'background-color: #EB3212;'
        message.innerHTML = `Seu IMC é ${calculoIMC} (Obesidade grau 2)`
    }
    else if(calculoIMC > 40){
        message.style = 'display: block;'
        message.style = 'background-color: #EB0101;'
        message.innerHTML = `Seu IMC é ${calculoIMC} (Obesidade grau 3)`
    }
    else if(peso === '' || altura === ''){
        message.style = 'display: block;'
        message.style = 'background-color: #B78FF5;'
        message.innerHTML = `Insira algum valor nos campos`
    }
    else {
        message.style = 'display: block;'
        message.style = 'background-color: #B78FF5;'
        message.innerHTML = `Número inválido`
    }
}
