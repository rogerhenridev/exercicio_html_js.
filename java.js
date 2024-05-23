document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const feedback = document.getElementById('feedback');
    
    if (campoB > campoA) {
        feedback.textContent = 'Formulário válido: O número B é maior que o número A.';
        feedback.classList.remove('error');
        feedback.classList.add('success');
    } else {
        feedback.textContent = 'Formulário inválido: O número B deve ser maior que o número A.';
        feedback.classList.remove('success');
        feedback.classList.add('error');
    }
});
