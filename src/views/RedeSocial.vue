<template>
    <div>

        <br><br>
        <h1>Contatos:</h1>
        <br>

            <div id="links">

                <a href="https://github.com/SandySei" class="btn btn-white btn-animate" target="_blank">
                    Git Hub
                    <img src="/arquivos/Git.png" alt="Logo GitHub" width="50">
                </a> 
                
                
                <a href="https://www.linkedin.com/in/sandyseixas" class="btn btn-white btn-animate" target="_blank">
                    LinkedIn        
                    <img src="/arquivos/Linkedin.png" alt="Logo LinkedIn" width="50">
                </a> 
                
            
                <a href="https://wa.me/5541997576128" class="btn btn-white btn-animate" target="_blank">
                    WhatsApp
                    <img src="/arquivos/Whatsapp.png" alt="Logo Whats" width="50">
                </a> 
                
                
                <a href="https://www.instagram.com/sandy.sei/" class="btn btn-white btn-animate" target="_blank">
                    Instagram
                    <img src="/arquivos/instagram.png" alt="Logo Instagram" width="50">
                </a> 
                

                <a href="https://www.facebook.com/sandy.alves.754" class="btn btn-white btn-animate" target="_blank">
                    Facebook
                    <img src="/arquivos/Facebook.png" alt="Logo Instagram" width="50">
                </a> 

            </div>
        
    </div>

</template>

<style scoped>

div {
    background-image: url(/arquivos/fundoconcreto.jpg);
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
}

div#links {
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-around;
    align-items: center;
}

div#links a {
    display: flex;
    width: 50vw;
    max-width: 40rem;
    justify-content: space-around;
    align-items: center;
}

h1 {
    color: #000000;
    font-family:Arial;
    font-size:50px;
    text-transform: uppercase;
    font-weight:bold;
    text-align: center 
}

a.btn:link {
    text-transform: uppercase;
    text-decoration: none;
    padding: 18px 25px;
    display: inline-block;
    border-radius: 50px;
    transition: all .3s;
    font-family:Arial;
	font-size:30px;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 5px #000000;
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 15px 10px rgb(0, 0, 0);
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
    transform: scaleX(1.1) scaleY(1.4);
    opacity: 0;
}

</style>
