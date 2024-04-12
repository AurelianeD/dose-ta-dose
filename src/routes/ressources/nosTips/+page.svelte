<script>
	import Link from '$lib/components/Link.svelte';
	import '$lib/styles/styles.css';
</script>

<div class="nav-ressource">
	<div class="nav-left">
    <Link linkType="left" path="pressionSociale" textUnderline="Pression sociale" text="et alcool" />
	</div>
	<div class="nav-right">
		<Link path="aide" textUnderline="" text="Aide" />
	</div>
</div>

<section class="top-home-page">
	<div class="left-part">
		<h1>Nos petits <span class="yellow-bg">tips</span></h1>
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
  <h3 class="only-mobile">N’hésite pas à découvrir nos autres thématiques !</h3>
	<div class="flex-link only-mobile">
		<Link path="pressionSociale" textUnderline="Les effets de l’alcool" text="sur la santé" />
		<Link path="pressionSociale" textUnderline="Pression sociale" text="et alcool" />
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
	.img-home {
		width: 30vw;
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
    position: relative;
    display: inline-block;
}

.yellow-bg::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--yellow);
		animation: highlight 0.5s;
}

@keyframes highlight {
    0% { width: 0;}
    100% { width: 100%; }
}

	@media screen and (min-width: 0px) and (max-width: 800px) {

    .only-mobile{
      display: block;
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
			margin-top: 48px;
			width: 90vw;
      max-width: 500px;
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
