<script>
	import '$lib/styles/styles.css';
    import MainButton from '$lib/components/MainButton.svelte'
    import {goto} from "$app/navigation";
</script>


<div class="content">
    <h1>Atelier <span class="yellow-bg">d’animation</span></h1>
    <p class="intro-jeu">Vous souhaitez organiser un atelier de prévention contre l’alcool de façon ludique ? Pour cela, vous devez :</p>
    <ul class="instruction">
        <li><span class="circle">1.</span><span class="ligne-instruction"><a href="/guideAtelier" class="btn"><span class="yellow-underline">Consulter le guide</span></a> d’organisation de l’atelier.</span></li>
        <li><span class="ligne-instruction">2. Créer des équipes et leur fournir 20 billets pour un total de 100 points.</span></li>
        <li><span class="ligne-instruction">3. À chaque question, miser 2 billets soit 10 points. Les billets placés sur les réponses fausses sont perdus.</span></li>
        <li><span class="ligne-instruction">4. L’équipe qui a le plus de points à la fin gagne !</span></li>
    </ul>
    <MainButton onClick={() => goto('/gamePresentation/presentation')}>démarrer le jeu</MainButton>
</div>


<style>
  .btn{
    font-size: 18px;
    background: none;
    border: none;
  }
  .yellow-underline{
		text-decoration: underline;
	}


    .content{
        display: flex;
        flex-direction: column;
        margin: 50px 20px;
        gap: 50px;
        justify-content: center;
        align-items: center;
        font-family: 'DM-Sans', sans-serif;
    }

    h1 .yellow-bg {
		position: relative !important;
    display: inline-block;
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

    .intro-jeu{
        text-align: center;
        line-height: 100%;
        font-weight: 600;
        font-size: clamp(16px, 3vw, 28px);
        max-width: 500px;
        line-height: 1.5;
    }

    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        border: 2px solid var(--yellow);
        border-radius: 50%;
    }

    .instruction li{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: clamp(12px, 3vw, 18px);
        gap: 15px;
        margin: 25px 0;
    }

    .ligne-instruction{
        max-width: clamp(200px, 50vw, 650px);
    }



</style>
