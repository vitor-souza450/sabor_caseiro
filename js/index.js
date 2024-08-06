import {
  validar_nome,
  alternar_secao_modal,
  limpar_desfocar_campo,
  validar_tipo,
  validar_preco,
} from "./utilitarios.js";

const formulario_cadastrar_produto = document.querySelector(
  "#formulario_cadastrar_produto"
);

if (formulario_cadastrar_produto) {
  formulario_cadastrar_produto.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome");
    const tipo = document.querySelector("#tipo");
    const preco = document.querySelector("#preco");

    if (nome && tipo && preco) {
      const valor_nome = nome.value.trim();
      const valor_tipo = tipo.value.trim();
      const valor_preco = preco.value.trim();

      if (!nome.checkValidity() || !validar_nome(valor_nome)) {
        alternar_secao_modal(
          "O nome do produto é obrigatório e deve conter até 30 caracteres."
        );
        limpar_desfocar_campo(nome);
        return;
      }

      if (!tipo.checkValidity() || !validar_tipo(valor_tipo)) {
        alternar_secao_modal(
          'O tipo do produto é obrigatório e deve ser igual a "Aperitivo", "Prato principal" ou "Sobremesa".'
        );
        limpar_desfocar_campo(tipo);
        return;
      }

      if (!preco.checkValidity() || !validar_preco(valor_preco)) {
        alternar_secao_modal(
          "O preço do produto é obrigatório e deve ser um número entre 1 e 999,99 com até duas casas decimais."
        );
        limpar_desfocar_campo(preco);
        return;
      }

      formulario_cadastrar_produto.submit();
    }
  });
}
