//
let amigos = [];

// Agregar amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Mostrar lista en pantalla
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
