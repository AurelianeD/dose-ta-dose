<script>
    import {goto} from "$app/navigation";
</script>

<h1>Welcome to Drop ta dose</h1>
<button on:click={() => goto('game')}>Le jeu (inviduel)</button>
<button on:click={() => goto('gameRessources')}>Les ressources du jeu</button>
<button on:click={() => goto('gamePresentation')}>Le jeu (présentation)</button>
<button on:click={() => goto('legalNotice')}>Mentions légales</button>
<button on:click={() => goto('about')}>A propos</button>
<button on:click={() => goto('ressources')}>Ressources</button>
