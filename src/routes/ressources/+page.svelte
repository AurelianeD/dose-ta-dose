<script>
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
</script>

    <div class="content">
        <h1><span class="encadre">Thématique</span></h1>
        <div class="thematiques">
            <div class="sujet">
                <img src="/images/illustration-intestin.svg" alt="">
                <div class="contenu">
                    <h2>Les effets de l'alcool sur la santé</h2>
                    <Link path="ressources/effetAlcool" textUnderline="S'" text="informer" />
                </div>
            </div>
            <div class="sujet">
                <img src="/images/illustration-pression.svg" alt="">
                <div class="contenu">
                    <h2>Pression sociale et alcool</h2>
                    <Link path="ressources/pressionSociale" textUnderline="S'" text="informer" />
                </div>
            </div>
            <div class="sujet">
                <img src="/images/illustration-accident.svg" alt="">
                <div class="contenu">
                    <h2>Nos conseil</h2>
                    <Link path="ressources/nosConseil" textUnderline="S'" text="informer" />
                </div>
            </div>
            <div class="sujet">
                <img src="/images/illustration-aide.svg" alt="">
                <div class="contenu">
                    <h2>Aide</h2>
                    <Link path="ressources/aide" textUnderline="S'" text="informer" />
                </div>
            </div>
        </div>
    </div>


<style>
    .content{
        max-width: 80vw;
        margin: auto;
        margin-top: 80px;
    }

    .encadre{
        background-color: var(--yellow);
        padding: 0 5px;
    }

    .thematiques{
        display: flex;
        flex-wrap: wrap;
        margin-top: 100px;
        gap: 50px;
    }

    .sujet{
        display: flex;
        gap: 30px;
        align-items: center;
        width: 500px;
    }

    .sujet img{
        width: clamp(100px, 20vw, 200px);
        height: auto;
    }

    .contenu{
        display: flex;
        flex-direction: column;
        gap: clamp(10px, 20vw, 25px);
    }

</style>
