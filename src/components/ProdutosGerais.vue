<template>
  <div>
    <div class="flex-container">
      <div class="flex-coluna">
        <h1>Produtos</h1>
        {{ this.getProdutos }}
      </div>
    </div>
  </div>
</template>

<script>
import { produtos } from "../controller/produtos";
export default {
  data() {
    return {
      getProdutos: [],
    };
  },
  methods: {
    buscarProduto() {
      let Vproduto = produtos();
      for (let i = 0; i < Vproduto.produto.length; i++) {
        var loopPorjeto = Vproduto.produto[i];
        this.getProdutos.push(loopPorjeto);
      }
    },
  },
  created() {
    this.buscarProduto();
  },
};
</script>

<style></style>
