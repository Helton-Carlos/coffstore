<template>
    <div>
        <a href="#" @click.prevent="$emit('AcaoBtn')">
          CONHEÇA <span><img src="../assets/imagens/seta-btn.png" alt="seta-btn"></span>
        </a>
    </div>
</template>

<script>
export default {
    emits:['AcaoBtn'],
    setup () {
        return {}
    }
}
</script>

<style scoped>
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