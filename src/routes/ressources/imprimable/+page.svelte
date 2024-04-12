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
      { url: '/pdf/Infographie_1.pdf', key: 'infographie_1' },
      { url: '/pdf/Infographie_2.pdf', key: 'infographie_2' },
      { url: '/pdf/affiche_1.pdf', key: 'affiche_1' },
      { url: '/pdf/Flyer_1.pdf', key: 'flyer_1' },
      { url: '/pdf/flyer_2.pdf', key: 'flyer_2' },
      { url: '/pdf/flyer_3.pdf', key: 'flyer_3' }
    ];

    for (const doc of documents) {
      fileSizes[doc.key] = await getFileSize(doc.url);
    }
  });
</script>
<section class="top-home-page">
	<div class="left-part">
		<h1>Documents <span class="yellow-bg">imprimables</span></h1>
		<p class="subtitle">Retrouvez tous les documents à imprimer ici, en format pdf, à distribuer à vos élèves ou à afficher dans les salles de classe !</p>
		<Download path="/pdf/imprimables-dosetadose.zip" textUnderline="Tout" text="télécharger" size={fileSizes.all} />
	</div>
	<img class="img-home" src="/images/illu-ressources-5.svg" alt="" />
</section>

<section class="contenu">
	<h2>Les infographies</h2>
	<div class="documents">
		<div class="box-docs">
			<a href="/pdf/Infographie_1.pdf" target="_blank">
				<img src="/images/Infographie_1.png" alt="" />
			</a>
			<Download path="/pdf/Infographie_1.pdf" textUnderline="Télécharger" text="(pdf)" size={fileSizes.infographie_1}/>
		</div>
		<div class="box-docs">
			<a href="/pdf/Infographie_2.pdf" target="_blank">
				<img src="/images/Infographie_2.png" alt="" />
			</a>
			<Download path="/pdf/Infographie_2.pdf" textUnderline="Télécharger" text="(pdf)" size={fileSizes.infographie_2}/>
		</div>
	</div>
	<h2>Affiche</h2>
	<div class="documents">
		<div class="box-docs">
			<a href="/pdf/affiche_1.pdf" target="_blank">
				<img src="/images/affiche_1.png" alt="" />
			</a>
			<Download path="/pdf/affiche_1.pdf" textUnderline="Télécharger" text="(pdf)" size={fileSizes.affiche_1}/>
		</div>
	</div>
	<h2>Les flyers</h2>
	<div class="flyers">
		<div class="box-docs">
			<a href="/pdf/flyer-1.pdf" target="_blank">
				<img src="/images/flyer_1.png" alt="" />
			</a>
			<Download path="/pdf/flyer-1.pdf" textUnderline="Télécharger" text="(pdf)" size={fileSizes.flyer_1}/>
		</div>
		<div class="box-docs">
			<a href="/pdf/flyer-2.pdf" target="_blank">
				<img src="/images/flyer_2.png" alt="" />
			</a>
			<Download path="/pdf/flyer-2.pdf" textUnderline="Télécharger" text="(pdf)" size={fileSizes.flyer_2} />
		</div>
		<div class="box-docs">
			<a href="/pdf/flyer-3.pdf" target="_blank">
				<img src="/images/flyer_3.png" alt="" />
			</a>
			<Download path="/pdf/flyer-3.pdf" textUnderline="Télécharger" text="(pdf)" size={fileSizes.flyer_3} />
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
	.contenu img{
		box-shadow: 0px 0px 8px 0px rgb(26, 26, 26, 0.20);
	}
	.flyers img {
		height: 350px;
		width: auto;
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
		.subtitle {
			width: 90%;
		}

		.contenu {
			margin-left: 5vw;
		}
	}
</style>
