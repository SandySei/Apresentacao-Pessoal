<script>
export default {
  data() {
    return {
      showScrollButton: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset >  500) {
        this.showScrollButton = true
      } else {
        this.showScrollButton = false
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
    <div>
      <transition name="fade">
        <button class="back-to-top" v-show="showScrollButton" @click="scrollToTop">
        <img src="./icons/691751-200.png" alt="">
        </button>
      </transition>
    </div>
  </template>

  <style>

.fade {
  animation-name: fadeIn, fadeOut;
  animation-duration: 5s, 0.3s;
}




.back-to-top img {
    height: 100%;
}
.back-to-top {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 50px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  width: 50px;
  height: 50px;
  transition: 1s;
  border: none;
  border-radius: 50%;
  padding: 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
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
