<script>
	import '$lib/styles/styles.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import Link from '$lib/components/Link.svelte';
	import MisePoint from '$lib/components/MisePoint.svelte';
	import QuizButton from '$lib/components/QuizButton.svelte';
</script>

<div class="contenu">
    <h1>A <span class="encadre">propos</span></h1>
    <div class="paragraphe">
      <p>Potter ipsum wand elf parchment wingardium. Lion spell beaded grayback umbrella boy norwegian fawkes cakes. Beaded map whomping aurors ginny mimubulus cores cabinet giant lies. Every stan goblin suck bedroom lady juice forbidden weekly.<br><br>Lorem ipsum dolor sit amet consectetur. Massa feugiat rhoncus mi congue fames mattis non nibh. Lacus tellus aenean risus pellentesque risus massa faucibus nec nullam. Ornare viverra nibh praesent sed pharetra rutrum ante maecenas. A amet.</p>
    </div>
    <div class="paragraphe">
        <h2>Mimubulus cores cabinet giant</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Massa feugiat rhoncus mi congue fames mattis non nibh. Lacus tellus aenean risus pellentesque risus massa faucibus nec nullam. Ornare viverra nibh praesent sed pharetra rutrum ante maecenas.</p>
        <ul>
          <li> <Link path="https://alcooliques-anonymes.fr/" textUnderline="Massa" text="consectetur" /> </li>
          <li> <Link path="https://www.vielibre.org/" textUnderline="Pellentesque" text="rutrum ante" /> </li>
          <li> <Link path="https://www.lesamisdelasante.org/" textUnderline="Congue pharetra" text="rutrum ante" /> </li>
        </ul>
    </div>
</div>

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

    @media screen and (max-width: 1000px){
      .contenu{
        max-width: 70vw;
      }

      .paragraphe{
        max-width: 80vw;
      }
    }

</style>