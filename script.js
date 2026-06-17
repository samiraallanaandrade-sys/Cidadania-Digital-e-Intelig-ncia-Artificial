document.getElementById('dicaBtn').addEventListener('click', function() {
    const mensagem = "Dica: Sempre desconfie de conteúdos sensacionalistas, verifique a fonte e procure por checagens em sites confiáveis antes de compartilhar!";
    document.getElementById('dicaDisplay').innerText = mensagem;
    document.getElementById('dicaDisplay').style.color = "#d9534f";
});
