<script>
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
	import MainButton from '$lib/components/MainButton.svelte';
	import {goto} from "$app/navigation";
</script>

<section class="top-page">
	<div class="left-part">
		<h1>Guide d’atelier de <span class="yellow-bg">prévention</span></h1>
		<p class="subtitle">
			Pizza ipsum dolor meat lovers buffalo. Lovers red Bianca anchovies deep large beef. Broccoli.
		</p>
	</div>
	<img class="img-top" src="/images/illu-home.svg" alt="" />
</section>
<section class="description">
	<h2>Comment bien préparer un atelier</h2>
	<p class="description-text">
		Pizza ipsum dolor meat lovers buffalo. Sauce crust sausage melted pesto bacon parmesan. Rib
		cheese pineapple crust beef. Tomato extra red ham Hawaiian parmesan Chicago mushrooms. Pizza
		burnt meat pizza meatball. Sautéed banana extra bell banana ipsum Bianca meatball extra buffalo.
		Burnt wing spinach mushrooms olives. <br /> <br />And mouth platter Hawaiian chicken pepperoni.
		Meat sauce bbq black black hand mayo. Thin peppers ham extra spinach crust dolor olives.
		Parmesan stuffed NY ricotta platter broccoli buffalo ricotta crust. Deep fresh lot bacon
		Hawaiian marinara. Sautéed thin NY mushrooms sautéed peppers.
	</p>
</section>
<section class="docs">
	<h2>Les documents à prévoir</h2>
	<div class="flex-docs">
		<div class="box-docs">
			<p class="title-docs">Règles du jeu</p>
			<img src="/images/jetons-docs.jpg" alt="" />
			<Link path="game" textUnderline="Télécharger" text="(pdf)" />
		</div>
		<div class="box-docs">
			<p class="title-docs">Jetons (50 points)</p>
			<img src="/images/jetons-docs.jpg" alt="" />
			<Link path="game" textUnderline="Télécharger" text="(pdf)" />
		</div>
		<div class="box-docs">
			<p class="title-docs">Flyer</p>
			<img src="/images/jetons-docs.jpg" alt="" />
			<Link path="game" textUnderline="Télécharger" text="(pdf)" />
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
    <div style="margin-top: 32px;">
      <Link path="#" textUnderline="Télécharger" text="les règles(pdf)" />
    </div>
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
	.yellow-bg {
		background-color: var(--yellow);
		padding: 0 5px;
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

@media screen and (min-width: 0px) and (max-width: 800px) {

}
</style>
