function start(){
    var botaoCalcular = document.querySelector('#botao-calcular')
    botaoCalcular.addEventListener('click', LidarBotaoClick)

    /*  -Fazendo a calculadora ficar mais dinamica
    var inputPeso = document.querySelector('#input-peso')
    var inputAltura = document.querySelector('#input-altura')

    inputPeso.addEventListener('input', LidarBotaoClick)
    inputAltura.addEventListener('input', LidarBotaoClick)

    LidarBotaoClick()
*/
}

function calcularIMC(peso,altura){
    return peso/(altura*altura)
}

function faixas(imc){
    if(imc > 40){
        return ('Obesidade grau III')
    }else if(imc <= 40 && imc >= 35){
        return ('Obesidade grau II')
    }else if(imc <= 34.9 && imc >= 30){
        return ('Obesidade grau I')
    }else if(imc <= 29.9 && imc >= 25){
        return ('Acima do peso')
    }else if(imc <= 24.9 && imc >= 18.5){
        return ('Peso Normal')
    }else if(imc <= 18.4 && imc >= 17){
        return ('Abaixo do peso')
    }else if(imc <= 16.9 && imc >= 16){
        return ('Muito abaixo do peso')
    }else{
        return ('Inválido')
    }
}

function LidarBotaoClick(){
    var inputPeso = document.querySelector('#input-peso')
    var inputAltura = document.querySelector('#input-altura')
    var resultadoIMC = document.querySelector('#resultado-imc')
    var resultadoFaixa = document.querySelector('#resultado-faixa')

    var peso = Number(inputPeso.value)
    var altura = Number(inputAltura.value)

    var imc = calcularIMC(peso,altura)
    var IMCformatado = imc.toFixed(2).replace('.',',')
    
    resultadoIMC.textContent = IMCformatado
    resultadoFaixa.textContent = faixas(imc)
}
start();