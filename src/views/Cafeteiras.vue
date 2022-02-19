<template>
  <div>
    <Header />
    <ProdutosGerais />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProdutosGerais from "@/components/ProdutosGerais.vue";

export default {
  name: "Cafeteiras",
  components: { Header, Footer,ProdutosGerais },
};
</script>
