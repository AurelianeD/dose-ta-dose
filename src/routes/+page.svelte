<script lang="ts">
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
	import ChoiceButton from '$lib/components/ChoiceButton.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation'; // Importez la fonction goto pour la navigation

	let footer: HTMLElement;

	onMount(() => {
		footer = document.getElementById('footer');
		if (footer) {
			footer.style.display = 'flex';
		}
	});
</script>

<svelte:head>
	<title>Dose ta dose</title>
</svelte:head>

<section class="top-home-page">
	<div class="left-part">
    <div class="logo-h1">
      <h1>Dose <br /> &nbsp&nbsp;&nbspta dose</h1>
      <img class="o-svg" src="/images/o.svg" alt="" />
    </div>

		<p class="subtitle">Le site pour s’informer et tester ses connaissances sur l’alcool.</p>
		<div class="flex-top-link">
			<Link path="/guideAtelier" textUnderline="Guide d’atelier" text="de prévention (animateur·rice)" />
			<Link path="/ressources" textUnderline="Je me renseigne" text="(élève)" />
		</div>
	</div>
	<img class="img-home" src="/images/illu-home.svg" alt="" />
</section>
<section class="prevention" id="jeu">
	<div class="flex-prevention">
		<div class="box-prevention">
			<div class="text-prevention">
        <h2>Je <span class="yellow-bg">teste</span> mes connaissances</h2>
				<p class="instruction-text">
					Prêt à booster tes connaissances sur l’alcool ? Le jeu “Drop ta Dose” est fait pour toi.
					Avec notre quiz, tu vas pouvoir vérifier ce que tu sais déjà au sujet de l’alcool et
					découvrir de nouvelles infos !
				</p>
				<ChoiceButton path="/game">
					<span slot="title">Lancer le questionnaire</span>
					<span slot="description">En autonomie</span>
				</ChoiceButton>
			</div>
			<img class="img-home" src="/images/illu-home-2.svg" alt="" />
		</div>
		<div class="box-prevention">
			<div class="text-prevention">
				<h2>Je suis <span class="yellow-bg">animateur·rice</span></h2>
				<p class="instruction-text">
					Vous souhaitez organiser un atelier de prévention contre l’alcool ? Bingo, vous êtes au
					bon endroit ! Retrouvez toutes les étapes détaillées afin de bien préparer votre
					manifestation dans vos classes.
				</p>
				<ChoiceButton path="/guideAtelier" buttonType="secondary">
					<span slot="title">Accéder au guide d’atelier</span>
					<span slot="description">Cadre scolaire</span>
				</ChoiceButton>
			</div>
			<img class="img-home" src="/images/illu-home-3.svg" alt="" />
		</div>
	</div>
</section>
<section class="statistique">
	<div class="box-stat">
		<p class="number-stat">44%</p>
		<p class="text-stat">
			des élèves de 6ème ont déjà goûté à l’alcool <a
				class="source"
				href="https://www.ofdt.fr/"
				target="_blank">(OFDT, 2020)</a
			>
		</p>
	</div>
	<div class="box-stat">
		<p class="number-stat">1 élève sur 5</p>
		<p class="text-stat">
			a connu une alcoolisation ponctuelle importante dans le mois.<a
				class="source"
				href="https://www.drogues.gouv.fr/"
				target="_blank">(drogues.gouv)</a
			>
		</p>
	</div>
	<div class="box-stat">
		<p class="number-stat">5 à 10 ans</p>
		<p class="text-stat">
			c’est la tranche d’âge de l’initiation à la consommation d’alcool chez les enfants par leur
			famille. <a class="source" href="https://www.drogues.gouv.fr/" target="_blank"
				>(drogues.gouv)</a
			>
		</p>
	</div>
</section>
<section class="ressources">
	<div class="left-part">
		<h2>Ressources <span class="yellow-bg">imprimables</span></h2>
		<p class="ressource-text">
      Sur Dose ta Dose, vous trouvez toutes les ressources nécessaires pour sensibiliser aux sujets de l’alcool, que vous soyez professeur·e ou  infirmier·ère·s. Vous trouverez tout ce qu’il faut : un guide pour animer votre atelier, des quiz pour tester vos élèves sur le sujet de l’alcool, sans oublier les nombreuses affiches et guides à transmettre aux élèves. Tout est prêt à télécharger en PDF, ou à imprimer. Juste un clic et c'est parti !
		</p>
		<Link path="ressources/imprimable" textUnderline="Accès aux" text="documents" />
	</div>

	<div class="right-part">
		<a href="/pdf/infographie_1.pdf" target="_blank">
			<img src="/images/infographie_1.png" alt="" />
		</a>
		<a href="/pdf/infographie_2.pdf" target="_blank">
			<img src="/images/infographie_2.png" alt="" />
		</a>
	</div>
</section>
<section class="about">
	<div class="about-box">
		<h2>Pourquoi <span class="yellow-bg">Dose ta Dose ?</span></h2>
		<p class="about-text">
			Notre mission ? Pouvoir t’équiper des meilleurs conseils et informations au sujet de l’alcool. L’objectif ? Te donner les clés pour que tu puisses dès maintenant faire des choix rationnels et éviter les nombreux risques liés à l’alcool. Chez Dose ta Dose il n’y a aucun tabou ! Nous sommes avant tout là t’aider et te renseigner ! Notre site comprend une section Ressources où tu trouveras des informations fiables pour mieux comprendre les enjeux autour de l’alcool, et une partie Jeu pour tester tes connaissances à travers des quiz.
		</p>
		<Link path="about" textUnderline="À" text="propos" />
	</div>
</section>

<style>
  .logo-h1{
    position: relative;
  }
  .o-svg{
    width: 28px;
    top: 94px;
    left: 140px;
    z-index: -1;
    position: absolute;
  }
	h1 {
		text-transform: uppercase;
	}
	.subtitle {
		margin-top: 32px;
		margin-bottom: 24px;
		width: 70%;
		font-weight: 600;
		line-height: 130%;
		font-size: 20px;
	}
	.flex-top-link {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	/* Home Page */
	.yellow-bg {
		background-color: var(--yellow);
		padding: 0 5px;
	}
	.top-home-page {
		margin-top: 128px;
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

	.statistique {
		margin-top: 128px;
		padding: 0 10vw;
		display: flex;
		justify-content: space-between;
	}

	.box-stat {
		width: 23vw;
		color: var(--black);
	}

	.number-stat {
		font-size: 28px;
		font-weight: 600;
	}

	.text-stat {
		margin-top: 4px;
		font-size: 16px;
		font-weight: 400;
		line-height: 130%;
	}

	.source {
		font-weight: 200;
		text-decoration: none;
	}

	.prevention {
		margin-top: 128px;
	}

	.flex-prevention {
		margin-top: 64px;
		display: flex;
    flex-direction: column;
		padding: 0 10vw;
		gap: 128px;
	}
  .text-prevention{
    width: 32vw;
  }
	.instruction-text {
		line-height: 130%;
		margin-left: 5px;
		margin-top: 24px;
		margin-bottom: 80px;
	}
	.box-prevention {
    display: flex;
    justify-content: space-between;
	}
  .box-prevention:nth-child(2) {
		flex-direction: row-reverse;
	}

	.ressources {
		margin-top: 128px;
		padding: 0 10vw;
		display: flex;
		gap: 128px;
	}

	.ressources .right-part {
		display: flex;
		gap: 32px;
	}
	.right-part img {
		width: 200px;
	}
	.ressource-text {
		margin: 50px 0;
		line-height: 130%;
	}

	.about {
		margin-top: 128px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.about-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 30vw;
	}
	.about-box h2 {
		text-align: center;
	}
	.about-text {
		margin: 48px 0;
		line-height: 130%;
	}
  @media screen and (min-width: 0px) and (max-width: 300px) {
  .o-svg{
    width: 18px;
    top: 58px;
    left:89.5px;
  }
}
@media screen and (min-width: 301px) and (max-width: 500px) {
  .o-svg{
    width: 20px;
    top: 68px;
    left:103.5px;
  }
}
@media screen and (min-width: 501px) and (max-width: 800px) {
  .o-svg{
    width: 22px;
    top: 88px;
    left:132.5px;
  }
}
	@media screen and (min-width: 0px) and (max-width: 800px) {
		.subtitle {
			width: 90%;
			font-size: 20px;
		}

		/* Home Page */
		.top-home-page {
			margin-top: 45px;
			padding: 0 5vw;
			flex-direction: column;
		}
		.img-home {
			margin-top: 48px;
			width: 90vw;
			max-width: 500px;
		}

		.prevention {
			margin-top: 64px;
		}
    .flex-prevention {
      padding: 0 5vw;
      gap: 64px;
    }
  .text-prevention{
    width: 90vw;
  }
	.instruction-text {
		margin-left: 5px;
		margin-bottom: 40px;
	}
  .box-prevention img {
		display: none;
	}
		.statistique {
			margin-top: 64px;
			padding: 0 5vw;
			flex-direction: column;
			gap: 32px;
		}

		.box-stat {
			width: 90vw;
		}

		.ressources {
			flex-direction: column;
			margin-top: 64px;
			padding: 0 5vw;
			gap: 64px;
		}

		.ressources .right-part {
			flex-wrap: wrap;
		}
		.ressources .right-part img {
			width: 30vw;
			min-width: 300px;
		}
		.about {
			margin-top: 64px;
		}
		.about-box {
			width: 90vw;
		}
		.about h2 {
			text-align: left;
		}
		.about-text {
			margin: 32px 0;
		}
	}

	@media screen and (min-width: 800px) and (max-width: 1250px) {
		.img-home {
			width: 40vw;
		}
		.top-home-page {
			padding: 0 5vw;
		}

    .flex-prevention {
      padding: 0 15vw;
    }
  .text-prevention{
    width: 90vw;
  }
	.instruction-text {
		margin-left: 5px;
		margin-bottom: 40px;
	}
  .box-prevention img {
		display: none;
	}
	}
</style>
