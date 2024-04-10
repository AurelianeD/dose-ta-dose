<script lang="ts">
  import { onMount } from 'svelte';
  import Link from '$lib/components/Link.svelte';
  import Download from '$lib/components/Download.svelte';
  import '$lib/styles/styles.css';

  let fileSizes: Record<string, string | null> = {}; // Define the type explicitly

  async function getFileSize(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        const fileSizeBytes = blob.size;
        const fileSizeMB = (fileSizeBytes / (1024 * 1024)).toFixed(1); // Convert bytes to megabytes and round to 1 decimal place
        return fileSizeMB;
      } else {
        console.error('Failed to fetch the file:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error fetching the file:', error);
      return null;
    }
  }

  onMount(async () => {
    const documents = [
      { url: '/pdf/Infographie_1.pdf', key: 'infographie_1' },
      { url: '/pdf/Infographie_2.pdf', key: 'infographie_2' },
      { url: '/pdf/Affiche.pdf', key: 'affiche_1' },
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
		<p class="subtitle">Je ne sais quoi mettre ici</p>
		<Download path="game" textUnderline="Tout" text="télécharger" textSubtitle="325Mo - pdf" />
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
			<Download path="game" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.infographie_1} Mo`}"
			/>
		</div>
		<div class="box-docs">
			<a href="/pdf/Infographie_2.pdf" target="_blank">
				<img src="/images/Infographie_2.png" alt="" />
			</a>
			<Download path="game" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.infographie_2} Mo`}"/>
		</div>
	</div>
	<h2>Affiche</h2>
	<div class="documents">
		<div class="box-docs">
			<a href="/pdf/Affiche.pdf" target="_blank">
				<img src="/images/Affiche.jpg" alt="" />
			</a>
			<Download path="game" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.affiche_1} Mo`}" />
		</div>
	</div>
	<h2>Les flyers</h2>
	<div class="flyers">
		<div class="box-docs">
			<a href="/pdf/Flyer_1.pdf" target="_blank">
				<img src="/images/flyers_1.png" alt="" />
			</a>
			<Download path="game" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.flyer_1} Mo`}" />
		</div>
		<div class="box-docs">
			<a href="/pdf/flyer_2.pdf" target="_blank">
				<img src="/images/flyers_2.png" alt="" />
			</a>
			<Download path="game" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.flyer_2} Mo`}" />
		</div>
		<div class="box-docs">
			<a href="/pdf/flyer_3.pdf" target="_blank">
				<img src="/images/flyers_3.png" alt="" />
			</a>
			<Download path="game" textUnderline="Télécharger" text="(pdf)" textSubtitle="{`${fileSizes.flyer_3} Mo`}" />
		</div>
	</div>
	<h3 class="only-mobile">N’hésite pas à découvrir nos autres thématiques !</h3>
	<div class="flex-link only-mobile">
		<Link path="pressionSociale" textUnderline="Pression sociale" text="et alcool" />
		<Link path="nosConseil" textUnderline="Nos" text="conseils" />
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
		.contenu p {
			max-width: 90vw;
		}
	}
</style>