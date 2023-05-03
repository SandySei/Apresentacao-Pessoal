<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  
    <div class="wrapper">
      
  <Header/>

  <main>
   <RouterView />
  </main>
 
 <footer>
  Rodapé
 </footer>

</div>

</template>

<style scoped>



main {
 padding-top: 8vh;
 background-color: aqua;
 min-height: 120vh;

}

footer {
 background-color: blueviolet;
}


</style>
