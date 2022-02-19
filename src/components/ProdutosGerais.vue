<template>
  <div>
    <div class="flex-container">
      <div class="flex-coluna">
        <h1 style="margin:20px 0px">Produtos:</h1>
        <div class="flex-wrap">
          <div
            class="box-produto"
            v-for="(Produto, index) in this.getProdutos"
            :key="index"
          >
            <img src="@/assets/imagens/tags-core.png" alt="tags" class="tags" />
            <img
              :src="Produto.img"
              :alt="Produto.Nome_Produto"
              class="produto"
            />
            <h4>{{ Produto.Nome_Produto }}</h4>
            <img src="@/assets/imagens/estrelas.png" alt="estrelas" />
            <div class="flex-alinhar">
              <a href="#" class="btn-red-pequeno">COMPRAR</a>
              <p>R$ {{ Produto.Preco }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { acessorio, cafeteira, cha, cafe } from "../controller/produtos";
export default {
  data() {
    return {
      getProdutos: [],
    };
  },
  methods: {
    buscarProduto() {
      if (this.$route.path === "/cafes") {
        let Vproduto = cafe();
        for (let i = 0; i < Vproduto.cafe.length; i++) {
          this.getProdutos.push(Vproduto.cafe[i]);
        }
      }
      if (this.$route.path === "/cafeteiras") {
        let Vproduto = cafeteira();
        for (let i = 0; i < Vproduto.cafeteiras.length; i++) {
          this.getProdutos.push(Vproduto.cafeteiras[i]);
        }
      }
      if (this.$route.path === "/cha") {
        let Vproduto = cha();
        for (let i = 0; i < Vproduto.cha.length; i++) {
          this.getProdutos.push(Vproduto.cha[i]);
        }
      }
      if (this.$route.path === "/acessorios") {
        let Vproduto = acessorio();
        for (let i = 0; i < Vproduto.acessorio.length; i++) {
          this.getProdutos.push(Vproduto.acessorio[i]);
        }
      }
    },
  },
  created() {
    this.buscarProduto();
  },
};
</script>

<style></style>
