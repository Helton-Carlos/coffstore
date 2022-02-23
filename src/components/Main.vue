<template>
  <main>
    <div class="background center flex-alinhar">
      <div class="flex-container">
        <div>
          <img
            src="@/assets/imagens/SETA=BAIXO.png"
            alt="seta"
            @click="menosIndex()"
            class="click-btn"
          />
        </div>
        <div class="flex" v-for="(descricao, i) in produto" :key="i">
          <img :src="descricao.img" :alt="descricao.Nome_Produto" />
          <div class="flex-coluna alinhar-esquerda fonte-branco">
            <h2 class="espaco-cima">{{ descricao.Nome_Produto }}</h2>
            <p class="espaco-baixo" style="width: 450px">
              {{ descricao.Descricao }}
            </p>
            <BtnPadrao text="CONHEÇA" @AcaoBtn="AcaoMain" />
          </div>
        </div>
        <div class="efeitos">
          <img
            src="@/assets/imagens/SETA=BAIXO-1.png"
            alt="seta"
            @click="maisIndex()"
            class="click-btn"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BtnPadrao from "@/components/BtnPadrao.vue";
import { slide } from "../controller/slide";
export default {
  components: { BtnPadrao },
  data() {
    return {
      produto: [],
      indexProduto: 0,
    };
  },
  methods: {
    AcaoMain() {
      alert("O Café Arlvac");
    },
    produtosSlide() {
      this.produto = [];
      var produtos = slide();
      this.produto.push(produtos.slideProduto[this.indexProduto]);
    },
    menosIndex() {
      this.indexProduto--;
      if (this.indexProduto < 0) {
        this.indexProduto = 2;
      }
      console.log(this.indexProduto);
      this.produtosSlide();
    },
    maisIndex() {
      this.indexProduto++;
      if (this.indexProduto > 2) {
        this.indexProduto = 0;
      }
      this.produtosSlide();
    },
  },
  created() {
    this.produtosSlide();
  },
};
</script>

<style scoped>
.background {
  background-image: url("../assets/imagens/background-main.png");
  width: 100%;
  height: 50vh;
  margin-top: 20px;
  background-position: center;
}
.espaco-cima {
  padding: 40px 0px 10px;
}
.espaco-baixo {
  padding-bottom: 10px;
}
p {
  margin-bottom: 10px;
}
.click-btn:hover {
  transform: scale(1.1, 1.1);
}
</style>
