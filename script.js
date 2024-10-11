const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.querySelector('.resultado');
const resultadoIMC = document.getElementById('resultadoIMC');
const classificacaoIMC = document.getElementById('classificacaoIMC');

function calcularIMC() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let classificacao = '';

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 24.9) classificacao = "Peso normal";
        else if (imc < 29.9) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        resultadoIMC.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
        classificacaoIMC.textContent = `Classificação: ${classificacao}`;
        
        resultadoDiv.classList.add('aparecer');

    } else {
        resultadoIMC.textContent = "Por favor, insira valores válidos.";
        classificacaoIMC.textContent = "";
        
        resultadoDiv.classList.remove('aparecer');
    }
}

calcularBtn.addEventListener('click', calcularIMC);
