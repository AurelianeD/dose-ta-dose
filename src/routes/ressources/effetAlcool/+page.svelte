<script>
	import Link from '$lib/components/Link.svelte';
	import '$lib/styles/styles.css';
</script>

<div class="nav-ressource">
	<div class="nav-left">
    <Link linkType="left" path="imprimable" textUnderline="Ressources" text="imprimables" />
	</div>
	<div class="nav-right">
		<Link path="pressionSociale" textUnderline="Pression sociale" text="et alcool" />
	</div>
</div>

<section class="top-home-page">
	<div class="left-part">
		<h1>Les effets de l’alcool sur la <span class="yellow-bg">santé</span></h1>
		<p class="subtitle">
			Boire trop d'alcool, c'est comme jouer avec sa santé&nbsp;: ça peut vraiment mal tourner..
		</p>
	</div>
	<img class="img-home" src="/images/illu-ressources-1.svg" alt="" />
</section>

<section class="contenu">
	<p>
		En effet, la consommation excessive d'alcool peut avoir des répercussions graves sur la santé.<br
		/>
		Perturbations du cerveau, altération de l'humeur, du comportement, de la clarté de pensée.
	</p>
	<h2>Mais voyons cela plus en détail :</h2>
	<h3>Ton cerveau</h3>
	<p>
		L'alcool, ça empêche ton cerveau de bien fonctionner, tu peux te sentir tout drôle, avoir du mal
		à te concentrer ou à te souvenir des choses, et même voir ton humeur faire des montagnes russes
		sans raison.
	</p>
	<h3>Ton cœur</h3>
	<p>
		Ton cœur, c'est un peu le chef d'orchestre de ton corps. Avec trop d'alcool, il peut commencer à
		battre de manière irrégulière, de manière trop fort ou trop faible. Cela peut même aller jusqu'à
		causer des problèmes graves comme des accidents vasculaires cérébraux (quand un vaisseau sanguin
		dans le cerveau se bloque ou éclate) ou de l'hypertension (quand la pression de ton sang contre
		les parois de tes artères est trop forte).
	</p>
	<h3>Des risques de cancers</h3>
	<p>
		Savais-tu que boire trop d'alcool peut aussi augmenter le risque d'avoir certains cancers ? <br
		/>
		Oui, même ceux qu'on n'imagine pas, comme ceux de la bouche, de la gorge, du foie, du sein, et d'autres
		parties du corps.
	</p>
	<h3>Un système immunitaire fragilisé</h3>
	<p>
		L'alcool peut affaiblir ton armure contre les maladies, ce qui peut rendre ton corps plus
		vulnérable face à des ennemis comme la pneumonie ou la tuberculose, qui sont des maladies
		extrêmement dangereuses pour ton corps.
	</p>
  <h3 class="only-mobile">N’hésite pas à découvrir nos autres thématiques !</h3>
	<div class="flex-link only-mobile">
    <Link path="pressionSociale" textUnderline="Pression sociale" text="et alcool" />
    <Link path="nosConseil" textUnderline="Nos petits" text="tips" />
    <Link path="aide" textUnderline="Avoir de" text="l'aide" />
    <Link path="imprimable" textUnderline="Les ressources" text="imprimables" />
  </div>
</section>
<style>
  .only-mobile{
    display: none;
  }
	.nav-ressource {
		background-color: #fff;
		width: 90vw;
		position: fixed;
		padding: 30px 5vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.left-part{
		max-width: 40vw;
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
	.img-home {
		width: 30vw;
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

	@media screen and (min-width: 0px) and (max-width: 1000px) {

		.only-mobile{
			display: block;
		}
		.left-part{
			max-width: none;
		}
		.flex-link {
			margin-top: 32px;
			gap: 16px;
			display: flex;
			flex-direction: column;
		}

		h1{
			text-align: center;
		}
		/* Home Page */
		.top-home-page {
			margin-top: 65px;
			padding: 0 5vw;
			flex-direction: column;
		}
		.img-home {
			margin-top: 16px;
			width: 90vw;
			max-width: 250px;
		}

		.nav-ressource {
      		display: none;
		}

		.subtitle {
			width: 90%;
		}

		.contenu {
			margin-left: 5vw;
		}
		.contenu p {
			max-width: 90vw;
		}
	}
</style>
