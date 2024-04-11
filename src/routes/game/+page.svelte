<script>
	import '$lib/styles/styles.css';
    import MainButton from '$lib/components/MainButton.svelte'
    import {goto} from "$app/navigation";

</script>


<div class="content">
  <h1>Teste tes <span class="encadre">connaissances</span></h1>
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

    .encadre{
        background-color: var(--yellow);
        padding: 0 5px;
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
