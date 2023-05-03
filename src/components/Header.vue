
<script>
export default {}
</script>

<template>

    <nav>
    <img src="/arquivos/San1.png" alt="Logo San" width="70">
    <RouterLink to="/sandy" class="btn btn-white btn-animate">Página Apresentação</RouterLink>  
    <a href=" " class="btn btn-white btn-animate">Primeira Página</a> 
    <RouterLink to="/contato" class="btn btn-white btn-animate">Contato</RouterLink> 
    <a href=" " class="btn btn-white btn-animate">click me</a>
   </nav>

</template>

<style scoped>

nav {
    background-color: blue;
    position: fixed;
    z-index: 2;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    padding: 2vw; 
    align-items: center;
    height: 8vh;
    box-shadow: 0px 3px 0px 0px #ffffff;
   }
   
header nav {
     display: flex;
     justify-content: space-between;
     min-width: 50%;
   }
a.btn:link {
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 25px;
    display: inline-block;
    border-radius: 50px;
    transition: all .3s;
    font-family:Arial;
	  font-size:15px;
	  font-weight:bold;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
    background-color: #fff;
    color: #777;
}

.btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn-white::after {
    background-color: rgb(29, 9, 18)}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

</style>