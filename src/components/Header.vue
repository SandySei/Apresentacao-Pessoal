<script>
    export default {};
</script>

<template>
  <header>
    <img src="/arquivos/San1.png" alt="Logo San" width="50" style="margin:7px 0px 3px 0px;" />

    <nav>
      <RouterLink to="/" class="btn btn-white btn-animate"
        >Página Inicial</RouterLink
      >
      <RouterLink to="/familia" class="btn btn-white btn-animate"
        >Família</RouterLink
      >
      <RouterLink to="/sugestoes" class="btn btn-white btn-animate"
        >Sugestões</RouterLink
      >
      <a
        href="https://sandyalves98.wixsite.com/sandy-seixas"
        class="btn btn-white btn-animate"
        target="_blank"
        >Portfólio</a
      >
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #000000;
  position: fixed;
  z-index: 1;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  box-shadow: 0px 3px 0px 0px #033691;
}

nav {
  display: flex;
  justify-content: space-around;
  width: 34%;
}

a.btn:link {
  text-transform: uppercase;
  text-decoration: none;
  padding: 6px 12px;
  display: inline-block;
  border-radius: 3px;
  transition: all 0.3s;
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0px 2px 4px #ffffff;
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0px 5px 10px rgb(255, 255, 255);
}

.btn-white {
  background-color: #000000;
  color: #ffffff;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn-white::after {
  background-color: #033691;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@media (max-width: 766px) {
    header {
        padding: 0px 10px;
    }
    nav {
        width: 80%;
    }
}
</style>