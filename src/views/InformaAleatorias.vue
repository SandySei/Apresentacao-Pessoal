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

iframe {
    display: flex;
    flex-direction: column;
    height: 65vh;
    margin-left: auto;
    margin-right: auto; 
}

div#familia > img {
    margin-left: 25vw;
}


h2 {
    color: #000000;
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
    display: block;
    text-align: center;

}

div#pets div{
    width: 260px;
	display: inline-block;
    margin-left: 14vw;
}

div#livro1 {
    background-color: #70707083;
    width: 70vw;
    height: 52vh;
    margin-left: 14vw;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    border: 3px solid #c4c4c486;
  
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


div#livro2 {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5vw;
    margin-right: 5vw; 
}

div#Poemas1 {
    background-color: #70707083;
    width: 70vw;
    height: 70vh;
    margin-left: 14vw;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    border: 3px solid #c4c4c486;
}

div#Poemas2 > p  {
    margin-left: 15vw;
    margin-right: 15vw; 
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
}

</style>