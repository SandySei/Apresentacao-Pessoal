<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Backtotop from './components/Backtotop.vue';

</script>

<template>
  
  <div class="wrapper">
      
    <Header/>

    <main>
      <RouterView />
      <Backtotop />
    </main>


  
    <Footer/>

  </div>

</template>

<style scoped>

/* Rodapé sempre no fim da tela, mesmo em páginas curtas */
div.wrapper {
 min-height: 100vh;
 display: flex;
 flex-direction: column;
}

main {
 flex: 1;
 display: flex;
 flex-direction: column;
 padding-top: 70px;
 background-color: rgb(255, 255, 255);
}

main > :deep(body) {
 flex: 1;
}

@media (max-width: 768px) {
  main {
    padding-top: 60px;
  }
}

</style>
