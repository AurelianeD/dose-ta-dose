<script lang="ts">
    import '$lib/styles/fonts.css'
	import { goto } from '$app/navigation';

    let isMenuOpen = false;
	let arrowSvg = '/images/fleche-bas.svg';

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
		arrowSvg = isMenuOpen ? '/images/fleche-haut.svg' : '/images/fleche-bas.svg';

        // Obtenir le menu
        const menu = document.querySelector('.menu') as HTMLElement | null;
        if (menu) {
            // Ajouter ou retirer la classe 'open' en fonction de isMenuOpen
            menu.classList.toggle('open', isMenuOpen);
        }
    }

    function handleItemClick(route: string) {
        goto(route);
        toggleMenu();
    }
</script>




<header>
    <div class="flex-header">
        <button class="nav-style" on:click={() => goto('/')}>
            <img src="/images/logo.svg" alt="logo dose ta dose" />
        </button>
        <nav>
            <ul class="menu" class:open={isMenuOpen}>
                <li><button class="nav-style underline" on:click={() => handleItemClick('/about')}>à propos</button></li>
				<hr class="display-mobile">
                <li><button class="nav-style underline" on:click={() => handleItemClick('/ressources')}>ressources</button></li>
				<hr class="display-mobile">
                <li><button class="nav-style underline" on:click={() => handleItemClick('/#jeu')}>Le test</button></li>
				<hr class="display-mobile">
                <li><button class="nav-style underline" on:click={() => handleItemClick('/guideAtelier')}>organiser un atelier</button></li>
				<hr class="display-mobile">
            </ul>
            <button class="mobile" on:click={toggleMenu}>
                <span class="nav-style">menu</span>
                <img src={arrowSvg} alt="" />
            </button>
        </nav>
    </div>
    <hr class="ligne">
</header>


<style>
	header{
		position: fixed;
		width: 100%;
		z-index: 999;
	}
    .display-mobile{
        display: none;
    }
	.flex-header {
		background-color: var(--white);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 5vw;
	}
	.menu{
		display: flex;
		gap: 24px;
		align-items: center;
	}

	.ligne {
		width: 90%;
		border: 1px solid var(--black);
		margin: 0 auto 0 auto;
	}

	.nav-style {
		background: none;
		border: none;
		line-height: 100%;
		font-family: 'DM-Sans', sans-serif;
		font-weight: 500;
		color: var(--black);
		font-size: 16px;
		text-transform: uppercase;
		position: relative;
		cursor: pointer;
	}

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

	.mobile {
		display: none;
	}

	@media screen and (max-width: 1000px) {
		.menu {
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: center;
			position: fixed;
			top: -100%; /* Positionnez le menu sous le header par défaut */
			left: 0;
			width: 100%;
			background-color: var(--white);
			opacity: 0.95;
			transition: top 0.5s ease;
			padding-top: 32px;
			z-index: -1;
		}

		.menu.open {
			top: 83px;
			z-index: -1;
		}

		.underline::after {
			display: none;
		}
		.mobile {
			display: flex;
			align-items: center;
			gap: 6px;
			background: none;
			border: none;
			font-family: 'DM-Sans', sans-serif;
			font-weight: 600;
			color: var(--black);
			font-size: 16px;
			text-transform: uppercase;
		}
		hr {
			width: 60%;
			border: 1px solid var(--black);
		}
        .display-mobile{
            display: block;
        }
	}
</style>
