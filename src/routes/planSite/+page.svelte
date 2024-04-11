<script lang="ts">
  import '$lib/styles/styles.css';
</script>

<section class="top-home-page">
	<h1>Plan du <span class="yellow-bg">site</span></h1>
</section>

<section class="contenu">
	<div>
		<h2>global</h2>
		<div class="links">
			<a href="/about" class="underline">À propos</a>
			<a href="/guideAtelier" class="underline">Guide d'atelier de prévention</a>
			<a href="/gamePresentation" class="underline">Atelier d'animation</a>
			<a href="/game" class="underline">Tester ses connaissances</a>
			<a href="/ressources/imprimable" class="underline">Documents imprimables</a>
			<a href="/legalNotice" class="underline">Mentions légales</a>
		</div>
	</div>
	<div>
		<h2>ressources</h2>
		<div class="links">
			<a href="/ressources" class="underline">Thématiques</a>
			<a href="/ressources/effetAlcool" class="underline">Les effets de l'alcool sur la santé</a>
			<a href="/ressources/pressionSociale" class="underline">Pression sociale de alcool</a>
			<a href="/ressources/imprimable" class="underline">Documents imprimables</a>
			<a href="/ressources/nosConseils" class="underline">Nos petits tips</a>
			<a href="/resssources/aide" class="underline">Aide</a>
		</div>
	</div>
</section>

<style>
  .top-home-page {
	  padding: 100px 10vw;
  }

  .contenu {
	  display: flex;
	  justify-content: flex-start;
	  margin-left: 20vw;
	  gap: 100px
  }
  .contenu h2 {
	  margin-top: 48px;
	  margin-bottom: 32px;
	  text-transform: uppercase;
  }
  .yellow-bg {
	  background-color: var(--yellow);
	  padding: 0 5px;
  }
  .links{
	  display: flex;
	  flex-direction: column;
	  gap: 50px;
	  align-items: flex-start;
  }
  .links a{
	  text-decoration: none;
	  position: relative;
  }

  .underline::after {
	  content: '';
	  position: absolute;
	  left: 0;
	  bottom: -8px;
	  width: 100%;
	  height: 3px;
	  transition: background-color 0.3s ease;
  }

  .underline:hover::after {
	  background-color: var(--yellow);
  }

  @media screen and (min-width: 0px) and (max-width: 1000px) {
	  h1{
		  text-align: center;
	  }
	  .top-home-page {
		  margin-top: 65px;
		  padding: 0 5vw;
		  flex-direction: column;
	  }
	  .contenu {
		  margin-left: 5vw;
		  flex-direction: column;
	  }
	  .underline::after {
		  display: none;
	  }
  }
  </style>
