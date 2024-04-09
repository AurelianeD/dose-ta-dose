<script lang="ts">
	import '$lib/styles/styles.css'
	import  {quizData} from '$lib/data/quiz';
	import type {QuizData} from '$lib/data/quiz'
	import QuizButton from '$lib/components/QuizButton.svelte';
	import MainButton from '$lib/components/MainButton.svelte';
	export let questionNumber: number;
	export let onChangeQuestion: () => void;
	export let onEnd: () => void;

	let showAnswer = false;

	$: data = quizData[questionNumber] as QuizData;

	function scrollToView(){
		setTimeout(() => {
			let answerElement =	document.getElementById('top');

			if(!answerElement){
				return;
			}
			answerElement.scrollIntoView({behavior: 'smooth'})
		}, 300)
	}

	function onNextQuestion(){
		showAnswer = false;
		if(questionNumber === 9){
			onEnd()
		}else {
			onChangeQuestion();
		}
	}


</script>

<div class="container">
	<h3>Question {data.index} / 10</h3>
	<h2 class="title">{data.question}</h2>
	<div class="choicesContainer">
		{#each data.choices as choice, index}
			<QuizButton answer={choice.text} letter={index + 1} checked={showAnswer && choice.isGoodAnswer} disabled={true}/>
		{/each}
	</div>
	{#if !showAnswer}
		<div class="button">
			<MainButton onClick={() => {
				showAnswer = true;
				scrollToView()
			}}>Voir la réponse</MainButton>
		</div>
	{:else}
		<div class="answerContainer" id="top">
			<p class="answerTitle">Réponse</p>
			<div class="textContainer">
				<p class="bigText">{data.answer}</p>
			</div>
			<MainButton
				onClick={() => {
					onNextQuestion()
				}}>{questionNumber === 9 ? 'Terminer' : 'Question suivante'}</MainButton
			>
		</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 200px;
	}
	.choicesContainer {
		display: flex;
		gap: 10px;
	}
	.title{
		margin-top: 30px;
		margin-bottom: 100px
	}
	.button{
		margin-top: 50px;
	}
	.textContainer{
		max-width: 60%;
		line-height: 40px;
	}
	.text{
		font-family: "DM Sans", sans-serif;
		font-size: 32px;
		font-weight: 300;
	}
	.answerTitle{
		font-family: "DM Sans", sans-serif;
		font-size: 24px;
		font-weight: 600;
	}
	.answerContainer{
		display: flex;
		align-items: center;
		gap: 50px;
		flex-direction: column;
		margin: 100px 0;
	}
</style>
