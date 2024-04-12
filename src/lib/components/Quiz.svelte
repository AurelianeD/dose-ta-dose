<script lang="ts">
	import '$lib/styles/styles.css'
	import  {quizData} from '$lib/data/quiz';
	import {beforeNavigate} from "$app/navigation";
	import type {QuizData} from '$lib/data/quiz'
	import QuizButton from '$lib/components/QuizButton.svelte';
	import MainButton from '$lib/components/MainButton.svelte';
	import PointQuiz from "$lib/components/PointQuiz.svelte";
	import MisePoint from "$lib/components/MisePoint.svelte";
	import Modale from "$lib/components/Modale.svelte";

	export let questionNumber: number;
	export let onChangeQuestion: (value: number) => void;
	export let onEnd: () => void;
	export let isPresentation: boolean;
	export let points: number;

	let showAnswer = false;
	let bet = [0,0,0];
	let isModalOpen = false;
	let innerWidth: number;
	let currentMiseIndex: number;

	$: leftPointToBet = 10 - bet.reduce((prev, curr) => prev + curr)
	$: data = quizData[questionNumber] as QuizData;
	$: goodAnswer = data.choices.find(item => item.isGoodAnswer === true)
	$: goodAnswerIndex = data.choices.indexOf(goodAnswer);
	$: betCopy = [...bet];
	$: betCopy.splice(goodAnswerIndex, 1);
	$: lostPoints = betCopy.reduce((prev, curr) => prev + curr)

	function onNextQuestion(){
		showAnswer = false;
		bet = [0,0,0];
		if(questionNumber === 9){
			onEnd()
		}else {
			onChangeQuestion(lostPoints);
		}
	}

	function openModal(){
		isModalOpen = true;
	}

	function closeModal(){
		isModalOpen = false;
	}

	beforeNavigate(navigation => {
		if(!isPresentation && !isModalOpen && questionNumber < 9){
			navigation.cancel()
			openModal();
		}
	})


	function scrollToView(){
		setTimeout(() => {
			let answerElement =	document.getElementById('top');

			if(!answerElement){
				return;
			}
			answerElement.scrollIntoView({behavior: 'smooth'})
		}, 300)
	}

	$: isModalOpen = innerWidth < 1000;

</script>

<svelte:window bind:innerWidth  />

<div class="container">
	<h3>Question {data.index} / 10</h3>
	<h2 class="title">{data.question}</h2>
	{#if !isPresentation}
		<div class="pointQuiz"><PointQuiz {points} /></div>
	{/if}
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
					<MisePoint
						{leftPointToBet}
						{bet}
						misePointIndex={index}
						onBet={(value) => {bet[index] = value; currentMiseIndex === index}}
					/>
				{/if}
			</div>
		{/each}
	</div>

	<div class="button">
		{#if !isPresentation}
			{#if !showAnswer}
			<div class="resteMise">
				<p>Tu as 10 points à miser par questions.</p>
			</div>
			{/if}
		{/if}
		{#if !showAnswer}
				<MainButton
					onClick={() => {
						showAnswer = true;
						scrollToView()
					}}
					disabled={leftPointToBet > 0 && !isPresentation}
				>
					{isPresentation ? 'Voir la réponse' : 'Valider'}
				</MainButton>
		{/if}
	</div>

	{#if showAnswer}
		<div class="answerContainer">
			<p class="answerTitle" id="top">Réponse</p>
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

<Modale
	{isModalOpen}
	on:close={closeModal}
	title={isPresentation ? 'Prezz' : 'Quitter la partie en cours ?'}
	description={isPresentation ? 'Prezzz' : 'Attention, votre progression ne sera pas sauvegardée.'}
	linkText={isPresentation ? 'Prezz' : 'la partie'}
	linkTextUnderline={isPresentation ? 'Prezz' : 'Je continue'}
	mainButtonText={isPresentation ? 'Prezz' : "Je retourne à l'accueil"}
/>

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
		max-width: 60vw;
		margin-bottom: 24px;
	}
	.pointQuiz{
		margin-bottom: 100px;
	}
	.button{
		margin-top: 72px;
	}
	.resteMise{
		margin-bottom: 16px;
	}
	.button a{
		text-decoration: none;
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
	@media screen and (min-width: 0px) and (max-width: 1000px) {
		.container {
			margin-top: 60px;
		}
		.title{
			width: 85vw;
			margin-bottom: 32px
		}
		.pointQuiz{
			margin-bottom: 50px;
		}
		.choicesContainer {
			flex-direction: column;
			gap: 10px;
			width: 85vw;
		}
		.answerContainer{
			margin: 50px 0;
		}
	}
</style>
