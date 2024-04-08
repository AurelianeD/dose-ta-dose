<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";

    let questionNumber = 0;

</script>

<h1>Présentation du jeu</h1>

<Quiz {questionNumber} onChangeQuestion={() => questionNumber = questionNumber + 1} />
