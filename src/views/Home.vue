<template>
  <div>
    <Header />
    <Main />
    <Produto />
    <Propaganda />
    <NewsLetter />
    <Dicas />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Produto from "@/components/Produto.vue";
import Propaganda from "@/components/Propaganda.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import Dicas from "@/components/Dicas.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Main, Produto, Propaganda, NewsLetter, Dicas, Footer },
};
</script>
q
