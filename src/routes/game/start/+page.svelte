<script lang="ts">
    import Quiz from '$lib/components/Quiz.svelte';
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    let questionNumber = 0;
    let points = 100;

    let footer: HTMLElement;

    function updatePoint(value: number){
        console.log(value)
        points = points - value
    }

    onMount(() => {
        footer = document.getElementById('footer')
        if(footer){
            footer.style.display = 'none'
        }
    })

</script>

<Quiz
    {questionNumber}
    onChangeQuestion={(value) => {questionNumber = questionNumber + 1; updatePoint(value)}}
    onEnd={() => goto('/gamePresentation/end')}
    isPresentation={false}
    {points}
/>
