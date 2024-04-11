<script lang="ts">
  import { onMount } from 'svelte';
  import Link from '$lib/components/Link.svelte';
  import Download from '$lib/components/Download.svelte';
  import '$lib/styles/styles.css';
  import {getFileSize} from "$lib/helpers";

  let fileSizes: Record<string, string | null> = {}; // Define the type explicitly


  onMount(async () => {
    const documents = [
      { url: '/pdf/imprimables-dosetadose.zip', key: 'all' },
      { url: '/pdf/infographie_1.pdf', key: 'infographie_1' },
      { url: '/pdf/infographie_2.pdf', key: 'infographie_2' },
      { url: '/pdf/affiche.pdf', key: 'affiche_1' },
      { url: '/pdf/flyer_1.pdf', key: 'flyer_1' },
      { url: '/pdf/flyer_2.pdf', key: 'flyer_2' },
      { url: '/pdf/flyer_3.pdf', key: 'flyer_3' }
    ];

    for (const doc of documents) {
      fileSizes[doc.key] = await getFileSize(doc.url);
    }
  });
</script>

<div class="nav-ressource">
	<div class="nav-right">
		<Link path="/ressources" textUnderline="Nos" text="thématiques" />
	</div>
	<div class="nav-left">
		<Link path="effetAlcool" textUnderline="Les effets" text="de l'alcool" />
	</div>
</div>

<section class="top-home-page">
	<div class="left-part">
		<h1>Documents <span class="yellow-bg">imprimables</span></h1>
		<p class="subtitle">Je ne sais quoi mettre ici</p>
		<Download path="/pdf/imprimables-dosetadose.zip" textUnderline="Tout" text="télécharger" textSubtitle="{`${fileSizes.all} Mo`}" />
	</div>
	<img class="img-home" src="/images/illu-ressources-5.svg" alt="" />
</section>

<section class="contenu">
	<h2>Les infographies</h2>
	<div class="documents">
		<div class="box-docs">
			<a href="/pdf/infographie_1.pdf" target="_blank">
				<img src="/images/infographie_1.png" alt="" />
			</a>
			<Download path="/pdf/infographie_1.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.infographie_1} Mo`}"
			/>
		</div>
		<div class="box-docs">
			<a href="/pdf/infographie_2.pdf" target="_blank">
				<img src="/images/infographie_2.png" alt="" />
			</a>
			<Download path="/pdf/infographie_2.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.infographie_2} Mo`}"/>
		</div>
	</div>
	<h2>Affiche</h2>
	<div class="documents">
		<div class="box-docs">
			<a href="/pdf/affiche_1.pdf" target="_blank">
				<img src="/images/affiche_1.png" alt="" />
			</a>
			<Download path="/pdf/affiche.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.affiche_1} Mo`}" />
		</div>
	</div>
	<h2>Les flyers</h2>
	<div class="flyers">
		<div class="box-docs">
			<a href="/pdf/flyer_1.pdf" target="_blank">
				<img src="/images/flyer_1.png" alt="" />
			</a>
			<Download path="/pdf/flyer_1.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.flyer_1} Mo`}" />
		</div>
		<div class="box-docs">
			<a href="/pdf/flyer_2.pdf" target="_blank">
				<img src="/images/flyer_2.png" alt="" />
			</a>
			<Download path="/pdf/flyer_2.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.flyer_2} Mo`}" />
		</div>
		<div class="box-docs">
			<a href="/pdf/flyer_3.pdf" target="_blank">
				<img src="/images/flyer_3.png" alt="" />
			</a>
			<Download path="/pdf/flyer_3.pdf" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.flyer_3} Mo`}" />
		</div>
	</div>
	<h3 class="only-mobile">N’hésite pas à découvrir nos autres thématiques !</h3>
	<div class="flex-link only-mobile">
		<Link path="pressionSociale" textUnderline="Les effets de l’alcool" text="sur la santé" />
		<Link path="pressionSociale" textUnderline="Pression sociale" text="et alcool" />
		<Link path="nosConseil" textUnderline="Nos petits" text="tips" />
		<Link path="aide" textUnderline="Avoir de" text="l'aide" />
	</div>
</section>

<style>
	.only-mobile {
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
		margin-top: 80px;
		margin-bottom: 40px;
	}
	.box-docs {
		display: flex;
		gap: 16px;
		flex-direction: column;
		align-items: center;
	}

	.documents {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
	}
	.documents img {
		height: 550px;
		width: auto;
	}
	.flyers {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
	}
	.flyers .box-docs img{
		box-shadow: 0px 0px 5px 0px var(--black);
	}
	.flyers img {
		height: 350px;
		width: auto;
	}
	.yellow-bg {
		background-color: var(--yellow);
		padding: 0 5px;
	}

	@media screen and (min-width: 0px) and (max-width: 800px) {
		.only-mobile {
			display: block;
		}
		.flex-link {
			margin-top: 32px;
			gap: 16px;
			display: flex;
			flex-direction: column;
		}

		h1 {
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
	}
</style>
