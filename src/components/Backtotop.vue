<script>
export default {
  methods: {
    backtotop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

</script>
<template>
  <div class='back-to-top'>
    <button @click="backtotop()">
    <img src="./icons/691751-200.png" alt="">
    </button>
  </div>
</template>

<style scoped>
template {
  justify-content: center;
}

.back-to-top img {
    height: 100%;
}
.back-to-top {
    display: flex;
    position: absolute;
    bottom: 0px;
    width: 99vw;
    height: 50px;
    justify-content: flex-end;
    transition: 1s;
}

.back-to-top:hover {
    opacity: 0.3;
}

.back-to-top button {
  cursor: pointer;
  border-radius: 50%;
  border-color: transparent;
}
</style>
