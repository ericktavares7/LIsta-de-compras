const input = document.getElementById("add"); // Informação do usuário
const addButton = document.querySelector(".flex button"); // Botão adicionar
const ul = document.querySelector("ul"); // Minha lista
const alertBox = document.querySelector(".alert"); // Alerta

// Função para criar o item fora do clique do botão
function addItem(text) {
  const newItem = document.createElement("li");
  newItem.classList.add("container"); // Usa a minha classe de estilo

  // Cria um ID único usando a hora atual, para o checkbox funcionar.
  const id = Date.now();

  newItem.innerHTML = `
    <input type="checkbox" id="${id}" class="custom-check">
    <label for="${id}">${text}</label>
    <img src="img/lixeira.svg" alt="remover" class="delete-icon">
  `;

  // Coloca o novo item dentro da <ul>
  ul.append(newItem);
}

// Lógica do botão adicionar
addButton.onclick = (event) => {
  event.preventDefault(); // Página não recarrega

  const value = input.value; // Pega o que foi digitado do usuário

  // Impedir itens vazios
  if (value === "") {
    alert("Digite algo para adicionar");
    return;
  }
  addItem(value); // Chama a função para criar o item

  // Limpa o campo e foca nele de novo
  input.value = "";
  input.focus();
};

// Lógica de deletar item
ul.onclick = (event) => {
  if (event.target.classList.contains("delete-icon")) {
    // Para achar o <li> pai do ícone clicado e remove
    const itemToRemove = event.target.closest("li");
    if (itemToRemove) {
      itemToRemove.remove();
      showAlert(); // Função que chama o alerta
    }
  }
};

function showAlert() {
  alertBox.style.display = "flex"; // Coloca o display flex no alerta, para aparecer na tela.

  // Fazer a mensagem sumir sozinha após 3seg
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000); // 3000 milisegundos = 3 segundos
}

// Fechar no "X" manualmente
const closeIcon = alertBox.querySelector(".close-icon");
if (closeIcon) {
  closeIcon.onclick = () => {
    alertBox.style.display = "none";
  };
}