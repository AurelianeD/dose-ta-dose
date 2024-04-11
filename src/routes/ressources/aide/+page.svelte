<script>
	import Link from '$lib/components/Link.svelte';
	import '$lib/styles/styles.css';
</script>

<div class="nav-ressource">
	<div class="nav-right">
    <Link linkType="left" path="nosTips" textUnderline="Nos petits" text="tips" />
	</div>
	<div class="nav-left">
		<Link path="imprimable" textUnderline="Ressources" text="imprimables" />
	</div>
</div>

<section class="top-home-page">
	<div class="left-part">
		<h1><span class="yellow-bg">Aide</span></h1>
		<p class="subtitle">
			Tu ne sais pas où trouver de l’aide ou tu t’inquiètes pour ton ami(e) ? Ici, tu es au bon endroit !
		</p>
	</div>
	<img class="img-home" src="/images/illu-ressources-4.svg" alt="" />
</section>

<section class="contenu">
	<p>
		Si toi ou quelqu'un que tu connais luttez contre l'alcoolisme, c'est super important de savoir qu'il y a de l'aide à portée de main. Demander de l'aide, n'est pas un signe de faiblesse. Au contraire, ça montre à quel point tu es déterminé à reprendre le contrôle de ta vie.
    <br><br>
    L'alcoolisme est une maladie qui peut avoir des effets dévastateurs sur la vie d'un individu, mais avec un soutien approprié, il est possible de surmonter cette dépendance.
    <br><br>
    Rappelle-toi : il n'y a aucune honte à tendre la main pour obtenir de l'aide. Alors, si tu as besoin d'un coup de main ou si tu veux simplement en parler, tu es au bon endroit car nous sommes là pour t’aider.
    Il existe différents moyens de se faire aider ou bien même d’en parler autour de toi pour cela tu peux :
	</p>
	<h2>Appeler : </h2>
	<p>
		Tout d’abord il existe des numéros à ta disposition pour que tu puisses parler anonymement de tes problèmes.<br>
    Alcool Info Service au 0 980 980 930, de 8 h à 2 h, 7 jours sur 7 , est un appel non surtaxé, au prix d'une communication locale depuis un poste fixe.<br>
    **Fil Santé Jeunes : 0800 235 236 (**tous les jours de 9h à 23h).<br>
    C’est un appel gratuit depuis un poste fixe. Ce service est bien entendu anonyme et gratuit pour les 12-25 ans.<br>
    Tu peux aussi parler anonymement sur des plateformes d’aide, sur lesquelles des personnes spécialisées pourront répondre à tes questions et à tes inquiétudes, comme par exemple sur alcool-info-service.fr
	</p>
	<h3>En parler à son médecin traitant :</h3>
	<p>
		Tu peux tout d’abord commencer par aller voir ton médecin généraliste, c’est un bon point de départ ! Il pourra alors évaluer ton état de santé et t’orienter vers les bonnes personnes ou vers des programmes de traitement adaptés à ta situation.
  </p>
  <h3>Intégrer des groupes d’entraide :</h3>
	<p>
    Tu peux aussi essayer de rejoindre des groupes d’entraide, sur la base de réunions régulières dans lesquels tu peux parler ou écouter les expériences de personnes également concernées. Il en existe plusieurs dans ta ville comme par exemple :
    <br>
      • <a href="http://www.alcooliques-anonymes.fr/" target="_blank">Alcooliques anonymes</a><br>
      • <a href="https://www.vielibre.org/" target="_blank">Mouvement Vie libre</a><br>
      • <a href="https://www.lesamisdelasante.org/" target="_blank">Fédération nationale des amis de la santé</a>
  </p>
  <h3>Se diriger vers des centres de traitement spécialisés : </h3>
  <p>
    Il existe aussi des centres de traitement des dépendances ou des addictions dans ta région qui pourront t’aider dans ta démarche en te prenant en charge. Ces centres offrent souvent des programmes de désintoxication, de réadaptation et de thérapie pour des personnes souffrant de problèmes d'alcoolisme.
  </p>
  <h3 class="only-mobile">N’hésite pas à découvrir nos autres thématiques !</h3>
	<div class="flex-link only-mobile">
		<Link path="pressionSociale" textUnderline="Les effets de l’alcool" text="sur la santé" />
		<Link path="pressionSociale" textUnderline="Pression sociale" text="et alcool" />
		<Link path="nosConseil" textUnderline="Nos petits" text="tips" />
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
		background-color: var(--yellow);
		padding: 0 5px;
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
