<script>
	import '$lib/styles/styles.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<Header />

<h1>Welcome to Dose ta dose</h1>
<div class="flex">
	<Link path="game" textUnderline="Le jeu" text="(inviduel)" />
	<Link path="gamePresentation" textUnderline="Le jeu" text="(présentation)" />
	<Link path="gameRessources" textUnderline="Les ressources" text="du jeu" />
	<Link path="legalNotice" textUnderline="Mentions" text="légales" />
	<Link path="about" textUnderline="A" text="propos" />
	<Link path="ressources" textUnderline="Je m'informe " text="sur l'alcool" />
</div>

<Footer />

<style>
	.flex {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>
