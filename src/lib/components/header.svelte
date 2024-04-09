<style>
    .flex-header{
        background-color: var(--white);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 5vw;
    }

    .ligne{
        width: 90%;
        border: 1px solid var(--black);
        margin: 0 auto 0 auto;
    }

    .btn-nav{
        display: flex;
        gap: 24px;
    }

    .nav-style{
        background: none;
        border: none;
        line-height: 100%;
        font-family: 'DM-Sans', sans-serif;
        font-weight: 600;
        color: var(--black);
        font-size: 16px;
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
    }

    .underline::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        height: 3px;
        transition: background-color 0.3s ease;
    }

    .underline:hover::after {
        background-color: var(--yellow);
    }

    .encadre{
        background-color: var(--yellow);
        padding: 8px 16px;
        border-radius: 8px;
    }

    .encadre:hover{
        background-color: #FFE279;
        cursor: pointer;
    }

    .encadre:active{
        background-color: #F3C10F;
    }

    .mobile{
        display: none;
    }

    .mobile-nav{
        display: none;
    }

    @media screen and (max-width: 1000px){

        .mobile{
            display: flex;
            align-items: center;
            gap: 6px;
            background: none;
            border: none;
            font-family: 'DM-Sans', sans-serif;
            font-weight: 600;
            color: var(--black);
            font-size: 16px;
            text-transform: uppercase;
        }

        .desktop-nav{
            display: none;
        }

        .mobile-nav{
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            position: fixed;
            top: 70px;
            width: 100%;
            background-color: var(--white);
            opacity: 0.95;
            z-index: 1000;
        }

        hr{
            width: 60%;
            border: 1px solid var(--black);
        }

    }

</style>

<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let isMenuOpen = false;
    let arrowSvg = "/static/images/fleche-bas.svg";

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
        arrowSvg = isMenuOpen ? "/static/images/fleche-haut.svg" : "/static/images/fleche-bas.svg";
    }

    function handleResize() {
        if (window.innerWidth > 1000) {
            isMenuOpen = false;
        }
    }

    onMount(() => {
        // Vérifier si window est défini (pas disponible côté serveur)
        if (typeof window !== "undefined") {
            window.addEventListener('resize', handleResize);
        }
    });
</script>

<header>
    <div class="flex-header">
        <button class="nav-style" on:click={() => goto('/')}>
            <img src="/static/images/logo.svg" alt="logo dose ta dose">
        </button>

        <button class="mobile" on:click={toggleMenu}>
            <span class="nav-style">menu</span>
            <img src={arrowSvg} alt="">
        </button>
        <div class="btn-nav desktop-nav">
            <button class="nav-style underline" on:click={() => goto('about')}>à propos</button>
            <button class="nav-style underline" on:click={() => goto('guideAtelier')}>organiser un atelier</button>
            <button class="nav-style underline" on:click={() => goto('gamePresentation')}>Le jeu</button>
            <button class="nav-style encadre" on:click={() => goto('ressources')}>ressources</button>
        </div>
    </div>
    <hr class="ligne">
    <nav class:open={isMenuOpen}>
        <div class="btn-nav mobile-nav" style="display: {isMenuOpen ? 'flex' : 'none'};">
            <button class="nav-style" on:click={() => goto('about')}>à propos</button>
            <hr>
            <button class="nav-style" on:click={() => goto('guideAtelier')}>organiser un atelier</button>
            <hr>
            <button class="nav-style" on:click={() => goto('gamePresentation')}>Le jeu</button>
            <hr>
            <button class="nav-style" on:click={() => goto('ressources')}>ressources</button>
            <hr>
        </div>
    </nav>
</header>
