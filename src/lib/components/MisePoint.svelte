<script lang="ts">

    export let misePointIndex: number
    export let leftPointToBet: number;
    export let bet: number[];
    export let onBet: (value: number) => void;
    export let currentMiseIndex: number;


    $: disabled = (valeur: number) => {
        let counter: number = 0;

        bet.map((item) => {if (item === 5 ){counter = counter+1}})
        console.log(counter)
        if(bet[misePointIndex] === valeur){
            return false;
        }
        if(counter === 2){
            return leftPointToBet < valeur || bet[misePointIndex] === 0;
        }else{
            return leftPointToBet < valeur && bet[misePointIndex] === 0;
        }
    }




</script>

<div class="mise" class:borderYellow={bet[misePointIndex] !== 0}>
    <p>Je mise :</p>
    <div class="valeurs">
        {#each [0, 5, 10] as valeur}
            <button
                class="valeurs-btn"
                class:valeurs-btn-disable={disabled(valeur)}
                class:valeurs-btn-act={bet[misePointIndex] === valeur}
                on:click={() => {
                    onBet(valeur)
                }}
                disabled= {disabled(valeur)}
            >
                {valeur}
            </button>
        {/each}
    </div>
    <p>points</p>
</div>

<style>
    .mise{
        border-radius: 5px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28vw;
        height: 50px;
        background-color: var(--beige);
        gap: 24px;
    }
    .borderYellow{
        border: solid var(--yellow) 2px;
        box-sizing: border-box;
    }

    .mise p{
        font-weight: 300;
        font-size: 18px;
    }

    .valeurs{
        display: flex;
        gap: 8px;
    }

    .valeurs-btn{
        font-weight: 700;
        font-size: 20px;
        border: none;
        border-radius: 8px;
        width: 50px;
        height: 35px;
        background-color: #fff;
        cursor: pointer;
    }

    .valeurs-btn-act{
        color: var(--black);
        background-color: var(--yellow);
    }

    .valeurs-btn-disable{
        color: #B3B3B3;
        opacity: 0.7;
        cursor: not-allowed;
    }

    .valeurs-btn:hover{
        background-color: var(--yellow-hover);
    }

    .valeurs-btn-disable:hover{
        background-color: #fff;
    }

    .valeurs-btn:active {
        color: #fff;
		background-color: var(--yellow-clicked);
	}
</style>
