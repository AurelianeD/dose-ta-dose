<script lang="ts">
	import '$lib/styles/styles.css'
	import  {quizData} from '$lib/data/quiz';
	import type {QuizData} from '$lib/data/quiz'
	import QuizButton from '$lib/components/QuizButton.svelte';
	import MainButton from '$lib/components/MainButton.svelte';
	import PointQuiz from "$lib/components/PointQuiz.svelte";
	import MisePoint from "$lib/components/MisePoint.svelte";
	export let questionNumber: number;
	export let onChangeQuestion: (value: number) => void;
	export let onEnd: () => void;
	export let isPresentation: boolean;
	export let points: number;

	let showAnswer = false;
	let bet = [0,0,0];

	$: leftPointToBet = 10 - bet.reduce((prev, curr) => prev + curr)
	$: data = quizData[questionNumber] as QuizData;
	$: goodAnswer = data.choices.find(item => item.isGoodAnswer === true)
	$: goodAnswerIndex = data.choices.indexOf(goodAnswer);
	$: betCopy = [...bet];
	$: betCopy.splice(goodAnswerIndex, 1);
	$: lostPoints = betCopy.reduce((prev, curr) => prev + curr)

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
		bet = [0,0,0];
		if(questionNumber === 9){
			onEnd()
		}else {
			onChangeQuestion(lostPoints);
		}
	}


</script>

<div class="container">
	<h3>Question {data.index} / 10</h3>
	<h2 class="title">{data.question}</h2>
	<div class="choicesContainer">
		{#each data.choices as choice, index}
			<div>
				<QuizButton
					answer={choice.text}
					letter={index + 1}
					checked={showAnswer && choice.isGoodAnswer}
					disabled={true}
				/>
				{#if !isPresentation}
					<MisePoint {leftPointToBet} {bet} misePointIndex={index} onBet={(value) => bet[index] = value} />
				{/if}
			</div>
		{/each}
	</div>
	<div class="button">
		{#if !showAnswer}
				<MainButton
					onClick={() => {
						showAnswer = true;
						scrollToView();
					}}
					disabled={leftPointToBet > 0 && !isPresentation}
				>{isPresentation ? 'Voir la réponse' : 'Valider'}</MainButton>
		{/if}
	</div>
	{#if !isPresentation}
		<div class="points" class:button={!showAnswer}>
			<p class="textLeft">Tu as 10 points à miser par questions.</p>
			<PointQuiz {points} />
		</div>
	{/if}
	{#if showAnswer}
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
		margin: 100px 100px 100px;
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
	.points{
		align-self: flex-start;
	}
	.textLeft{
		text-align: left;
	}
	@media screen and (min-width: 0px) and (max-width: 1000px) {
		.container {
			margin-top: 60px;
		}
		.title{
			margin-bottom: 32px
		}
		.choicesContainer {
			flex-direction: column;
			gap: 10px;
		}
		.answerContainer{
			margin: 50px 0;
		}
	}
</style>
