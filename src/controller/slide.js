export function slide() {
  const json = {
    slideProduto: [
      {
        id: 1,
        img: require("../assets/imagens/embalagem.png"),
        Nome_Produto: "O Café Arlvac",
        Descricao:
          " Superior Gourmet é trabalhado a partir de lotes oriundos de uma única fazenda.",
      },
      {
        id: 2,
        img: require("../assets/imagens/cafe_gourmet.png"),
        Nome_Produto: "Artesanal 250g",
        Descricao:
          "A moagem artesanal garante um café com muito mais qualidade, complexidade e sabor.",
      },
      {
        id: 3,
        img: require("../assets/imagens/moido.png"),
        Nome_Produto: "Café Torrado",
        Descricao:
          "Desde 2009 no Mercado Livre, 100% de avaliações positivas. Qualificação em destaque.",
      },
    ],
  };
  return json;
}
