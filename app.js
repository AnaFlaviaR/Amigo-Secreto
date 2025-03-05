let amigos = [];

// Função para adicionar um amigo ao array e atualizar a lista de amigos
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo').value.trim();

    if (nomeInput === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeInput);

    document.getElementById('amigo').value = '';

    atualizarListaDeAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = amigoSorteado;
    lista.appendChild(li);

    amigos = [amigoSorteado];
}

