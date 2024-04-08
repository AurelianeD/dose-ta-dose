<script>
	import { goto } from '$app/navigation';
	import '$lib/styles/styles.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import QuizButton from '$lib/components/QuizButton.svelte';
</script>

<Header />

<h1>Welcome to Dose ta dose</h1>
<div class="flex">
<QuizButton letter="a" answer="Boire beaucoup et de manière régulière 1" />
<QuizButton letter="b" answer="Réponse 2" />
<QuizButton letter="c" answer="Boire beaucoup et de manière régulière" />
</div>
<button on:click={() => goto('game')}>Le jeu (inviduel)</button>
<button on:click={() => goto('gameRessources')}>Les ressources du jeu</button>
<button on:click={() => goto('gamePresentation')}>Le jeu (présentation)</button>
<button on:click={() => goto('legalNotice')}>Mentions légales</button>
<button on:click={() => goto('about')}>A propos</button>
<button on:click={() => goto('ressources')}>Ressources</button>

<Footer/>
<style>
  .flex{
    display: flex;
    padding: 0 5vw;
    gap: 24px;
  }
  @media screen and (max-width: 1000px) {
    .flex{
      flex-direction: column;
    }
  }
</style>
