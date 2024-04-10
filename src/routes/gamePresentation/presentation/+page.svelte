<script lang="ts">
    import Quiz from '$lib/components/Quiz.svelte';
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    let questionNumber = 0;

    let footer: HTMLElement;

    onMount(() => {
        footer = document.getElementById('footer')
        if(footer){
            footer.style.display = 'none'
        }
    })

</script>

<Quiz
    {questionNumber}
    onChangeQuestion={() => (questionNumber = questionNumber + 1)}
    onEnd={() => goto('/gamePresentation/end')}
    isPresentation={true}
/>
