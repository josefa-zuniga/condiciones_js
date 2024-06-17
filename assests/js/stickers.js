function calcularStickers() {
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;
    const total = sticker1 + sticker2 + sticker3;

    const resultado = document.getElementById('resultado');
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = 'Llevas demasiados stickers';}}