<template>
  <div>
      <Header />
      <Main />
      <Produto />
  </div>
</template>

<script>  
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import Produto from "@/components/Produto.vue"
export default {
  name: 'Home',
  components:{Header,Main,Produto}
 
}
</script>
q