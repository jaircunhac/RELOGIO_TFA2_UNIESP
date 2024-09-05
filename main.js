const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function time() {
    let dataAtual = new Date();
    let hr = dataAtual.getHours().toString().padStart(2, "0");
    let min = dataAtual.getMinutes().toString().padStart(2, "0");
    let sc = dataAtual.getSeconds().toString().padStart(2, "0");

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sc;
}

setInterval(time, 1000);