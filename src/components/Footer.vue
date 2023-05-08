<script>
export default {}
</script>

<template>

    <div id="Footer">
        <div id="notes">

           <p>By sandyalves98@hotmail.com</p>
           <RouterLink to="/rede" class="btn btn-white btn-animate">Contato</RouterLink> 

        </div>

    </div>

</template>

<style scoped>

div#Footer {
 background-color: #000000;
 min-height: 4vh;
}

div#notes {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

p, a{
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 12px;
    display: inline-block;
    font-family:Arial;
	font-size:12px;
	font-weight:bold;
}
a.btn:link {
    text-transform: uppercase;
    text-decoration: none;
    padding: 6px 12px;
    display: inline-block;
    border-radius: 50px;
    transition: all .3s;
    font-family:Arial;
	font-size:12px;
	font-weight:bold;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 4px #ffffff;
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgb(255, 255, 255);
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
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn-white::after {
    background-color: #033691
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

</style>