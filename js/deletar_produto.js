import {
  id,
  validar_id,
  alternar_secao_modal,
  limpar_desfocar_campo,
} from "./utilitarios.js";

const formulario_deletar_produto = document.querySelector(
  "#formulario_deletar_produto"
);

if (formulario_deletar_produto) {
  formulario_deletar_produto.addEventListener("submit", (e) => {
    e.preventDefault();

    if (id) {
      const valor_id = id.value.trim();

      if (!id.checkValidity() || !validar_id(valor_id)) {
        alternar_secao_modal(
          "O ID (#) do produto deve ser um número inteiro a partir de 1."
        );
        limpar_desfocar_campo(id);
        return;
      }

      formulario_deletar_produto.submit();
    }
  });
}
