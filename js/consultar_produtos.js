const pesquisa = document.querySelector("#pesquisa");

if (pesquisa) {
  pesquisa.addEventListener("input", (e) => {
    const valor_pesquisa = e.currentTarget.value.trim().toLowerCase();
    const caixa_tabela_produtos = document.querySelector(
      "#caixa_tabela_produtos"
    );
    const sem_pesquisa = document.querySelector("#sem_pesquisa");

    if (caixa_tabela_produtos && sem_pesquisa) {
      const linhas_tabela_produtos = document.querySelectorAll(
        "#corpo_tabela_produtos .linha_tabela_produtos"
      );

      if (linhas_tabela_produtos.length > 0) {
        let tem_pesquisa = false;

        linhas_tabela_produtos.forEach((linha_tabela_produtos) => {
          const texto_linha_tabela_produtos =
            linha_tabela_produtos.textContent.toLowerCase();

          if (texto_linha_tabela_produtos.includes(valor_pesquisa)) {
            linha_tabela_produtos.classList.remove("inativo");
            tem_pesquisa = true;
          } else {
            linha_tabela_produtos.classList.add("inativo");
          }
        });

        if (!tem_pesquisa) {
          caixa_tabela_produtos.classList.add("inativo");
          sem_pesquisa.classList.add("ativo");
        } else {
          caixa_tabela_produtos.classList.remove("inativo");
          sem_pesquisa.classList.remove("ativo");
        }
      }
    }
  });
}
