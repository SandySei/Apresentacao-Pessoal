<template>
<body>
 
    <div id="familia">
        <h2>Família</h2>
        <img src="/arquivos/Familia.jpeg" alt="Familia" height="500">
    </div>

<br>
<br>
<hr>

    <h2>Pets</h2>
    <div id="pets">
        <div>
            <img src="/arquivos/Hannah.jpeg" alt="Essa é a Hannah" height="450">
            <h4>Hannah</h4>
        </div>
        <div>
            <img src="/arquivos/Nina.jpeg" alt="Essa é a Nina" height="450">  
            <h4>Nina</h4>     
        </div>
        <div>
            <img src="/arquivos/Ursa.jpeg" alt="Essa é a Ursa" height="450">
            <h4>Ursa</h4>
        </div>
    </div>


</body>
</template>

<style scoped>

body {
    background-image: url(/arquivos/fundoconcreto.jpg);
    background-size: cover;
    min-height: 140vh;
    background-attachment: fixed;
}

div#familia > img {
    margin-left: 25vw;
}


h2 {
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:Arial;
    font-size:50px;
    text-transform: uppercase;
    font-weight:bold;
    text-align: center;
    line-height: 2.5;
}

h3 {
    color: #000000;
    font-family:Arial;
    font-size:25px;
    text-transform: uppercase;
    font-weight:bold;
    text-align: center;
    line-height: 2;
}

h4 {
    color: #000000;
    font-family:Arial;
    font-size:25px;
    text-align: center;
    line-height: 1;
}

img {
    border-radius: 230px;
    border: 4px solid #bdbdbd;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

}

div#pets div{
    width: 260px;
	display: inline-block;
    margin-left: 14vw;
}


p {
    text-align: justify;
    margin-left: 2vw;
    font-family:Arial;
    font-size:16px;
}

a {
    color: #004fd6;
    font-family:Arial;
    font-size:15px;
}

</style>