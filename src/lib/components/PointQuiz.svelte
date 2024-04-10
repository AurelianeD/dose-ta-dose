<script lang="ts">
    export let points: number;
</script>

<div class="pointsQuiz">
    <div class="points">
        <div class="nbPoints">
            {points}
        </div>
        <div class="texte">
            points restant
        </div>
    </div>
    <div class="barre">
        <div class="progress" style="width: {points}%;"></div>
    </div>
</div>

<style>

    .pointsQuiz{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 27vw;
        padding: 10px;
    }

    .points{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'DM-Sans', sans-serif;
        font-weight: 600;
        color: var(--black);
        font-size: 16px;
        text-transform: uppercase;
    }

    .nbPoints{
        background-color: var(--yellow);
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 20px;
    }

    .barre {
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
