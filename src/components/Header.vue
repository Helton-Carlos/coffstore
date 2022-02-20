<template>
  <header>
    <div class="topo">
      <div class="flex-container espaco">
        <div><p>São Paulo-SP</p></div>
        <div>
          <p>PARCELAMENTO EM ATÉ 6 VEZES COM PARCELA MÍNIMA DE R$ 60,00!</p>
        </div>
        <div class="flex">
          <a href="#" class="fonte-branco"><p>Entrar</p></a>
          <p>|</p>
          <router-link to="/Cadastrar" class="fonte-branco"
            ><p class="espaco-direita">Cadastre-se</p></router-link
          >
          <img src="@/assets/imagens/usuario.png" alt="usuario" />
        </div>
      </div>
    </div>
    <div class="flex-container">
      <div>
        <div class="flex">
          <div class="flex-coluna">
            <p>FRETE GRÁTIS <br /><strong>Tel: (11) 2384-0521</strong></p>
            <p>Seg às Sex <br /><strong>09:00h às 18:00h</strong></p>
          </div>
        </div>
      </div>
      <div class="espaco">
        <a href="#">
          <img src="@/assets/imagens/CoffStore.png" alt="CoffStore" />
        </a>
      </div>
      <div>
        <p>
          <strong>Favorito: {{ favorito }}</strong>
        </p>
        <p>
          <strong>Produtos: {{ carrinho }}</strong>
        </p>
      </div>
    </div>
    <div class="flex-container">
      <nav class="center">
        <ul class="flex">
          <li v-for="navegar in navegacao" :key="navegar">
            <router-link class="navegar" :to="navegar.rotas">{{
              navegar.nome
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      favorito: 0,
      carrinho: 0,
      navegacao: [  
        { nome: "CAFÉS", rotas: "cafes" },
        { nome: "CAFETEIRAS", rotas: "cafeteiras" },
        { nome: "CHÁ", rotas: "cha" },
        { nome: "ACESSÓRIOS", rotas: "acessorios" },
        { nome: "CONTATOS", rotas: "contatos" },
      ],
    };
  },
};
</script>

<style scoped>
.topo {
  background-color: #7b0202;
  width: 100%;
  height: 45px;
  color: #fff;
  text-align: center;
  margin: 0 auto;
}
.espaco {
  padding: 12px 0px;
}
.router-link {
  color: #7b0202;
  display: flex;
}
p {
  font-size: 14px;
  font-weight: 600;
}
.center {
  text-align: center;
  margin: 0 auto;
}
.navegar {
  color: #000000;
  font-weight: 700;
}
.navegar:hover,
.router-link-exact-active {
  border-bottom: 4px solid #7b0202;
}
li {
  padding: 0px 10px;
}
.espaco-direita {
  padding-right: 10px;
}
.fonte-branco:hover {
  color: #4d4c4c;
}
</style>
