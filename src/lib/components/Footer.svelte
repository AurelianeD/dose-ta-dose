<script>
	import { goto } from '$app/navigation';
	import '$lib/styles/styles.css';
	const currentYear = new Date().getFullYear();
</script>

<footer id="footer">
	<p class="copyright">© Dose ta dose {currentYear}</p>
	<div class="flex-nav">
		<button class="nav-style underline" on:click={() => goto('about')}>À propos</button>
		<button class="nav-style underline" on:click={() => goto('planSite')}>Plan du site</button>
		<button class="nav-style underline" on:click={() => goto('mentions-legales')}>Mentions légales</button>
	</div>
	<img class="logo-footer" src="/images/logo-footer.svg" alt="logo dose ta dose" />
</footer>

<style>
  	.underline::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -8px;
		width: 100%;
		height: 3px;
		transition: background-color 0.3s ease;
	}

	.underline:hover::after {
		background-color: var(--yellow);
	}
	footer {
		background-color: var(--white);
		display: flex;
		justify-content: space-between;
		align-items: start;
		padding: 10px 5vw;
		height: 50px;
		margin-top: 100px;
	}
	.copyright {
		font-family: 'DM Sans', sans-serif;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 16px;
	}

	.nav-style {
		font-family: 'DM Sans', sans-serif;
		background: none;
		border: none;
		text-transform: uppercase;
		font-weight: 600;
		cursor: pointer;
		font-size: 16px;
		text-align: left;
    position: relative;
	}

	.nav-style:hover {
		opacity: 0.8;
	}
	.logo-footer {
		display: none;
	}
	@media screen and (max-width: 260px) {
		.nav-style {
			font-size: 14px;
		}
		.logo-footer {
			width: 70vw;
		}
	}
	@media screen and (max-width: 1000px) {
		.copyright {
			font-size: 14px;
		}
		footer {
			gap: 48px;
			height: auto;
			flex-direction: column-reverse;
			align-items: start;
		}
		.flex-nav {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 16px;
		}
		.logo-footer {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
