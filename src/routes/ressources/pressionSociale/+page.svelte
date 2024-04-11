<script>
	import Link from '$lib/components/Link.svelte';
	import '$lib/styles/styles.css';
</script>

<div class="nav-ressource">
	<div class="nav-left">
		<Link linkType="left" path="effetAlcool" textUnderline="Les effets" text="de l’alcool" />
	</div>
	<div class="nav-right">
		<Link path="nosTips" textUnderline="Nos petits" text="tips" />
	</div>
</div>

<section class="top-home-page">
	<div class="left-part">
		<h1>Pression sociale et <span class="yellow-bg">alcool</span></h1>
		<p class="subtitle">
			Allez juste un verre ! Tu as sans doute déjà dû entendre cette phrase, c’est ce qu’on appelle
			de la pression sociale, ici nous t’aidons à y faire face.
		</p>
	</div>
	<img class="img-home" src="/images/illu-ressources-2.svg" alt="" />
</section>

<section class="contenu">
	<p>
		Boire de l'alcool peut parfois ressembler à un passage obligé pour "être cool" ou se sentir
		intégré, surtout au lycée ou au collège. Mais d'où vient cette pression ? Et pourquoi est-ce un
		piège à absolument éviter ? Une bière entre deux heures de cours, un apéro avec la famille, une
		coupe de champagne lors d'un mariage... L'alcool nous entoure, et nous sommes constamment
		confrontés à sa consommation dès notre plus jeune âge.
		<br /><br />
		Cela tombe bien, car nous allons justement aborder ce sujet plus en profondeur. L'idée est que tu
		puisses, grâce à nos conseils, mieux résister à la pression des pairs mais aussi comprendre d'où
		peut venir cette influence.
	</p>
	<h2>Les amies et la famille d’abord, pas toujours…</h2>
	<p>
		C’est vendredi soir, tout le monde est excité à l’idée de finir la semaine en beauté. Les amis te passent une bouteille en te disant : “Allez juste un verre!”, c’est là que commence la pression des pairs. En gros, c’est quand tes amis (ou parfois même des connaissances) te poussent à boire juste parce que “tout le monde le fait”. Mais la pression ne vient pas uniquement des amis.
    <br><br>
    Dans la famille aussi, lors d’événements comme les mariages ou les fêtes, l’alcool est souvent proposé et les attitudes permissives ou restrictives de ta famille peuvent également influencer ta consommation d'alcool. Les parents et les frères et sœurs aînés peuvent servir de modèle, que ce soit pour boire modérément ou au contraire, excéder les limites. Dans ce genre de situation, il est difficile de s’affirmer et de dire non, car en tant que collégien ou lycéen, tu veux être apprécié et faire partie du groupe.
    <br><br>
    Mais il est crucial que tu gardes à l’esprit que tu as le droit de dire non, et que cela peut te sauver de personnes potentiellement malveillantes et de situations dangereuses. Ne t’inquiète pas, par la suite nous te donnerons des conseils pour t’affirmer et enfin pouvoir dire non sans aucune difficulté, tu verras c’est juste une question d’entraînement!
	</p>
	<h3>La publicité et les médias qui vend du rêve… et de l’alcool</h3>
	<p>
		Allume la télé, regarde une vidéo sur Youtube, et paf une publicité pour une boisson alcoolisée apparaît montrant des gens heureux, beaux passant le plus beau jour de leur vie, un verre d’alcool fort à la main.
    <br><br>
    Les publicités et les médias jouent un rôle crucial dans ta perception de l'alcool, te vendant l'idée que boire est synonyme d'être "cool" et "populaire". 
    <br><br>
    Mais attention, ne te fait pas voir, cette image est trompeuse. En réalité l’alcool agit directement sur le bon fonctionnement de ton cerveau. Des difficultés à se concentrer, changement brusque de l’humeur, hypertension, battements du cœur qui fluctuent, bref tu l’auras compris c’est tout sauf cool que de consommer de l’alcool aussi tôt.
	</p>
  <h3 class="only-mobile">N’hésite pas à découvrir nos autres thématiques !</h3>
	<div class="flex-link only-mobile">
    <Link path="pressionSociale" textUnderline="Les effets de l’alcool" text="sur la santé" />
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
