<template>
  <div class="flex-container">
    <div class="propaganda">
      <div class="espaco">
        <h2>Rei do café</h2>
        <p>
          Café bom é o tradicional, o cheirinho do café é sinal de energia na
          sua rede de trabalho e em sua casa é a hora de uma boa prosa.
        </p>
        <router-link to="/Cafe">
          CONHEÇA <span> <img src="../assets/imagens/seta-btn.png" alt="seta-btn"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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
a{
    color:#fff;
    font-weight: 500;
    background-color:#7b0202;
    padding: 10px 50px;
}
a:hover{
    color:#fff;
    font-weight: 500;
    background-color:#4d4949;
    padding: 10px 50px;
}
</style>
