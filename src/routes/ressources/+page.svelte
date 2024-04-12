<script>
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
</script>

<div class="content">
	<h1><span class="yellow-bg">Ressources</span></h1>
	<div class="imprimables">
		<h2>Ressources imprimables</h2>
		<Link path="ressources/imprimable" textUnderline="Accès aux" text="documents" />
	</div>
	<div class="ressources">
		<div class="sujet">
			<img src="/images/illu-ressources-1.svg" alt="" />
			<div class="contenu">
				<h2>Les effets de l’alcool sur la santé</h2>
				<p>Comment l'alcool affecte ton corps ?</p>
				<Link path="ressources/effetAlcool" textUnderline="S'" text="informer" />
			</div>
		</div>
		<div class="sujet">
			<img src="/images/illu-ressources-2.svg" alt="" />
			<div class="contenu">
				<h2>Pression sociale et alcool</h2>
				<p>Suis-je moi aussi confronté(e) à la pression sociale ?</p>
				<Link path="ressources/pressionSociale" textUnderline="S'" text="informer" />
			</div>
		</div>
		<div class="sujet">
			<img src="/images/illu-ressources-3.svg" alt="" />
			<div class="contenu">
				<h2>Nos petits tips</h2>
				<p>Tu t’inquiètes pour ton ami(e) ?</p>
				<Link path="ressources/nosTips" textUnderline="S'" text="informer" />
			</div>
		</div>
		<div class="sujet">
			<img src="/images/illu-ressources-4.svg" alt="" />
			<div class="contenu">
				<h2>Aide</h2>
				<p>Comment dois-je m’y prendre pour aller mieux ?</p>
				<Link path="ressources/aide" textUnderline="S'" text="informer" />
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		max-width: 80vw;
		margin: auto;
		margin-top: 80px;
	}
	h1 .yellow-bg {
		position: relative !important;
	}

	h1 .yellow-bg::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--yellow);
		animation: highlight 0.5s;
	}
	@keyframes highlight {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}
	.ressources {
		display: flex;
		flex-wrap: wrap;
		margin-top: 64px;
		gap: 50px;
	}

	.sujet {
		display: flex;
		gap: 30px;
		align-items: center;
		width: 500px;
	}

	.sujet img {
		width: clamp(100px, 20vw, 200px);
		height: auto;
	}

	.contenu {
		display: flex;
		flex-direction: column;
	}

	p {
		margin: 8px 0 24px 0;
		font-weight: 200;
		font-style: italic;
		font-size: 16px;
	}
	.imprimables {
		display: flex;
		align-items: end;
		gap: 16px;
		margin-top: 64px;
	}
	@media screen and (min-width: 0px) and (max-width: 800px) {
		.content {
			width: 80vw;
			margin-top: 60px;
      text-align: center;
      align-items: center;
      justify-content: center;
		}
		.ressources {
			justify-content: center;
			align-items: center;
			margin-top: 64px;
			gap: 50px;
		}

		.sujet {
			flex-direction: column;
			justify-content: center;
		}

		.sujet img {
			width: clamp(200px, 20vw, 300px);
		}
    .imprimables {
		flex-direction: column;
    align-items: start;
    margin-top: 24px;
	}
	}
</style>
