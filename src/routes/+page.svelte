<script>
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
</script>

<div class="flex">
	<Link path="game" textUnderline="Le jeu" text="(inviduel)" />
	<Link path="gamePresentation" textUnderline="Le jeu" text="(présentation)" />
	<Link path="gameRessources" textUnderline="Les ressources" text="du jeu" />
	<Link path="legalNotice" textUnderline="Mentions" text="légales" />
	<Link path="about" textUnderline="A" text="propos" />
	<Link path="ressources" textUnderline="Je m'informe " text="sur l'alcool" />
</div>

<style>
	.flex {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex: 1
	}
</style>
