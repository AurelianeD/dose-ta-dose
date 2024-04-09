<script>
	import '$lib/styles/styles.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<Header />
    <div class="content">
        <h1><span class="encadre">Thématique</span></h1>
        <div class="thematiques">
            <div class="sujet">
                <img src="/static/images/illustration-intestin.svg" alt="">
                <div class="contenu">
                    <h2>Les effets de l'alcool sur la santé</h2>
                    <Link path="ressources/effetAlcool" textUnderline="Je m'informe" text="sur l'alcool" />
                </div>
            </div>
            <div class="sujet">
                <img src="/static/images/illustration-pression.svg" alt="">
                <div class="contenu">
                    <h2>Pression sociale et alcool</h2>
                    <Link path="ressources/pressionSociale" textUnderline="Je m'informe" text="sur l'alcool" />
                </div>
            </div>
            <div class="sujet">
                <img src="/static/images/illustration-aide.svg" alt="">
                <div class="contenu">
                    <h2>Aide</h2>
                    <Link path="ressources/aide" textUnderline="Je m'informe" text="sur l'alcool" />
                </div>
            </div>
        </div>
    </div>

<Footer/>

<style>
    .content{
        max-width: 75vw;
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
        width: 540px;
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