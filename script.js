   const campo = document.getElementById("campo-pesquisa");
    const botao = document.getElementById("botao-pesquisar");

    botao.addEventListener("click", function () {
      const ser = campo.value;
      const textoPagina = document.body.innerText;

      if (textoPagina.toLowerCase().includes(ser.toLowerCase())) {
        alert("Encontrei: " + ser);
      } else {
        alert("Não encontrei: " + ser);
      }
    });