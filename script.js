function filtrarAlunos() {
  const termo = document.getElementById("busca").value.toLowerCase();

  document.querySelectorAll("#listaAlunos tr").forEach(linha => {
    linha.style.display = linha.innerText.toLowerCase().includes(termo) ? "" : "none";
  });
}

function cadastrarAluno(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  document.getElementById("mensagem").textContent =
    `Aluno ${nome} cadastrado com sucesso!`;

  event.target.reset();
}
