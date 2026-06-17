function mostrarFakeNews() {
  const box = document.getElementById("fakeNews");

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

function mostrarDica() {
  const dicas = [
    "Sempre confira a fonte da notícia.",
    "Desconfie de conteúdos muito sensacionalistas.",
    "Busque a mesma notícia em outros sites.",
    "Imagens podem ser manipuladas por IA (deepfake)."
  ];

  const random = Math.floor(Math.random() * dicas.length);
  document.getElementById("dica").innerText = "💡 " + dicas[random];
}
