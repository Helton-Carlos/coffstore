<template>
  <div>
    <Header />
    <hr style="width: 80%; margin: 0px auto" />
    <div v-for="(produto, i) in this.objProduto" :key="i" style="width: 80%; margin: 0px auto" >
      <div class="flex-container">
        <div style="margin-top: 20px">
          <img :src="produto.img" alt="produto.Nome_Produto" class="espaco-img" />
          <div class="flex">
            <img :src="produto.img" alt="produto.Nome_Produto" class="espaco-small-img" />
            <img :src="produto.img" alt="produto.Nome_Produto" class="espaco-small-img" />
          </div>
        </div>
        <div>
          <h1>{{ produto.Nome_Produto }}</h1>
          <p>Marca: {{ produto.Nome_Marca }}</p>
          <p>Preço: R${{ produto.Preco }}</p>
          <div class="flex">
            <p>Quantidade:</p>
            <p class="color">{{ this.qtde }}</p>
          </div>
          <p style="color: red">Quantidade maxima por produto 10 unidades.</p>
          <div style="margin: 5px 0" class="flex">
            <button style="margin-right: 15px" @click="remover()">Remover -</button>
            <button @click="add()">Adicionar +</button>
          </div>
          <div style="margin: 20px 0">
            <BtnPadrao text="COMPRAR" @click="comprarProduto()" />
          </div>
          <div style="margin: 30px 0">
            <BtnPadrao text="FAVORITO" @click="produtoFavorito()" />
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-coluna" style="margin: 50px 0">
          <h1 style="margin-top: 20px">Descrição:</h1>
          <p>{{ produto.Descricao }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { acessorio, cafeteira, cha, cafe } from "../controller/produtos";
import BtnPadrao from "../components/BtnPadrao.vue";
export default {
  components: { Header, Footer, BtnPadrao },
  name: "Produtos",
  props: ["id"],
  data() {
    return {
      objProduto: [],
      qtde: 1,
    };
  },
  methods: {
    buscarProduto() {
      //console.log(this.id);
      if (this.id) {
        let Vproduto = cafeteira();
        for (let i = 0; i < Vproduto.cafeteiras.length; i++) {
          if (parseInt(this.id) === Vproduto.cafeteiras[i].id) {
            this.objProduto.push(Vproduto.cafeteiras[i]);
          }
        }
      }
      if (this.id) {
        let Vproduto = cha();
        for (let i = 0; i < Vproduto.cha.length; i++) {
          if (parseInt(this.id) === Vproduto.cha[i].id) {
            this.objProduto.push(Vproduto.cha[i]);
          }
        }
      }
      if (this.id) {
        let Vproduto = cafe();
        for (let i = 0; i < Vproduto.cafe.length; i++) {
          if (parseInt(this.id) === Vproduto.cafe[i].id) {
            this.objProduto.push(Vproduto.cafe[i]);
          }
        }
      }
      if (this.id) {
        let Vproduto = acessorio();
        for (let i = 0; i < Vproduto.acessorio.length; i++) {
          if (parseInt(this.id) === Vproduto.acessorio[i].id) {
            this.objProduto.push(Vproduto.acessorio[i]);
          }
        }
      }
    },
    comprarProduto() {
      alert("Esses produtos estão no carrinho: " + this.qtde + " und");
      this.$store.state.carrinho = this.qtde + this.$store.state.carrinho;
    },
    produtoFavorito() {
      this.$store.state.favorito = this.$store.state.favorito + 1;
    },
    add() {
      if (this.qtde < 10) {
        this.qtde++;
      }
    },
    remover() {
      if (this.qtde >= 1) {
        this.qtde--;
      }
    },
  },
  created() {
    this.buscarProduto();
  },
};
</script>
<style scoped>
.espaco-img {
  width: 290px;
  border: 2px solid #000000;
  padding: 40px;
}
.espaco-small-img {
  width: 140px;
  border: 2px solid #000000;
  padding: 10px;
  margin-right: 10px;
}

.color {
  padding: 0px 5px;
  background-color: #9e9e9e;
}
p {
  margin: 2px 0px;
}
button {
  padding: 10px 10px;
  background-color: #222222;
  color: #fff;
  border: none;
}
button:hover {
  background-color: #8a8a8a;
}
</style>
