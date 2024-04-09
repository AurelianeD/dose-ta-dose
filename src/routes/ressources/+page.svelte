<script>
	import '$lib/styles/styles.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<div class="content">
    <h1><span class="encadre">Thématique</span></h1>
    <div class="sujet">
        <img src="" alt="">
        <div class="contenu">

        </div>
    </div>
</div>

<Footer/>

<style>
    .content{
        padding: 50px 100px;
    }

    .encadre{
        background-color: var(--yellow);
        padding: 0 5px;
    }
</style>