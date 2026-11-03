
<script>
export default {
    data() {
        return {
            menuAberto: false
        }
    },
    methods: {
        alternarMenu() {
            this.menuAberto = !this.menuAberto
        },
        fecharMenu() {
            this.menuAberto = false
        }
    }
}
</script>

<template>
    <header>
        <div class="conteudo">
            <img src="/arquivos/San1.png" alt="Logo San" width="50">

            <button class="menu-toggle" :class="{ aberto: menuAberto }" @click="alternarMenu" aria-label="Abrir menu" :aria-expanded="menuAberto">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav :class="{ aberto: menuAberto }">
                <RouterLink to="/" class="btn btn-white" @click="fecharMenu">Início</RouterLink>
                <RouterLink to="/pets" class="btn btn-white" @click="fecharMenu">Pets</RouterLink>
                <RouterLink to="/sugestoes" class="btn btn-white" @click="fecharMenu">Recomendações</RouterLink>
                <a href="https://sandyalves98.wixsite.com/sandy-seixas" class="btn btn-white" target="_blank" @click="fecharMenu">Portfólio</a>
            </nav>
        </div>
    </header>

</template>

<style scoped>

header {
    background-color: #000000;
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 70px;
    box-shadow: 0px 3px 0px 0px #033691;
   }

div.conteudo {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   }

nav {
    display: flex;
    justify-content: space-between;
    width: 60%;
   }

header img {
    transition: transform .4s ease;
}

header img:hover {
    transform: rotate(-10deg) scale(1.08);
}

.menu-toggle {
    display: none;
}

/* Tablet */
@media (max-width: 1024px) {
    nav {
        width: 60%;
    }
}

/* Celular */
@media (max-width: 768px) {
    header {
        height: 60px;
    }

    .menu-toggle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 22px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .menu-toggle span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: #ffffff;
        border-radius: 3px;
        transition: transform .3s ease, opacity .3s ease;
    }

    /* Hambúrguer vira "X" quando aberto */
    .menu-toggle.aberto span:nth-child(1) {
        transform: translateY(9.5px) rotate(45deg);
    }

    .menu-toggle.aberto span:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.aberto span:nth-child(3) {
        transform: translateY(-9.5px) rotate(-45deg);
    }

    nav {
        display: flex;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-15px);
        transition: opacity .3s ease, transform .3s ease, visibility .3s;
        position: absolute;
        top: 63px;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
        background-color: #000000;
        padding: 10px 0 20px;
        box-shadow: 0px 3px 0px 0px #033691;
    }

    nav.aberto {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    nav a.btn {
        margin: 8px 0;
        font-size: 14px;
    }
}

</style>