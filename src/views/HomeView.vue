<template>
  <body>
    <div id="top">
      <div>
        <h1>Sandy Seixas</h1>
        <h2>@1998</h2>
      </div>
      <img src="/arquivos/Sandy.png" alt="Essa Sou Eu" width="450" />
    </div>

    <div id="box">
      <div>
        <h3>Dados:</h3>
        <br />

        <h4>Nome:</h4>
        <p>Sandy Alves Seixas</p>
        <br />

        <h4>Data de Nascimento:</h4>
        <p>17 de Dezembro de 1998</p>
        <br />

        <h4>Signo:</h4>
        <p>Sagitário</p>
        <br />

        <h4>Telefone:</h4>
        <p>+55 (41) 9 9757-6128</p>
        <br />
      </div>

      <div>
        <h4>E-mail:</h4>
        <p>sandyalves98@hotmail.com</p>
        <br />

        <br />
        <h4>Endereço:</h4>
        <p>Avenida Marechal Floriano Peixoto</p>
        <p>Curitiba -PR</p>
        <br /><br />

        <h4>Cursos:</h4>
        <p>Analise e Desenvolvimento de Sistemas (PUCPR)</p>
        <br />
        <p>Marketing Digital Full Stack (Centro Europeu)</p>
        <br />
        <p>Veu.Js (Snow Man Labs)</p>
        <br /><br />
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url(/arquivos/fundoconcreto.jpg);
  background-size: cover;
  background-attachment: fixed;
}

div#top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

div#top div {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
}

h1 {
  color: black;
  text-transform: uppercase;
  font-family: Arial;
  font-size: 100px;
  font-weight: bold;
}

h2 {
  color: black;
  font-family: Arial;
  font-size: 25px;
}

div#box {
  background-color: #001e5283;
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 70vh;
  margin-left: 14vw;
  margin-bottom: 30px;
  padding-top: 8vh;
  border: 3px solid #c4c4c486;
  filter: saturate(0%);
  border-radius: 10px;
}

div#box:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}

div#box > div {
  width: 50%;
  margin-left: 7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  color: rgb(255, 255, 255);
  margin-bottom: 1vh;
  text-transform: uppercase;
  font-family: Arial;
  font-size: 45px;
  font-weight: bold;
}

h4 {
  color: rgb(255, 255, 255);
  font-family: Arial;
  font-size: 23px;
  font-weight: bold;
}

p {
  color: rgb(0, 0, 0);
  font-family: Arial;
  font-size: 23px;
  font-weight: bold;
}
</style>
