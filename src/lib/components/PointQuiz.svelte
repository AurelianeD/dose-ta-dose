<script lang="ts">
    export let points: number;
</script>

<div class="pointsQuiz">
    <div class="barre">
        <div class="progress" style="width: {points}%;"></div>
    </div>
    <div class="texte">
        {points} points restants
    </div>
</div>

<style>

    .pointsQuiz{
        display: flex;
        align-items: center;
        gap: 16px;
        width: 35vw;
        margin: 10px 0;
    }

    .texte{
        width: 100%;
        font-family: 'DM-Sans', sans-serif;
        font-weight: 300;
        color: var(--black);
        font-size: 16px;
        text-align: start;
    }

    .barre {
        width: 100%;
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

</style>
