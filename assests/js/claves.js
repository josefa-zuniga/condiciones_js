function verificarPassword() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    const password = digit1 + digit2 + digit3;

    const resultado = document.getElementById('resultado');

    if (password === '911') {
        resultado.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultado.textContent = 'Password 2 correcto';
    } else {
        resultado.textContent = 'Password incorrecto';
    }
}