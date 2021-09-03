<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<style>
* { margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;}
a {text-decoration: none;}
li{list-style: none;}
.flex{display: flex;}
.flex-container{display: flex; justify-content: space-between; width: 80%;margin:0 auto;align-items: center;}
.flex-coluna{display: flex;flex-direction: column;}
.flex-alinhar{display: flex;align-items: center;}
.center{margin: 0 auto;text-align: center;}
.alinhar-esquerda{text-align: left;}
.fonte-branco {color: #fff;}
</style>
