import {
  id,
  validar_id,
  validar_nome,
  alternar_secao_modal,
  limpar_desfocar_campo,
  validar_tipo,
  validar_preco,
} from "./utilitarios.js";

const formulario_editar_produto = document.querySelector(
  "#formulario_editar_produto"
);

if (formulario_editar_produto) {
  formulario_editar_produto.addEventListener("submit", (e) => {
    e.preventDefault();

    const novo_nome = document.querySelector("#novo_nome");
    const novo_tipo = document.querySelector("#novo_tipo");
    const novo_preco = document.querySelector("#novo_preco");

    if (id && novo_nome && novo_tipo && novo_preco) {
      const valor_id = id.value.trim();
      const valor_novo_nome = novo_nome.value.trim();
      const valor_novo_tipo = novo_tipo.value.trim();
      const valor_novo_preco = novo_preco.value.trim();

      if (!id.checkValidity() || !validar_id(valor_id)) {
        alternar_secao_modal(
          "O ID (#) do produto deve ser um número inteiro a partir de 1."
        );
        limpar_desfocar_campo(id);
        return;
      }

      if (!novo_nome.checkValidity() || !validar_nome(valor_novo_nome)) {
        alternar_secao_modal(
          "O novo nome do produto é obrigatório e deve conter até 30 caracteres."
        );
        limpar_desfocar_campo(novo_nome);
        return;
      }

      if (!novo_tipo.checkValidity() || !validar_tipo(valor_novo_tipo)) {
        alternar_secao_modal(
          'O novo tipo do produto é obrigatório e deve ser igual a "Aperitivo", "Prato principal" ou "Sobremesa".'
        );
        limpar_desfocar_campo(novo_tipo);
        return;
      }

      if (!novo_preco.checkValidity() || !validar_preco(valor_novo_preco)) {
        alternar_secao_modal(
          "O novo preço do produto é obrigatório e deve ser um número entre 1 e 999,99 com até duas casas decimais."
        );
        limpar_desfocar_campo(novo_preco);
        return;
      }

      formulario_editar_produto.submit();
    }
  });
}
