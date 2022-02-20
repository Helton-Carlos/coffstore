export function slide() {
  const json = {
    produtos: [
      {
        id: 1,
        img: require("../assets/imagens/embalagem.png"),
        Nome_Produto: "O Café Arlvac",
        Descricao:
          " Superior Gourmet é trabalhado a partir de lotes oriundos de uma única fazenda.",
      },
      {
        id: 2,
        img: require("../assets/imagens/cafe1.png"),
        Nome_Produto: "Café Pilão Torrado",
        Descricao:
          "O café Pilão Tradicional, de intensidade 8, disponível na versão à vácuo de 500g, tem um ponto de torra acentuado e um processo de moagem fina e uniforme, que garantem e preservam seu sabor forte e encorpado. É perfeito para o seu dia a dia.",
      },
      {
        id: 3,
        img: require("../assets/imagens/cafe1.png"),
        Nome_Produto: "Café Pilão Torrado",
        Descricao:
          "O café Pilão Tradicional, de intensidade 8, disponível na versão à vácuo de 500g, tem um ponto de torra acentuado e um processo de moagem fina e uniforme, que garantem e preservam seu sabor forte e encorpado. É perfeito para o seu dia a dia.",
      },
    ],
  };
  return json;
}
