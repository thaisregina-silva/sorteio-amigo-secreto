let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('#amigo');
    let amigo = input.value.trim(); // Remove espaços em branco no início e no fim

    if (amigo === "") {
        alert("Por favor, insira um nome válido.");
    } else if (amigos.includes(amigo)) {
        alert("Este amigo já foi adicionado! Adicione um amigo diferente :)");
    } else {
        amigos.push(amigo);
        input.value = ""; // Limpa o campo de entrada
        listarAmigos(); // Atualiza a lista de amigos exibida
    }
}

function listarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os amigos

    amigos.forEach(amigo =>{ // Itera sobre cada amigo no array 'amigos'
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!');
        return;
    } else if (amigos.length === 1) {
        alert('Adicione mais amigos para sortear!');
        return;
    }


    let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia um amigo aleatoriamente usando Math.random. Math.floor é usado para arredondar para baixo e então termos um índice válido do array.
    let resultado = document.querySelector('#resultado');
    resultado.textContent = `O amigo sorteado é: ${sorteado}`;
}

function reiniciarJogo() {
    location.reload(); // recarrega a página inteira
}

