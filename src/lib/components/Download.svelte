<script lang="ts">
	export let path: string;
	export let textUnderline: string;
	export let text: string;
	export let textSubtitle: string;
</script>

<a href={path} class="link container">
	<img src="/images/download-arrow.svg" alt="" />
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
		align-items: center;
		gap: 16px;
		cursor: pointer;
	}
    .containerText{
        display: flex;
        flex-direction: column;
        gap: 5px;
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
	img {
        width: 20px;
		margin-top: 0;
		transition: 0.3s;
	}
	.container:hover img {
		margin-top: 7px;
	}
</style>
