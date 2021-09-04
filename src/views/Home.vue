<template>
  <div>
      <Header />
      <Main />
      <Produto />
      <Propaganda />
      <NewsLetter />
  </div>
</template>

<script>  
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import Produto from "@/components/Produto.vue"
import Propaganda from '@/components/Propaganda.vue'
import NewsLetter from '@/components/NewsLetter.vue'

export default {
  name: 'Home',
  components:{Header,Main,Produto,Propaganda, NewsLetter}
 
}
</script>
q