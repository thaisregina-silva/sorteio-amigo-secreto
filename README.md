# Amigo Secreto 🎁

Um projeto simples em JavaScript, HTML e CSS que permite criar um jogo de Amigo Secreto, adicionando amigos, sorteando aleatoriamente e mostrando o resultado na tela.

## Funcionalidades

1. 📝 Adicionar amigos à lista dinamicamente.
2. 📋 Exibir a lista de amigos cadastrados.
3. 🎲 Sortear um amigo aleatório e mostrar o resultado na página.
4. ⚠️ Validação de input: não permite nomes vazios ou duplicados.
5. 🔄 Reiniciar o jogo com um botão, limpando lista e resultado.

## Tecnologias 🛠

- HTML5 – estrutura da página
- CSS3 – layout básico e estilização
- JavaScript (ES6) – manipulação de DOM, arrays e eventos

## Como Usar 🚀

Clone este repositório:

1. `git clone https://github.com/thaisregina-silva/sorteio-amigo-secreto.git`

2. Abra o arquivo index.html em um navegador moderno.
3. Digite o nome dos amigos e clique em Adicionar.
4. Clique em Sortear amigo para ver o resultado.
5. Clique em Reiniciar jogo para começar de novo.

## Como Funciona 🧩

O sorteio é feito usando Math.random() e Math.floor() para escolher um índice aleatório no array de amigos.

A lista de amigos é exibida criando <li> dinamicamente via DOM.

A verificação de duplicidade é feita com array.includes().

O botão de reinício usa location.reload() para simplificar a lógica e limpar o estado do jogo.

## Próximos Passos / Melhorias 🌟

1.  Adicionar animação ao revelar o amigo sorteado.
2. Salvar a lista de amigos entre sessões usando localStorage.
3. Melhorar o layout com CSS avançado ou frameworks leves.

## Objetivo do Projeto 🎯

Aprender JavaScript básico e manipulação de DOM, aplicando lógica de arrays, eventos e validação de input em um projeto divertido e visual.
