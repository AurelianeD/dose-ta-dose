<script lang="ts">
	import '$lib/styles/fonts.css';
	export let buttonSize: 'small' | 'big' = 'small';
	export let onClick: () => void;
	export let disabled: boolean;
</script>

<button
	class={`main-button-${buttonSize} container main-button`}
	on:click={onClick}
	{disabled}
>
	<slot />
</button>

<style>
	.container {
		border: none;
		background-color: var(--yellow);
		padding: 12px 32px;
		border-radius: 8px;
    cursor: pointer;
	}
	.container:hover {
		background-color: var(--yellow-hover);
	}
	.container:active {
		background-color: var(--yellow-clicked);
	}
	.container:disabled{
		background-color: #B3B3B3;
		opacity: 0.7;
		cursor: not-allowed;
	}
</style>
