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

.fade-enter-active{
  opacity: 0;
  transition: 0,3s;
}
.fade-leave-active {
  opacity: 1;
  transition: 0,3s;
}

.fade-enter{
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}


.back-to-top img {
    height: 100%;
}
.back-to-top {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 45px;
  right: 10px; 
  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;
  padding: 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
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
