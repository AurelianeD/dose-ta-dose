<script lang="ts">
	export let path: string;
	export let textUnderline: string;
	export let text: string;
	export let textSubtitle: string;
</script>

<a href={path} class="link container" download>
    <div class="download_arrow">
        <img class="arrow" src="/images/download-arrow.svg" alt="" />
        <img class="bar" src="/images/download-bar.svg" alt="" />
    </div>
	<div class="containerText">
        <div class="title">
            <div>
                <p>{textUnderline}</p>
                <div class="underline"></div>
            </div>
            <div>
                <p class="text">{text}</p>
                <div class="underlineHover"></div>
            </div>
        </div>
        <p class="subtitle">{textSubtitle}</p>
	</div>
</a>

<style>
	.container {
		display: flex;
		gap: 10px;
		cursor: pointer;
	}
    .containerText{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .download_arrow{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
	.title {
		display: flex;
	}
	.text {
		padding-left: 5px;
	}
	.link {
		text-decoration: none;
	}
	.underline {
		height: 3px;
		background-color: var(--yellow);
		width: 100%;
	}
    .subtitle{
        font-weight: 200;
        font-style: italic;
    }
	.underlineHover {
		height: 3px;
		background-color: var(--yellow);
		width: 0;
		transition: 0.3s;
	}
	.container:hover .underlineHover {
		width: 100%;
	}
	.arrow {
		margin-top: 0;
		transition: 0.3s;
	}
    .bar{
        position: absolute;
		margin-top: 18px;
    }
	.container:hover .arrow {
		margin-top: 3px;
	}
</style>
