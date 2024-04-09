<script lang="ts">
	import { quizData } from '$lib/data/quiz';
	import QuizButton from '$lib/components/QuizButton.svelte';
	import MainButton from '$lib/components/MainButton.svelte';
	export let questionNumber: number;
	export let onChangeQuestion: () => void;

	let showAnswer = false;

	$: data = quizData[questionNumber];
</script>

<div class="container">
	<h3>Question {data.index} / 10</h3>
	<h2>{data.question}</h2>
	<div class="choicesContainer">
		{#each data.choices as choice, index}
			<QuizButton answer={choice.text} letter={index + 1} />
		{/each}
	</div>
	{#if !showAnswer}
		<MainButton onClick={() => (showAnswer = true)}>Voir la réponse</MainButton>
	{:else}
		<h3>Réponse</h3>
		<h2>{data.answer}</h2>
		<MainButton
			onClick={() => {
				showAnswer = false;
				onChangeQuestion();
			}}>Question suivante</MainButton
		>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.choicesContainer {
		display: flex;
		gap: 10px;
	}
</style>
