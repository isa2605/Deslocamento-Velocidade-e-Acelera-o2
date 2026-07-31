document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btnCalcular');
    
    btnCalcular.addEventListener('click', calcular);
});

function calcular() {
    const massa = parseFloat(document.getElementById('massa').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    const errorDiv = document.getElementById('errorMessage');
    const resultsSection = document.getElementById('resultsSection');

    // Validação dos dados de entrada
    if (isNaN(massa) || isNaN(distancia) || isNaN(tempo)) {
        mostrarErro("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (tempo <= 0) {
        mostrarErro("O tempo deve ser maior que zero (t > 0).");
        return;
    }

    // Esconde mensagens de erro anteriores
    errorDiv.style.display = "none";

    // Fórmulas mecânicas (partindo do repouso: v0 = 0)
    // d = (1/2) * a * t^2  =>  a = (2 * d) / (t^2)
    const aceleracao = (2 * distancia) / Math.pow(tempo, 2);
    const forca = massa * aceleracao;
    const energia = forca * distancia;
    const potencia = energia / tempo;

    // Atualiza a interface gráfica com os resultados
    document.getElementById('resAceleracao').textContent = `${aceleracao.toFixed(2)} m/s²`;
    document.getElementById('resForca').textContent = `${forca.toFixed(2)} N`;
    document.getElementById('resEnergia').textContent = `${energia.toFixed(2)} J`;
    document.getElementById('resPotencia').textContent = `${potencia.toFixed(2)} W`;

    resultsSection.style.display = "block";
}

function mostrarErro(mensagem) {
    const errorDiv = document.getElementById('errorMessage');
    const resultsSection = document.getElementById('resultsSection');
    
    errorDiv.textContent = mensagem;
    errorDiv.style.display = "block";
    resultsSection.style.display = "none";
}
