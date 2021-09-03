<template>
  <main>
    <div class="background center flex-alinhar">
    <div class="flex-container">
      <div>
        <img src="@/assets/imagens/SETA=BAIXO.png" alt="seta" />
      </div>
      <div class="flex">
        <img src="@/assets/imagens/embalagem.png" alt="embalagem" />
        <div class="flex-coluna alinhar-esquerda fonte-branco">
          <h2 class="espaco-cima">O Café Arlvac</h2>
          <p class="espaco-baixo">
            Superior Gourmet é trabalhado a partir
            <br />
            de lotes oriundos de uma única fazenda.
          </p>
          <a href="#" class="btn-red espaco-direita">
            CONHEÇA <img src="@/assets/imagens/seta-btn.png" alt="seta" />
          </a>
        </div>
      </div>
      <div class="efeitos">
        <img src="@/assets/imagens/SETA=BAIXO-1.png" alt="seta" />
      </div>
    </div>
   </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.background {background-image: url("../assets/imagens/background-main.png");
  width: 100%;height: 50vh; margin-top: 20px; background-position: center;}
.btn-red{background-color: #7B0202;
padding: 8px 25px; color:#fff;width: 150px;}
.btn-red:hover{background-color: rgb(39, 7, 7);transition: 1s;}
.espaco-cima{padding: 40px 0px 10px;}
.espaco-baixo{padding-bottom: 10px;}
</style>
