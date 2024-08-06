import { caixa_secao_modal, alternar_secao_modal } from "./utilitarios.js";

const botao_abrir_barra_lateral = document.querySelector(
  "#botao_abrir_barra_lateral"
);
const barra_lateral = document.querySelector("#barra_lateral");
const botao_fechar_barra_lateral = document.querySelector(
  "#botao_fechar_barra_lateral"
);
const botao_fechar_secao_modal = document.querySelector(
  "#botao_fechar_secao_modal"
);

if (botao_abrir_barra_lateral && barra_lateral && botao_fechar_barra_lateral) {
  const alternar_barra_lateral = () => {
    barra_lateral.classList.toggle("ativo");
  };

  window.addEventListener("pageshow", () => {
    barra_lateral.classList.remove("ativo");
  });

  botao_abrir_barra_lateral.addEventListener("click", alternar_barra_lateral);
  botao_fechar_barra_lateral.addEventListener("click", alternar_barra_lateral);
}

if (botao_fechar_secao_modal) {
  botao_fechar_secao_modal.addEventListener("click", () => {
    alternar_secao_modal(null);
  });
}

document.addEventListener("click", (e) => {
  if (caixa_secao_modal && e.target === caixa_secao_modal) {
    alternar_secao_modal(null);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    alternar_secao_modal(null);
  }
});
