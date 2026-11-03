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
        <h3>Sobre mim</h3>
        <br />

        <h4>E-mail:</h4>
        <p>sandyalves98@hotmail.com</p>
        <br />

        <h4>Redes:</h4>
        <div class="redes">
          <a href="https://github.com/SandySei" class="btn btn-white" target="_blank">
            GitHub
            <img src="/arquivos/Git.png" alt="Logo GitHub" width="30" />
          </a>

          <a href="https://www.linkedin.com/in/sandyseixas" class="btn btn-white" target="_blank">
            LinkedIn
            <img src="/arquivos/Linkedin.png" alt="Logo LinkedIn" width="30" />
          </a>

          <a href="https://www.instagram.com/sany.sei/" class="btn btn-white" target="_blank">
            Instagram
            <img src="/arquivos/instagram.png" alt="Logo Instagram" width="30" />
          </a>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url(/arquivos/fundoconcreto.jpg);
  background-size: cover;
  background-attachment: fixed;
  padding: 0 20px 40px;
}

div#top {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(20px, 4vw, 50px) 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: clamp(20px, 3vw, 40px);
}

div#top div {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
}

div#top img {
  width: clamp(220px, 28vw, 340px);
  height: auto;
}

h1 {
  color: black;
  text-transform: uppercase;
  font-family: Arial;
  font-size: clamp(38px, 6.5vw, 90px);
  font-weight: bold;
}

h2 {
  color: black;
  font-family: Arial;
  font-size: clamp(18px, 2vw, 25px);
}

div#box {
  background-color: #001e5283;
  display: flex;
  flex-direction: row;
  max-width: 760px;
  margin: 0 auto;
  padding: clamp(25px, 4vw, 45px) 0;
  text-align: center;
  border: 3px solid #c4c4c486;
  filter: saturate(0%);
  border-radius: 10px;
}

div#box:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}

div#box > div {
  width: 100%;
  padding: 0 clamp(20px, 4vw, 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: Arial;
  font-size: clamp(26px, 3.2vw, 40px);
  font-weight: bold;
}

h4 {
  color: rgb(255, 255, 255);
  font-family: Arial;
  font-size: clamp(16px, 1.6vw, 20px);
  font-weight: bold;
}

p {
  color: rgb(0, 0, 0);
  font-family: Arial;
  font-size: clamp(16px, 1.6vw, 20px);
  font-weight: bold;
  word-break: break-word;
}

div.redes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
}

/* Celular */
@media (max-width: 768px) {
  div#top {
    flex-direction: column-reverse;
  }

  div#top div {
    align-items: center;
  }

  h1 {
    text-align: center;
  }

  div#box {
    flex-direction: column;
    filter: saturate(100%);
  }

  div#box > div {
    width: auto;
  }
}
</style>
