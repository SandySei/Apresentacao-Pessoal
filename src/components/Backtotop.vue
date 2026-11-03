<script>
export default {
  data() {
    return {
      showScrollButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showScrollButton = window.scrollY > 500
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
        <button class="back-to-top" v-show="showScrollButton" @click="scrollToTop" aria-label="Voltar ao topo">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </transition>
    </div>
  </template>

  <style>

/* Animação de entrada e saída: aparece subindo e some descendo */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.back-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 45px;
  right: 20px;
  z-index: 2;
  width: 50px;
  height: 50px;

  background-color: #000000;
  color: #ffffff;
  border: 2px solid #033691;
  border-radius: 50%;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 0.3s ease, box-shadow 0.3s ease;
}

.back-to-top:hover {
  background-color: #033691;
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(3, 54, 145, 0.6);
}

.back-to-top:hover svg {
  animation: subir 0.8s ease-in-out infinite;
}

.back-to-top:active {
  transform: translateY(-1px);
}

.back-to-top:focus-visible {
  outline: 2px solid #033691;
  outline-offset: 3px;
}

@keyframes subir {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@media (max-width: 768px) {
  .back-to-top {
    width: 44px;
    height: 44px;
    bottom: 20px;
    right: 15px;
  }
}

</style>
