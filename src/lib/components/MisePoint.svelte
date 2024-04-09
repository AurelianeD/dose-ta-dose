<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let activeIndex = -1; 

    function toggleMise(index:number) {
        activeIndex = index; 
    }

</script>

<div class="mise">
    <p>Miser</p>
    <div class="valeurs">
        {#each [0, 5, 10] as valeur, index}
            <button class="valeurs-btn" class:valeurs-btn-act={activeIndex === index} on:click={() => toggleMise(index)}>{valeur}</button>
        {/each}
    </div>
    <p>points</p>
</div>

<style>
    .mise{
        border-radius: 5px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28vw;
        height: 50px;
        background-color: var(--beige);
        gap: 24px;
    }

    .mise p{
        font-weight: 800;
        font-size: 20px;
        text-transform: uppercase;
    }

    .valeurs{
        display: flex;
        gap: 8px;
    }

    .valeurs-btn{
        font-weight: 700;
        font-size: 20px;
        border: none;
        border-radius: 8px;
        width: 50px;
        height: 35px;
        background-color: #fff;
        cursor: pointer;
    }

    .valeurs-btn-act{
        color: #fff;
        background-color: var(--yellow-clicked);
    }

    .valeurs-btn-disable{
        color: #B3B3B3;
        opacity: 0.7;
        cursor: not-allowed;
    }

    .valeurs-btn:hover{
        background-color: var(--yellow-hover);
    }

    .valeurs-btn-disable:hover{
        background-color: #fff;
    }

    .valeurs-btn:active {
        color: #fff;
		background-color: var(--yellow-clicked);
	}

</style>