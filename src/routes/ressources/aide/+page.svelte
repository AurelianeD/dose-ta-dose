<script>
	import '$lib/styles/styles.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<Header />
<div class="contenu">
    <h1><span class="encadre">Aide</span></h1>
    <div class="paragraphe">
      <p>Si toi ou quelqu'un que tu connais luttez contre l'alcoolisme, c'est super important de savoir qu'il y a de l'aide à portée de main. Demander de l'aide, n'est pas un signe de faiblesse. <br><br> Au contraire, ça montre à quel point tu es déterminé à reprendre le contrôle de ta vie. <br><br> L'alcoolisme est une maladie qui peut avoir des effets dévastateurs sur la vie d'un individu, mais avec un soutien approprié, il est possible de surmonter cette dépendance.<br><br> Rappelle-toi : il n'y a aucune honte à tendre la main pour obtenir de l'aide. Alors, si tu as besoin d'un coup de main ou si tu veux simplement en parler, tu es au bon endroit car nous sommes là pour t’aider. <br><br> Il existe différents moyens de se faire aider ou bien même d’en parler autour de toi pour cela tu peux :</p>
    </div>
    <div class="paragraphe">
        <h2>Appeler :</h2>
        <p>Tout d’abord il existe des numéros à ta disposition pour que tu puisses parler anonymement de tes problèmes.</p>
        <ul>
          <li><span class="bold">Alcool Info Service au 0 980 980 930, de 8 h à 2 h, 7 jours sur 7,</span> est un appel non surtaxé, au prix d'une communication locale depuis un poste fixe. </li>
          <li><span class="bold">Fil Santé Jeunes : 0800 235 236</span> - (tous les jours de 9h à 23h).<br> C’est un appel gratuit depuis un poste fixe. Ce service est bien entendu anonyme et gratuit pour les 12-25 ans.</li>
          <li>Tu peux aussi parler anonymement sur des plateformes d’aide, sur lesquelles des personnes spécialisées pourront répondre à tes questions et à tes inquiétudes, comme par exemple sur <span class="bold">alcool-info-service.fr</span></li>
    </div>
    <div class="paragraphe">
        <h2>En parler à son médecin traitant : </h2>
        <p>Tu peux tout d’abord commencer par aller voir ton médecin généraliste, c’est un bon point de départ ! Il pourra alors évaluer ton état de santé et t’orienter vers les bonnes personnes ou vers des programmes de traitement adaptés à ta situation.</p>
    </div>
    <div class="paragraphe">
        <h2>Intégrer des groupes d’entraide :</h2>
        <p>Tu peux aussi essayer de rejoindre des groupes d’entraide, sur la base de réunions régulières dans lesquels tu peux parler ou écouter les expériences de personnes également concernées. Il en existe plusieurs dans ta ville comme par exemple :</p>
        <ul>
          <li> <Link path="https://alcooliques-anonymes.fr/" textUnderline="Alcoolique" text="anonyme" /> </li>
          <li> <Link path="https://www.vielibre.org/" textUnderline="Mouvement" text="Vie libre" /> </li>
          <li> <Link path="https://www.lesamisdelasante.org/" textUnderline="Fédération nationale" text="des amis de la santé" /> </li>
        </ul>
    </div>
    <div class="paragraphe">
        <h2>Se diriger vers des centres de traitement spécialisés : </h2>
        <p>Il existe aussi des centres de traitement des dépendances ou des addictions dans ta région qui pourront t’aider dans ta démarche en te prenant en charge. Ces centres offrent souvent des programmes de désintoxication, de réadaptation et de thérapie pour des personnes souffrant de problèmes d'alcoolisme.i sont des maladies extrêmement  dangereuses pour ton corps.</p>
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
        max-width: 40vw;
    }

    li{
      margin: 20px 40px;
        line-height: 140%;
      list-style-type: disc;
      font-family: 'DM Sans', sans-serif;
    }

    .bold{
      font-weight: 600;
    }

    @media screen and (max-width: 1000px){
      .contenu{
        max-width: 70vw;
      }

      .paragraphe{
        max-width: 80vw;
      }
    }

</style>