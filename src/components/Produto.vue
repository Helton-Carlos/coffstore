<template>
  <section class="flex-container flex-coluna margem-topo">
    <h2 class="flex alinhar-center">
      ESCOLHA COM
      <div class="red-pequeno">AMOR</div>
      E SEMPRE A ESCOLHA CERTA !
    </h2>
    <div class="flex">
      <div class="btn-selecao" v-for="titulos in titulo" :key="titulos">
        {{ titulos }}
      </div>
    </div>
    <div class="flex-alinhar">
      <div>
        <img src="@/assets/imagens/arrow-left.png" alt="seta-esquerda" />
      </div>
      <div class="box-produto" v-for="(Produto,index) in Produtos" :key="index">
        <img src="@/assets/imagens/tags-core.png" alt="tags" class="tags" />
        <img :src="Produto.img" :alt="Produto.Nome_Produto" class="produto" />
        <h4>{{Produto.Nome_Produto}}</h4>
        <img src="@/assets/imagens/estrelas.png" alt="estrelas" />
        <div class="flex-alinhar">
          <a href="#" class="btn-red-pequeno">COMPRAR</a>
          <p>{{Produto.Preco}}</p>
        </div>
      </div>
      <div>
        <img src="@/assets/imagens/arrow-rigth.png" alt="seta-esquerda" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titulo: ["ARTESANAL", "COMERCIAL", "CHÁ", "CAFETEIRA"],
       Produtos:[
            {
                id: 1,
                img:"../assets/imagens/caf1.png",
                Nome_Produto: "Cafeteira Elétrica Arno",
                Nome_Marca: "Oster 4401",
                Descricao:"Deixe sua casa com cheirinho de café com a prática Cafeteira Pratic da Mondial. A cafeteira pode preparar café para até 17 xícaras. Possui um sistema corta-pingos que facilita o seu manuseio e placa de aquecimento que mantém o café quente sem alterar seu sabor.",
                Preco:120.55
            },
            {
                id: 2,
                img:"../assets/imagens/caf2.png",
                Nome_Produto: "Cafeteira Mondial",
                Nome_Marca: "MONDIAL",
                Descricao:" A Mondial é a escolha de milhões de consumidores. Sempre inovando e buscando soluções para o bem-estar das pessoas, oferece uma linha completa de produtos. Em constantes pesquisas junto aos consumidores, seu portfólio ganha destaque na qualidade, no design moderno e na excelente relação custo x benefício. A Mondial orgulha-se de ser 100% brasileira.",
                Preco:90.99
            },
            {
                id: 3,
                img:"../assets/imagens/caf3.png",
                Nome_Produto: "Nescafé dolce Gusto",
                Nome_Marca: "Nescal",
                Descricao:" A Nescal é a escolha de milhões de consumidores. Sempre inovando e buscando soluções para o bem-estar das pessoas, oferece uma linha completa de produtos. Em constantes pesquisas junto aos consumidores.",
                Preco:199.99
            },
            {
                id: 4,
                img:"../assets/imagens/caf4.png",
                Nome_Produto: "Cafeteira Eletrica",
                Nome_Marca: "Mondial",
                Descricao:" RESUMIDA Compacta e Prática. Prepara 2 deliciosos cafés de 120ml ao mesmo tempo. O café fica pronto rapidamente, quentinho, direto na xícara e na medida certa.",
                Preco:97.99
            }
      ]
    };
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
  font-weight: 500;
  padding: 0px 5px;
}
.produto {
  padding: 30px 0px 0px 30px;
}
.tags {
  position: absolute;
  padding: 0px 10px;
}
.red-pequeno {
  color: #7b0202;
  padding: 0px 10px;
}
.btn-selecao {
  border-radius: 25px;
  border: 2px solid #7b7575;
  padding: 5px 10px;
  font-weight: 700;
  color: #7b7575;
  margin: 20px 10px;
}
.margem-topo {
  margin-top: 50px;
}
.btn-selecao:hover {
  background-color: #7b0202;
  color: #fff;
  border: 2px solid #7b0202;
}
.box-produto {
  border: 2px solid #7b7575;
  border-radius: 10px;
  width: 240px;
  height: 320px;
  background-color: #fff;
  box-shadow: 0 0 0.2em #222;
  padding: 0px 10px;
  margin: 0px 15px;
}
.btn-red-pequeno {
  background-color: #7b0202;
  padding: 5px 20px;
  color: #fff;
}
.btn-red-pequeno:hover {
  background-color: rgb(39, 7, 7);
  transition: 1s;
}
</style>
