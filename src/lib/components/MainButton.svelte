<script lang="ts">
    import '$lib/styles/fonts.css'
    export let buttonSize: 'small' | 'big' = 'small'
    export let onClick: () => void;
</script>

<button class={`main-button-${buttonSize} container main-button`} on:click={onClick}>
    <slot />
</button>

<style>
    .container{
        border: none;
        background-color: var(--yellow);
        padding: 12px 32px;
        border-radius: 8px;
    }
    .container:hover{
        background-color: var(--yellow-hover);
    }
    .container:active{
        background-color: var(--yellow-clicked);
    }
</style>
