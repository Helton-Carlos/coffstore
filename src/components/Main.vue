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
        <BtnPadrao  @AcaoBtn="AcaoMain"/>
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
import BtnPadrao from '@/components/BtnPadrao.vue'
export default {
  components:{BtnPadrao},
  data(){
  },
  methods:{
     AcaoMain(){
      alert('O Café Arlvac')
     }
  }
};
</script>

<style scoped>
.background {background-image: url("../assets/imagens/background-main.png");
  width: 100%;height: 50vh; margin-top: 20px; background-position: center;}
.espaco-cima{padding: 40px 0px 10px;}
.espaco-baixo{padding-bottom: 10px;}
p{margin-bottom: 10px }
</style>
