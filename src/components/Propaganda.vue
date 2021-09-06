<template>
  <div class="flex-container">
    <div class="propaganda">
      <div class="espaco">
        <h2>Rei do café</h2>
        <p>
          Café bom é o tradicional, o cheirinho do café é sinal de energia na
          sua rede de trabalho e em sua casa é a hora de uma boa prosa.
        </p>
        <BtnPadrao @AcaoBtn="AcaoPropaganda" />
      </div>
    </div>
  </div>
</template>

<script>
import BtnPadrao from '@/components/BtnPadrao.vue'
export default {
  components:{BtnPadrao},
  data() {
    return {};
  },
  methods:{
    AcaoPropaganda(){
      alert('Ir propaganda')
    }
  }
};
</script>

<style scoped>
.propaganda {
  background-image: url("../assets/imagens/background-select.png");
  background-position: center;
  width: 100%;
  height: 50vh;
  margin-top: 50px;
  color: #fff;
}
.espaco{
  width: 450px;
  padding: 35px;
}
h2 {
  font-size: 40px;
  font-family: "Kaisei HarunoUmi", serif;
  padding: 8px 0px;
}
p {
  font-size: 17px;
  font-weight: 700;
  font-family: "Kaisei HarunoUmi", serif;
  margin-bottom: 40px;
}

</style>
