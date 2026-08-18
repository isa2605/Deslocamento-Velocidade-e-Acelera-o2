document.getElementById('physicsForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obter os valores inseridos pelo usuário
  const mass = parseFloat(document.getElementById('mass').value);
  const distance = parseFloat(document.getElementById('distance').value);
  const time = parseFloat(document.getElementById('time').value);

  // Validação para evitar divisão por zero
  if (time <= 0) {
    alert("O tempo deve ser maior que zero!");
    return;
  }

  // 1. Deslocamento (Δs) em m
  const displacement = distance;

  // 2. Velocidade Média (v = Δs / t) em m/s
  const velocity = distance / time;

  // 3. Aceleração (a = 2 * Δs / t²), considerando v0 = 0 m/s em m/s²
  const acceleration = (2 * distance) / Math.pow(time, 2);

  // 4. Força Resultante (F = m * a) em N (Newton)
  const force = mass * acceleration;

  // Exibição formatada com 2 casas decimais no HTML
  document.getElementById('resDisplacement').innerHTML = `${displacement.toFixed(2)} <span class="result-unit">m</span>`;
  document.getElementById('resVelocity').innerHTML = `${velocity.toFixed(2)} <span class="result-unit">m/s</span>`;
  document.getElementById('resAcceleration').innerHTML = `${acceleration.toFixed(2)} <span class="result-unit">m/s²</span>`;
  document.getElementById('resForce').innerHTML = `${force.toFixed(2)} <span class="result-unit">N</span>`;
});
// Efeito dinâmico opcional para destacar a sua assinatura
document.addEventListener('DOMContentLoaded', () => {
    const creditsSpan = document.querySelector('.gh-credits');

    if (creditsSpan) {
        creditsSpan.addEventListener('mouseenter', () => {
            creditsSpan.style.color = 'var(--text-color)';
            creditsSpan.style.transition = 'color 0.2s';
        });

        creditsSpan.addEventListener('mouseleave', () => {
            creditsSpan.style.color = 'var(--text-muted)';
        });
    }
});
