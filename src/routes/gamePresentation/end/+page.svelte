<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import {onMount} from "svelte";

    let footer: HTMLElement;

    onMount(() => {
        footer = document.getElementById('footer')
        if(footer){
            footer.style.display = 'flex'
        }
    })
</script>

<div class="container">
    <h1>Vous avez terminé !</h1>
    <p class="bigText">On fait une description giga cool, un petit texte</p>
    <div class="linkContainer">
        <Link textUnderline="Accéder" text="aux ressources" path="/ressources" />
        <Link textUnderline="Refaire" text="le test" path="/gamePresentation" />
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
        display: flex;
        flex-direction: column;
        gap: 20px
    }
</style>
