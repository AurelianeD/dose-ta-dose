<script lang="ts">
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
	import MainButton from '$lib/components/MainButton.svelte';
	import {goto} from "$app/navigation";
	import Download from "$lib/components/Download.svelte";
	import {onMount} from "svelte";
	import {getFileSize} from "$lib/helpers/index.js";

	let fileSizes: Record<string, string | null> = {};


	onMount(async () => {
		const documents = [
			{ url: '/pdf/regle_du_jeu-dosetadose.pdf', key: 'rules' },
			{ url: '/pdf/jetons.pdf', key: 'jetons' },
		];

		for (const doc of documents) {
			fileSizes[doc.key] = await getFileSize(doc.url);
		}
	});
</script>

<section class="top-page">
	<div class="left-part">
		<h1>Guide d’atelier de <span class="yellow-bg">prévention</span></h1>
		<p class="subtitle">
			Retrouve ici LE guide simple et ludique de prévention contre l’alcool pour animer des classes de collégiens et de lycéens !
		</p>
	</div>
	<img class="img-top" src="/images/illu-guide.svg" alt="" />
</section>
<section class="description">
	<h2>Comment bien préparer un atelier</h2>
	<p class="description-text">
		Vous souhaitez organiser un atelier de prévention ?
Vous êtes au bon endroit, voici quelques étapes pour savoir comment s’y prendre : <br><br> Télécharger toutes les ressources mises à disposition ci-dessous. Imprimer le nombre de planches de billets nécessaires pour toute la classe, chaque équipe doit posséder 100 points, soit 2 planches ! <br> Il suffit maintenant de découper les billets et de les répartir au sein de chaque équipe. Démarrer l’atelier en cliquant sur le bouton en bas de page et projeter les questions sur le tableau. Et c'est parti !
	</p>
</section>
<section class="docs">
	<h2>Les documents à prévoir</h2>
	<div class="flex-docs">
		<div class="box-docs">
			<p class="title-docs">Règles du jeu</p>
			<img src="/images/rules.png" alt="" />
			<Download path="/pdf/regle_du_jeu-dosetadose.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle={`${fileSizes.rules} Mo`} />
		</div>
		<div class="box-docs">
			<p class="title-docs">Jetons (50 points)</p>
			<img src="/images/jetons.png" alt="" />
			<Download path="/pdf/jetons.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle={`${fileSizes.jetons} Mo`} />
		</div>
	</div>
</section>
<section class="rules">
	<h2>Règles du jeu</h2>
	<div class="rules-text">
		<h3>Contenu du jeu :</h3>
    <ul>
      <li><p><span class="semibold">2 planches</span> par équipe, soit <span class="semibold">20 cartes</span> de 5 points par équipe</p></li>
      <li><p>Une feuille avec plusieurs questions</p></li>
    </ul>
    <h3>But du jeu :</h3>
    <ul>
      <li><p>Être l’équipe qui a sauvé le plus de <span class="semibold">points de sobriété.</span></p></li>
    </ul>
    <h3>Principe du jeu :</h3>
    <ul>
      <li><p>Divisez-vous en équipe de <span class="semibold">5 à 6 personnes.</span> Chaque groupe commence avec <span class="semibold">20 cartes</span> de 5 points de sobriété, soit 100 points.</p> </li>
      <li><p>Pour la version sans projecteur, le maître du jeu (présentateur·rice) devra imprimer une feuille avec les questions et leurs réponses.</p> </li>
      <li><p><span class="semibold">Les équipes jouent en même temps</span> et répondent donc à la même question. À chaque tour une question à choix multiple est posée sur le thème de la prévention contre l’alcool.</p></li>
      <li><p>Après un temps de réflexion, chaque équipe dépose ses points sur <span class="semibold">LA ou LES réponse(s)</span> qu’elle pense correcte(s).</p></li>
      <li><p>Chaque point posé sur la mauvaise réponse est alors <span class="semibold">définitivement perdu.</span></p></li>
      <li><p>Les équipes reprennent leurs points qui ont été misés sur LA ou LES bonne(s) réponse, puis jouent de la même manière lors des questions suivantes. Et ainsi de suite jusqu’à la <span class="semibold">10ème question.</span></p></li>
    </ul>
    <h3>Règle importante :</h3>
    <ul>
      <li><p>Les équipes ne peuvent pas miser tous leurs points sur la même réponse.</p> </li>
    </ul>
    <h3>Fin du jeu :</h3>
    <ul>
      <li><p>L’équipe qui aura le <span class="semibold">plus de points de sobriété</span> gagne la partie.</p></li>
    </ul>
	</div>
</section>
<div class="button-center">
  <MainButton onClick={() => goto('/gamePresentation/presentation')} buttonSize="big">démarrer l’atelier</MainButton>
</div>

<style>
	h1 {
		width: 70%;
	}
	.subtitle {
		margin-top: 32px;
		margin-bottom: 24px;
		width: 70%;
		font-weight: 600;
		line-height: 130%;
		font-size: 20px;
	}

	/* Home Page */

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
	.top-page {
		margin-top: 128px;
		padding: 0 5vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

  .description, .docs, .rules{
    margin-top: 128px;
    padding: 0 10vw;
    width: 60vw;
  }
  .description-text{
    margin-top: 48px;
    line-height: 130%;
  }
  .flex-docs{
    display: flex;
    margin-top: 48px;
    gap: 32px;
  }
  .box-docs{
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
  }

  .rules-text{
    margin-top: 64px;
  }
  .rules-text h3{
    margin: 32px 0 18px 0;
  }
  .rules-text ul{
    list-style:initial;
    margin-left: 15px;
  }
  .rules-text ul li {
    line-height: 130%;
  }
.button-center{
  margin-top: 98px;
  display: flex;
  justify-content: center;
}
.semibold{
  font-weight: 600;
}

img{
	max-width: 60%;
}

@media screen and (min-width: 0px) and (max-width: 800px) {
	.top-page{
		flex-direction: column;
	}
}
</style>
