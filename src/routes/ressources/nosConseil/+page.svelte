<script>
	import Link from '$lib/components/Link.svelte';
	import '$lib/styles/styles.css';
</script>

<div class="nav-ressource">
	<div class="nav-left">
		<Link path="" textUnderline="Nos" text="thématiques" />
	</div>
	<div class="nav-right">
		<Link path="aide" textUnderline="" text="Aide" />
	</div>
</div>

<section class="top-home-page">
	<div class="left-part">
		<h1>Nos<span class="yellow-bg">conseils</span></h1>
		<p class="subtitle">
			Il est important d’apprendre à savoir dire “non” même si sur le moment cela peut sembler difficile.
		</p>
	</div>
	<img class="img-home" src="/images/illu-ressources-3.svg" alt="" />
</section>

<section class="contenu">
	<p>
		Cependant, s’affirmer implique également d'oser exprimer ses opinions et ses préférences, et de prendre ses propres décisions en restant fidèle à soi-même. Dire non est une compétence qui se développe avec le temps, jour après jour. Pour y parvenir, tu peux :
		<br /><br />
		Si tu remarques dans ton entourage un comportement qui t’inquiète, il ne faut surtout pas que tu hésites à lui venir en aide, pour cela tu peux :
	</p>
	<h2>Exprime lui ton soutien : </h2>
	<p>
		Dis-lui que tu t’inquiètes pour sa santé et son bien-être, et que tu es là pour l'aider.
	</p>
	<h3>Dirige le/la vers des professionnels :</h3>
	<p>
		Conseille lui de prendre contact avec des personnes professionnelles qui pourront lui apporter une véritable aide.
	</p>
	<h3>Évite la consommation d’alcool :</h3>
	<p>
		Pendant les soirées ou les sorties, évite de l’inciter à boire, même juste un verre ! Propose lui plutôt d’autres alternatives d’une boisson alcoolisée.
	</p>
	<h3>Fais des activités :</h3>
	<p>
		Tu peux lui proposer de sortir et de faire des activités alternatives qui n'impliquent pas la consommation d'alcool, comme faire du sport, se promener ou d’autres activités ludiques.
		<br><br>
		Cependant, s’affirmer implique également d'oser exprimer ses opinions et ses préférences, et de prendre ses propres décisions en restant fidèle à soi-même. Dire non est une compétence qui se développe avec le temps, jour après jour.
	</p>
</section>

<style>
	.nav-ressource {
		background-color: #fff;
		width: 90vw;
		position: fixed;
		padding: 30px 5vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.subtitle {
		margin-top: 32px;
		margin-bottom: 24px;
		width: 70%;
		font-weight: 600;
		line-height: 130%;
		font-size: 20px;
	}
	.top-home-page {
		margin-top: 158px;
		padding: 0 10vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.top-home-page .left-part {
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
	.contenu {
		margin-left: 20vw;
		margin-top: 50px;
		gap: 40px;
	}
	.contenu h2 {
		margin-top: 48px;
		margin-bottom: 32px;
	}
	.contenu p {
		margin: 48px 0 32px 0;
		max-width: 40vw;
		line-height: 130%;
	}

	.yellow-bg {
		background-color: var(--yellow);
		padding: 0 5px;
	}

	@media screen and (max-width: 1000px) {
		p {
			max-width: 80vw;
		}
	}
</style>
