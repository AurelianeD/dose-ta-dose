<script lang="ts">
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
	import ChoiceButton from '$lib/components/ChoiceButton.svelte';
	import {onMount} from "svelte";

	let footer: HTMLElement;

	onMount(() => {
		footer = document.getElementById('footer')
		if(footer){
			footer.style.display = 'flex'
		}
	})
</script>

<svelte:head>
	<title>Dose ta dose</title>
</svelte:head>

<section class="top-home-page">
	<div class="left-part">
		<h1>Dose <br /> ta dose</h1>
		<p class="subtitle">Le site pour s’informer et tester ses connaissances sur l’alcool.</p>
		<div class="flex-top-link">
			<Link path="/guideAtelier" textUnderline="Guide d’atelier" text="de prévention" />
			<Link path="/ressources" textUnderline="Je me renseigne" text="(élève)" />
		</div>
	</div>
	<img class="img-home" src="/images/illu-home.svg" alt="" />
</section>
<section class="prevention" id="jeu">
	<h2>Prévenir pour mieux <span class="yellow-bg">agir.</span></h2>
	<div class="flex-prevention">
		<div class="box-prevention">
			<h3>J’anime un <span class="yellow-bg">atelier</span> de prévention</h3>
			<p class="instruction-text">
				<span class="underline-span">Téléchargez et imprimez les imprimables</span> nécessaires au préalable.
			</p>
			<ChoiceButton path="/gamePresentation">
				<span slot="title">Démarrer l’atelier</span>
				<span slot="description">Animation</span>
			</ChoiceButton>
		</div>
		<div class="box-prevention">
			<h3>Je teste mes <span class="yellow-bg">connaissances</span></h3>
			<p class="instruction-text">
				<span class="underline-span">Consultez les ressources</span> présentes sur le site.
			</p>
			<ChoiceButton path="/game" buttonType="secondary">
				<span slot="title">Tester mes connaissances</span>
				<span slot="description">Autonomie</span>
			</ChoiceButton>
		</div>
	</div>
</section>
<section class="statistique">
	<div class="box-stat">
		<p class="number-stat">44%</p>
		<p class="text-stat">
			des élèves de 6ème ont déjà goûté à l’alcool <a class="source" href="https://www.ofdt.fr/" target="_blank">(OFDT, 2020)</a>
		</p>
	</div>
	<div class="box-stat">
		<p class="number-stat">1 élève sur 5</p>
		<p class="text-stat">
			a connu une alcoolisation ponctuelle importante dans le mois. <a class="source" href="https://www.drogues.gouv.fr/" target="_blank">(drogues.gouv)</a>
		</p>
	</div>
	<div class="box-stat">
		<p class="number-stat">5 à 10 ans</p>
		<p class="text-stat">
			c’est la tranche d’âge de l’initiation à la consommation d’alcool chez les enfants par leur
			famille. <a class="source" href="https://www.drogues.gouv.fr/" target="_blank">(drogues.gouv)</a>
		</p>
	</div>
</section>
<section class="ressources">
	<div class="left-part">
		<h2>Ressources <span class="yellow-bg">imprimables</span></h2>
		<p class="ressource-text">
			Lorem ipsum dolor sit amet consectetur. Massa feugiat rhoncus mi congue fames mattis non nibh.
			Lacus tellus aenean risus pellentesque risus massa faucibus nec nullam. Ornare viverra nibh
			praesent sed pharetra rutrum ante maecenas. A amet.
		</p>
		<Link path="ressources" textUnderline="Accès aux ressources" text="(pdf)" />
	</div>

	<div class="right-part">
		<img src="/images/infographie-1.jpg" alt="" />
		<img src="/images/infographie-2.jpg" alt="" />
	</div>
</section>
<section class="about">
	<div class="about-box">
		<h2>Pourquoi <span class="yellow-bg">Dose ta Dose ?</span></h2>
		<p class="about-text">
			Lorem ipsum dolor sit amet consectetur. Massa feugiat rhoncus mi congue fames mattis non nibh.
			Lacus tellus aenean risus pellentesque risus massa faucibus nec nullam. Ornare viverra nibh
			praesent sed pharetra rutrum ante maecenas. A amet.
		</p>
		<Link path="about" textUnderline="A" text="propos" />
	</div>
</section>


<style>
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

	.prevention h2 {
		text-align: center;
	}

	.flex-prevention {
		margin-top: 64px;
		display: flex;
		padding: 0 20vw;
		gap: 48px;
	}

	.instruction-text {
		line-height: 130%;
		height: 20px;
		margin-left: 5px;
		margin-top: 24px;
		margin-bottom: 50px;
	}
	.box-prevention {
		width: 30vw;
	}
	.box-prevention h3 {
		text-align: center;
	}

	.underline-span {
		text-decoration: underline;
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
    .box-prevention h3 {
		text-align: left;
	}
		.flex-prevention {
			margin-top: 48px;
			flex-direction: column;
			padding: 0 5vw;
		}

		.instruction-text {
			height: 70px;
			margin-left: 5px;
			margin-top: 24px;
			margin-bottom: 10px;
		}
		.box-prevention {
			width: 90vw;
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
    .ressources .right-part img{
      width: 30vw;
      min-width: 300px;
    }
		.about {
			margin-top: 64px;
		}
		.about-box {
			width: 90vw;
		}
    .about h2{
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
      justify-content: space-between;
      margin-top: 64px;
      padding: 0 10vw;
	}
  .box-prevention {
		width: 50vw;
	}
  .instruction-text {
		height: 50px;
	}
  .box-prevention h3 {
    height: 70px;
	}
  }
</style>
