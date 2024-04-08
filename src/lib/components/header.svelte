<style>
    .flex-header{
        background-color: var(--white);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5vw;
    }

    hr{
        width: 90%;
        border: 1px solid var(--black);
    }

    .btn-nav{
        display: flex;
        gap: 24px;
    }

    .nav-style{
        background: none;
        border: none;
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

</style>

<script>
    import { goto } from "$app/navigation";
    import '$lib/styles/styles.css'
</script>

<header>
    <div class="flex-header">
        <img src="/static/images/logo.svg" alt="logo dose ta dose">
    
        <div class="btn-nav">
            <button class="nav-style underline" on:click={() => goto('about')}>à propos</button>
            <button class="nav-style underline" on:click={() => goto('gamePresentation')}>Le jeu</button>
            <button class="nav-style encadre" on:click={() => goto('gameRessources')}>ressources</button>
        </div>
    </div>
    <hr>
</header>