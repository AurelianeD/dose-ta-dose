<script lang="ts">
  import '$lib/styles/fonts.css'
  export let path: string;
  export let buttonType: 'main' | 'secondary' = 'main'
</script>

<a href={path} class="container-choice {buttonType}">
  <span class="title-choice"><slot name="title">Titre</slot></span>
  <slot class="description-choice" name="description">Description</slot>
  <img class="deco-choicebtn" src="/images/deco-choicebutton.svg" alt="" />
</a>

<style>
  .deco-choicebtn{
    position: absolute;
    left: -15px;
    bottom: -15px;
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width:800px){
    .deco-choicebtn{
      width: 120px;
      height: 120px;
      left: -10px;
    bottom: -10px;
  }
  }
  .container-choice.main{
    background-color: var(--yellow);
  }
  .container-choice.main:hover {
    background-color: var(--yellow-hover);
  }
  .container-choice.main:active {
    background-color: var(--yellow-clicked);
  }
  .container-choice.secondary{
    background-color: var(--beige);
  }
  .container-choice.secondary:hover {
    background-color: var(--beige-hover);
  }
  .container-choice.secondary:active {
    background-color: var(--white);
  }
  .container-choice {
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; /* Ajustez l'alignement du texte selon vos besoins */
    text-decoration: none;
  }

  .title-choice {
    font-size: 20px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 8px;
  }
  .description-choice {
    font-size: 16px;
    font-weight: 400;
    color: var(--black);
  }
</style>
