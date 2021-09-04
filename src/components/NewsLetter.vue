<template>
  <div class="background-red flex-coluna center">
    <h2>QUER RECEBER AS NOSSAS NOVIDADES ?</h2>
    <div class="flex center">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="ENVIE SEU E-MAIL"
      />
      <button class="btn-margem">Enviar</button>
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
.center {
  text-align: center;
  margin: 50px auto;
}
.background-red {
  background-color: #7b0202;
  width: 100%;
  height: 35vh;
  color: #fff;
}
h2 {
  font-size: 18px;
  font-family: "Kaisei HarunoUmi", serif;
  padding-top: 40px;
}
input {
  width: 600px;
  padding: 10px;
  outline: 0;
  border: none;
  font-size: 15px;
  font-weight: 500;
  margin-right: 10px;
}
.btn-margem {
  border: 2px solid #fff;
  background-color: #7b0202;
  color: #fff;
  font-weight: 700;
  padding: 10px 50px;
}
.btn-margem:hover {
  color: #7b0202;
  border: 1px solid #7b0202;
  background-color: #fff;
  transition: 1s;
}
</style>
