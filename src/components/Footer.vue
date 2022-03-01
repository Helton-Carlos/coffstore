<template>
  <div class="fundo-preto">
    <div class="flex-container">
      <div class="flex-coluna">
        <img src="../assets/imagens/CoffStore-white.png" alt="logo-branca" />
        <img src="../assets/imagens/cartoes.png" alt="Cartões de credito" />
      </div>
      <div>
        <p class="borda-red">Loja</p>
        <li v-for="navegar in navegacao" :key="navegar">
          <router-link class="navegar" :to="navegar.rotas">{{
            navegar.nome
          }}</router-link>
        </li>
      </div>
      <div>
        <p class="borda-red">aTENDIMENTO</p>
        <li v-for="atender in atendimento" :key="atender">
          <a href="#">{{ atender }}</a>
        </li>
      </div>
      <div>
        <img src="../assets/imagens/facebook.png" alt="facebook" />
        <img src="../assets/imagens/instagram.png" alt="instagran" />
        <img src="../assets/imagens/whatsapp.png" alt="whatsaap" />
      </div>
    </div>
    <p class="fim">Todos os direitos reservados</p>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      navegacao: [
        { nome: "CAFÉS", rotas: "cafes" },
        { nome: "CAFETEIRAS", rotas: "cafeteiras" },
        { nome: "CHÁ", rotas: "cha" },
        { nome: "ACESSÓRIOS", rotas: "acessorios" },
        { nome: "CONTATOS", rotas: "contatos" },
      ],
      atendimento: [
        "MEUS PEDIDOS",
        "MINHA CONTA",
        "ATENDIMENTO",
        "EXPERIÊNCIA",
        "RECLAMAÇÃO",
      ],
    };
  },
};
</script>

<style scoped>
.fundo-preto {
  width: 100%;
  background-color: #000000;
  margin-top: 50px;
  padding: 40px 10px 10px 10px;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  color: #7b0202;
}
img {
  padding-bottom: 20px;
  padding-left: 20px;
}
.borda-red {
  border-bottom: 3px solid #7b0202;
  width: 40px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.fim {
  text-align: center;
  padding: 20px;
  font-size: 12px;
  font-weight: 500;
}
</style>
