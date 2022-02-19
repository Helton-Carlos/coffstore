<template>
  <div>
    <Header />
    <Formulario />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Formulario from "@/components/Formulario.vue";

export default {
  name: "Contatos",
  components: { Header, Footer, Formulario },
};
</script>
