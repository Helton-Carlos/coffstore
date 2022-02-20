<template>
  <section class="flex-container flex-coluna margem-topo">
    <h2 class="flex alinhar-center">
      ESCOLHA COM
      <div class="red-pequeno">AMOR</div>
      E SEMPRE A ESCOLHA CERTA !
    </h2>
    <div class="flex">
      <a
        class="btn-selecao"
        v-for="(titulos, i) in titulo"
        :key="i"
        @click="marcasAtivas(i)"
      >
        {{ titulos }}
      </a>
    </div>
    <div class="flex-alinhar flex-container" style="width:80%;margin: 0 auto">
      <div
        class="box-produto"
        v-for="(Produto, index) in this.getProdutos"
        :key="index"
      >
        <img src="@/assets/imagens/tags-core.png" alt="tags" class="tags" />
        <img :src="Produto.img" :alt="Produto.Nome_Produto" class="produto" />
        <h4>{{ Produto.Nome_Produto }}</h4>
        <img src="@/assets/imagens/estrelas.png" alt="estrelas" />
        <div class="flex-alinhar">
          <a href="#" class="btn-red-pequeno">COMPRAR</a>
          <p>R$ {{ Produto.Preco }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { acessorio, cafeteira, cha, cafe } from "../controller/produtos";
export default {
  data() {
    return {
      titulo: ["CAFÉ", "CAFETEIRA", "CHÁ", "ACESSÓRIOS"],
      getProdutos: [],
      mudarIndex: 0,
    };
  },
  methods: {
    marcasAtivas(indexTitulos) {
      if (indexTitulos === 0 || indexTitulos === undefined) {
        this.getProdutos = [];
        let Vproduto = cafe();
        for (let i = 0; i < 4; i++) {
          this.getProdutos.push(Vproduto.cafe[i]);
        }
      }
      if (indexTitulos === 1) {
        this.getProdutos = [];
        let Vproduto = cafeteira();
        for (let i = 0; i < 4; i++) {
          this.getProdutos.push(Vproduto.cafeteiras[i]);
        }
      }
      if (indexTitulos === 2) {
        this.getProdutos = [];
        let Vproduto = cha();
        for (let i = 0; i < 4; i++) {
          this.getProdutos.push(Vproduto.cha[i]);
        }
      }
      if (indexTitulos === 3) {
        this.getProdutos = [];
        let Vproduto = acessorio();
        for (let i = 0; i < 4; i++) {
          this.getProdutos.push(Vproduto.acessorio[i]);
        }
      }
    },
  },
  created() {
    this.marcasAtivas();
  },
};
</script>

<style>
p {
  font-size: 17px;
  font-weight: 500;
  padding: 0px 5px;
}

.produto {
  width: 190px;
  padding: 20px 0px 15px 20px;
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
  padding: 4px 8px;
  font-weight: 600;
  color: #7b7575;
  margin: 15px 8px;
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
  border: 1px solid #7b7575;
  border-radius: 10px;
  width: 230px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 0 0.2em #222;
  padding: 0px 10px;
  margin: 10px 6px;
}
.btn-red-pequeno {
  background-color: #7b0202;
  padding: 4px 10px;
  color: #fff;
}
.btn-red-pequeno:hover {
  background-color: rgb(39, 7, 7);
  transition: 1s;
}
</style>
