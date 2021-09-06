<template>
  <div>
    <h2 class=" alinhar-texto">DICAS PARA SEU<div class="red">CAFÉ TER MAIS ESTILO</div></h2>
    <div class="flex-container">
    <div><img src="@/assets/imagens/Grupo01.png" alt="Grupo01" /></div>
    <div class="flex-coluna espacos">
      <img src="@/assets/imagens/Grupo02.png" alt="Grupo02" />
      <img src="@/assets/imagens/Grupo03.png" alt="Grupo03" />
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

img{padding:10px 10px 12px 0px;}
.alinhar-texto{text-align: center;margin: 0 auto}
.red{  color: #7b0202;
  padding: 0px 10px;}
</style>
