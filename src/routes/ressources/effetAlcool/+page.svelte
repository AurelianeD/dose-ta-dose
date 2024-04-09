<script>
	import '$lib/styles/styles.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<Header />
<div class="contenu">
    <h1>Les effets de l'alcool sur <span class="encadre">ta santé</span></h1>
    <p>Boire trop d'alcool, c'est comme jouer avec sa santé : ça peut vraiment mal tourner.<br>En effet, la consommation excessive d'alcool peut avoir des répercussions graves sur la santé. Perturbations du cerveau, altération de l'humeur, du comportement, de la clarté de pensée. <br><br> Mais voyons cela plus en détail :</p>
    <div class="paragraphe">
        <h2>Ton cerveau</h2>
        <p>L'alcool,  ça empêche ton cerveau de bien fonctionner, tu peux te sentir tout drôle, avoir du mal à te concentrer ou à te souvenir des choses, et même voir ton humeur faire des montagnes russes sans raison.</p>
    </div>
    <div class="paragraphe">
        <h2>Ton cœur</h2>
        <p>Ton cœur, c'est un peu le chef d'orchestre de ton corps. Avec trop d'alcool, il peut commencer à battre de manière irrégulière, de manière trop fort ou trop faible. Cela peut même aller jusqu'à causer des problèmes graves comme des accidents vasculaires cérébraux (quand un vaisseau sanguin dans le cerveau se bloque ou éclate) ou de l'hypertension (quand la pression de ton sang contre les parois de tes artères est trop forte).</p>
    </div>
    <div class="paragraphe">
        <h2>Ton cerveau</h2>
        <p>Savais-tu que boire trop d'alcool peut aussi augmenter le risque d'avoir certains cancers ? <br> Oui, même ceux qu'on n'imagine pas, comme ceux de la bouche, de la gorge, du foie, du sein, et d'autres parties du corps. </p>
    </div>
    <div class="paragraphe">
        <h2>Un système immunitaire fragilisé</h2>
        <p>L'alcool peut affaiblir ton armure contre les maladies, ce qui peut rendre ton corps plus vulnérable face à des ennemis comme la pneumonie ou la tuberculose, qui sont des maladies extrêmement  dangereuses pour ton corps.</p>
    </div>
</div>
<Footer/>

<style>
    .contenu{
        max-width: 60vw;
        margin: auto;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    p {
        max-width: 40vw;
        line-height: 140%;
    }

    .encadre{
        background-color: var(--yellow);
        padding: 0 5px;
    }

    .paragraphe{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>