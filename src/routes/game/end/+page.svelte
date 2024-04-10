<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import {onMount} from "svelte";
    import {page} from "$app/stores";

    let footer: HTMLElement;

    function getEndMessage(score: number): string{
        switch (true) {
            case score < 25: return 'Ouch ! J’espère que tu as pu en apprendre un peu plus sur l’alcool. N’abandonne pas, tu peux toujours réessayer !';
            case score > 25 && score < 50: return 'C’est un bon début ! Tu peux réessayer pour améliorer ton score, montre nous ce que tu as retenu ! ';
            case score > 50 && score < 75 : return 'Pas mal du tout ! Tu peux aller dans les ressources si tu veux d’autres informations complémentaires.';
            case score > 75 && score <= 99 : return 'Bravo, tu es plutôt calé(e) sur le sujet ! N’hésite pas à checker les ressources pour en savoir encore plus !';
            case score === 100: return 'Wow tu es vraiment incollable sur le sujet, bravo à toi !'
        }
    }

    const score = $page.url.search.slice(1)

    onMount(() => {
        footer = document.getElementById('footer')
        if(footer){
            footer.style.display = 'flex'
        }
    })

</script>

<div class="container">
    <h3><span>{score}</span> points restant</h3>
    <h1>Vous avez terminé !</h1>
    <p class="bigText">{getEndMessage(100)}</p>
    <div class="linkContainer">
        <Link textUnderline="Accéder" text="aux ressources" path="/ressources" />
        <Link text="le text" textUnderline="Refaire" path="/game" />
    </div>
</div>

<style>
    h1{
        color: var(--black)
    }
    .container{
        display: flex;
        flex: 1;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        gap: 50px
    }
    .linkContainer{
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        gap: 20px
    }
</style>
