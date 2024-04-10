<script>
	import '$lib/styles/styles.css';
    import MainButton from '$lib/components/MainButton.svelte'
    import {goto} from "$app/navigation";
</script>


<div class="content">
    <h1>Drop ta <span class="encadre">Dose.</span></h1>
    <p class="intro-jeu"> Le jeu interactif sur la prévention de l’alcool, ludique et constructif, qui se joue en physique comme en ligne.</p>
    <ul class="instruction">
        <li><span class="circle">1</span><span class="ligne-instruction">Télécharger les ressources (jetons, flyers...)</span></li>
        <li><span class="circle">2</span><span class="ligne-instruction">Créer des équipes et leur fournir les jetons pour un total de 100 points.</span></li>
        <li><span class="circle">3</span><span class="ligne-instruction">À chaque question, miser l’ensemble des points restants de l’équipe.</span></li>
        <li><span class="circle">4</span><span class="ligne-instruction">L’équipe qui a le plus de points à la fin gagne !</span></li>
    </ul>
    <MainButton onClick={() => goto('/gamePresentation/presentation')}>démarrer le jeu</MainButton>
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
