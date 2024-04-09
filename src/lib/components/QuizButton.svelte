<!-- CheckboxCard.svelte -->
<script>
	import '$lib/styles/colors.css';
	export let answer = '';
	export let letter = '';
	export let checked = false;
	export let disabled = false;
</script>

<div class="card">
	<label style="display: flex; align-items: center;" class:checked>
		<input type="checkbox" bind:checked style="display: none;" {disabled}  />
		<div class="letter">{letter}.</div>
		<div class="answer">{answer}</div>
		{#if checked}
			<div class="checkmark">
				<svg
					width="20"
					height="17"
					viewBox="0 0 20 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.00004 16.42L0.790039 10.21L3.62004 7.38L7.00004 10.77L16.88 0.880005L19.71 3.71L7.00004 16.42Z"
						fill="#1A1A1A"
					/>
				</svg>
			</div>
		{/if}
	</label>
</div>

<style>
	.card label {
		user-select: none;
		font-family: 'DM Sans', sans-serif;
		border-radius: 5px;
		font-weight: 600;
		position: relative;
		display: flex;
		gap: 12px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 28vw;
		height: 160px;
		font-size: 20px;
		color: var(--black);
		background-color: #f3f1ed;
		cursor: pointer;
		transition: transform 0.3s ease;
	}
	.card label.checked {
		background-color: var(--yellow);
	}

	.card:active {
		transform-origin: 12.5vw;
		animation: press 0.4s ease;
	}

	@keyframes press {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	/*.card label.checked {*/
	/*	background-color: var(--yellow);*/
	/*}*/

	.letter {
		text-transform: uppercase;
	}
	.answer {
		min-width: 250px;
		width: 20vw;
		text-align: center;
	}
	.checkmark {
		position: absolute;
		top: 24px;
		right: 24px;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background-color: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}
	.checkmark svg {
		color: var(--black);
		width: 20px;
		height: 20px;
	}

	@media screen and (min-width: 0px) and (max-width: 300px) {
		.card label {
			width: 250px;
		}
		.card:active {
			transform-origin: 125px;
		}
	}
	@media screen and (min-width: 301px) and (max-width: 500px) {
		.card label {
			width: 350px;
		}
		.card:active {
			transform-origin: 175px;
		}
	}
	@media screen and (min-width: 501px) and (max-width: 800px) {
		.card label {
			width: 60vw;
		}
		.card:active {
			transform-origin: 30vw;
		}
	}
	@media screen and (min-width: 801px) and (max-width: 1000px) {
		.card label {
			width: 40vw;
		}
		.card:active {
			transform-origin: 20vw;
		}
	}
</style>
