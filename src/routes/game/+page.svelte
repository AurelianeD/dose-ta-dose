<script>
	import '$lib/styles/styles.css';
    import MainButton from '$lib/components/MainButton.svelte'
    import {goto} from "$app/navigation";

</script>


<div class="content">
  <h1>Teste tes <span class="yellow-bg">connaissances</span></h1>
  <p class="intro-jeu">Tu veux évaluer ta culture sur le thème de l'alcool ? Démarre le jeu et remporte le plus de points !</p>
  <ul class="instruction">
    <li><span class="ligne-instruction">1. Tu démarres avec 100 points.</span></li>
    <li><span class="ligne-instruction">2. À chaque question, mise 10 points sur une ou deux réponses.</span></li>
    <li><span class="ligne-instruction">3. Aie le plus haut score à la fin des dix questions !</span></li>
  </ul>
  <MainButton onClick={() => goto('/game/start/')}>démarrer le jeu</MainButton>
</div>

<style>
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
