<!-- Modale.svelte -->
<script lang="ts">
  import MainButton from '$lib/components/MainButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import {goto} from "$app/navigation";

  export let isModalOpen = false; // Propriété permettant de contrôler l'état de la modal
  export let title: string = "Quitter la partie en cours ?";
  export let description: string = "Attention, votre progression ne sera pas sauvegardée.";
  export let linkTextUnderline: string = "Je continue";
  export let linkText: string = "la partie";
  export let mainButtonText: string = "Je retourne à l'accueil";
  export let isPresentation: boolean = false;
  export let redirectPath: string = '/';

  const dispatch = createEventDispatcher();

  // Cette fonction sera appelée pour fermer la modal
  export function closeModal() {
    isModalOpen = false; // Fermer la modal en modifiant la valeur de la variable booléenne
    dispatch('close');
  }
</script>

{#if isModalOpen} <!-- Utilisation de la variable booléenne pour conditionner l'affichage de la modal -->
<div class="overlay">
  <div class="modal">
    {#if !isPresentation}
      <button class="icon-close" on:click={closeModal}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9163 9.08081L24.9188 7.08331L16.9997 15.0025L9.08051 7.08331L7.08301 9.08081L15.0022 17L7.08301 24.9191L9.08051 26.9166L16.9997 18.9975L24.9188 26.9166L26.9163 24.9191L18.9972 17L26.9163 9.08081Z" fill="#1A1A1A"/>
        </svg>
      </button>
    {/if}

    <p class="modal-title">{title}</p>
    <p class="modal-desc">{description}</p>
    <div class="flex-btn">
      <MainButton onClick={() => goto(redirectPath)}>{mainButtonText}</MainButton>
      <button on:click={closeModal} class="link container">
        <div class="containerText">
          <div>
            <p>{linkTextUnderline}</p>
            <div class="underline"></div>
          </div>
          <div>
            <p class="text">{linkText}</p>
            <div class="underlineHover"></div>
          </div>
        </div>
        <img src="/images/right-arrow.svg" alt="" />
      </button>
    </div>
  </div>
</div>
{/if}
<style>
  .icon-close {
    position: absolute;
    right: 24px;
    top: 24px;
    border: none;
    background: none;
    cursor: pointer;
  }
  .icon-close:hover{
    opacity: 0.6;
  }
  .overlay {
    z-index: 9999;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    min-width: 700px;
    height: 350px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .modal-title {
    padding: 0 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 32px;
  }

  .modal-desc {
    text-align: center;
    padding: 0 20px;
    font-size: 18px;
    margin-bottom: 48px;
  }

  .flex-btn{
    padding: 0 20px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 0px) and (max-width: 800px) {
    .icon-close {
    right: 16px;
    top: 16px;
  }

  .modal {
    min-width: 0;
    width: 90vw;
    height: 450px;
  }

  .modal-title {
    font-size: 20px;
  }

  .modal-desc {
    font-size: 16px;
  }

  }


  /* Link  */
  .container {
    border: none;
    background: none;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}
  .container p{
    font-size: 18px;
  }
	.containerText {
		display: flex;
	}
	.text {
		padding-left: 5px;
	}
	.link {
		text-decoration: none;
	}
	.underline {
		height: 3px;
		background-color: var(--yellow);
		width: 100%;
	}
	.underlineHover {
		height: 3px;
		background-color: var(--yellow);
		width: 0;
		transition: 0.3s;
	}
	.container:hover .underlineHover {
		width: 100%;
	}
	img {
		margin-left: 0;
		transition: 0.3s;
	}
	.container:hover img {
		margin-left: 5px;
	}
</style>




<!-- Afficher -->

<!-- import Modale from '$lib/components/Modale.svelte'; // Importez votre composant de modal
let isModalOpen = false;

function openModal() {
  isModalOpen = true;
}
function handleModalClose() {
  isModalOpen = false;
} -->
<!-- <Modale {isModalOpen} on:close={handleModalClose} />
<button on:click={openModal}>Ouvrir la modal</button> -->
