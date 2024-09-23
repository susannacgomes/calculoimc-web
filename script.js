document.getElementById('menu-icon').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});

document.getElementById('imc-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let categoria = '';

        if (imc < 18.5) {
            categoria = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            categoria = 'Sobrepeso';
        } else {
            categoria = 'Obesidade';
        }

        document.getElementById('resultado-imc').textContent = `Seu IMC é ${imc} (${categoria})`;
    } else {
        document.getElementById('resultado-imc').textContent = 'Por favor, insira valores válidos.';
    }
});
