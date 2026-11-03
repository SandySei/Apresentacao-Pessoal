<template>
  <body>
    <h2>Pets</h2>
    <div id="pets">
      <div>
        <img src="/arquivos/Hannah.jpeg" alt="Essa é a Hannah" height="450" />
        <h4>Hannah</h4>
      </div>
      <div>
        <img src="/arquivos/Tobby.jpeg" alt="Esse é o Tobby" height="450" class="tobby" />
        <h4>Tobby</h4>
      </div>
      <div>
        <img src="/arquivos/Ursa.jpeg" alt="Essa é a Ursa" height="450" />
        <h4>Ursa</h4>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url(/arquivos/fundoconcreto.jpg);
  background-size: cover;
  background-attachment: fixed;
  padding: 0 20px 50px;
  min-height: calc(100vh - 70px);
}

h2 {
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;
  font-size: clamp(32px, 4vw, 50px);
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  line-height: 2.2;
}

h4 {
  color: #000000;
  font-family: Arial;
  font-size: clamp(18px, 2vw, 25px);
  text-align: center;
  line-height: 1;
  margin: 15px 0 30px;
}

img {
  border-radius: 230px;
  border: 4px solid #bdbdbd;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

div#pets {
  max-width: 1200px;
  margin: 0 auto;
}

div#pets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

div#pets div {
  width: clamp(200px, 25vw, 300px);
}

div#pets img {
  width: 100%;
  height: auto;
  aspect-ratio: 260 / 450;
  object-fit: cover;
}

div#pets img.tobby {
  object-position: left center;
}

/* Celular */
@media (max-width: 768px) {
  div#pets div {
    width: 70vw;
    max-width: 260px;
  }
}
</style>
