<script lang="ts">
    export let points: number;
</script>

<div class="pointsQuiz">
    <div class="barre">
        <div class="progress" style="width: {points}%;"></div>
    </div>
    <div class="texte">
       <p> {points} points restants</p>
    </div>
</div>

<style>

    .pointsQuiz{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        width: 400px;
        margin: 10px 0;
    }

    .texte{
        font-family: 'DM-Sans', sans-serif;
        font-weight: 300;
        color: var(--black);
        font-size: 16px;
        text-align: start;
    }

    .barre {
        width: 50%;
        border-radius: 10px;
        height: 10px;
        background-color: var(--black);
    }

    .progress {
        border-radius: 10px;
        height: 100%;
        background-color: var(--yellow);
        transition: width 0.5s ease;
    }

    @media screen and (min-width: 0px) and (max-width: 500px) {
        .pointsQuiz{
            flex-direction: column-reverse;
        }
    }

</style>
