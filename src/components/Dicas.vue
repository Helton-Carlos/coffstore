<template>
  <div>
    <h2 class=" alinhar-texto">
      DICAS PARA SEU
      <div class="red">CAFÉ TER MAIS ESTILO</div>
    </h2>
    <div class="flex-container">
      <a href="#" class="imagens">
        <img src="@/assets/imagens/Grupo01.png" alt="Grupo01" />
      </a>
      <div class="flex-coluna espacos">
        <a href="#"  class="imagens">
          <img src="@/assets/imagens/Grupo02.png" alt="Grupo02" />
        </a>
        <a href="#" class="imagens">
          <img src="@/assets/imagens/Grupo03.png" alt="Grupo03" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
img {
  padding: 10px 10px 8px 0px;
}
.alinhar-texto {
  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
}
.red {
  color: #7b0202;
  padding: 0px 10px;
}
.imagens:hover{
transform: scale(1.1,1.1);}
</style>
