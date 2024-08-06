export const caixa_secao_modal = document.querySelector("#caixa_secao_modal");
export const id = document.querySelector("#id");

export const alternar_secao_modal = (mensagem) => {
  const secao_modal = document.querySelector("#secao_modal");
  const mensagem_secao_modal = document.querySelector("#corpo_secao_modal p");

  if (caixa_secao_modal && secao_modal && mensagem_secao_modal) {
    caixa_secao_modal.classList.toggle("ativo");
    secao_modal.classList.toggle("ativo");

    if (mensagem) {
      mensagem_secao_modal.textContent = mensagem;
    }
  }
};

export const validar_id = (id) => {
  const id_numerico = Number(id);

  return id && !isNaN(id) && !id.includes(".") && id_numerico >= 1;
};

export const validar_nome = (nome) => {
  return nome && nome.length <= 30;
};

export const validar_tipo = (tipo) => {
  return ["1", "2", "3"].includes(tipo);
};

export const validar_preco = (preco) => {
  const preco_numerico = Number(preco);

  return (
    (preco &&
      !isNaN(preco) &&
      !preco.includes(".") &&
      preco_numerico >= 1 &&
      preco_numerico <= 999.99) ||
    (preco.includes(".") && preco.split(".")[1].length <= 2)
  );
};

export const limpar_desfocar_campo = (campo) => {
  campo.value = "";
  campo.blur();
};
