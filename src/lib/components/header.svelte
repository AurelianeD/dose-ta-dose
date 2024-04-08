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

    .nav-style{
        background: none;
        border: none;
    }
</style>

<script>
    import { goto } from "$app/navigation";
    import '$lib/styles/styles.css'
</script>

<header>
    <div class="flex-header">
        <img src="/images/logo.svg" alt="logo dose ta dose">

        <div>
            <button class="nav-style" on:click={() => goto('about')}>A propos</button>
            <button class="nav-style" on:click={() => goto('gamePresentation')}>Le jeu</button>
            <button class="nav-style" on:click={() => goto('gameRessources')}>Les ressources du jeu</button>
        </div>
    </div>
    <hr>
</header>
