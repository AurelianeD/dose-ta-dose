<script>
	import '$lib/styles/styles.css';
	import Link from '$lib/components/Link.svelte';
</script>

<div class="contenu">
	<h1>À <span class="yellow-bg">propos</span></h1>
	<div class="paragraphe">
		<h2>Notre mission</h2>
		<p>
			Notre projet découle d'un constat simple : au collège l'alcool est un sujet tabou, et pourtant
			nombreux sont les élèves concernés !
		</p>
	</div>
	<div class="paragraphe">
		<h2>Notre but</h2>
		<p>
			Dose ta dose c'est un projet étudiant, à but non lucratif ! Notre but : sensibiliser les
			collégiens au sujet de l'alcoolisme. Nous connaissons tous quelqu'un qui est concerné par des
			problèmes d'alcool et même depuis le collège sans savoir comment l'accompagner au mieux. Et
			pourtant au collège ce sujet est très tabou ! C'est pourquoi sur ce site, vous trouverez
			également un jeu afin de vous évaluer sur vos connaissances !
		</p>
		<Link path="" textUnderline="Communiqué" text="de presse" />
	</div>
	<div class="paragraphe">
		<h2>Notre équipe</h2>
		<ul>
			<li><span class="bold">Auréliane DOR</span> <br />Développeuse web</li>
			<li>
				<span class="bold">Camille DAGUIN</span> <br />Rédactrice de contenus & Chargée de
				communication
			</li>
			<li><span class="bold">Hugo MENSAH</span> <br /> Designer UX/UI & Direction Artistique</li>
			<li>
				<span class="bold">Joséphine SAINT-YGNAN</span> <br />Rédactrice de contenus & Chargée de
				communication
			</li>
			<li><span class="bold">Justine GELIS</span> <br />Graphiste</li>
			<li>
				<span class="bold">Leily COQUARD MISONO</span> <br />Designer UX/UI & Direction Artistique
			</li>
			<li><span class="bold">Line CABARET</span> <br />Développeuse web & Graphiste</li>
			<li><span class="bold">Noémie NUNEZ</span> <br />Graphiste</li>
			<li>
				<span class="bold">Safiya SEDDIKI</span> <br />Rédactrice web SEO & Chargée de communication
			</li>
			<li><span class="bold">Thomas RIQUIER</span> <br />Développeur web & Graphiste</li>
		</ul>
	</div>
</div>

<style>
	.contenu {
		max-width: 60vw;
		margin: auto;
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	p {
		line-height: 140%;
	}

	h1 .yellow-bg {
		position: relative !important;
	}

	h1 .yellow-bg::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--yellow);
		animation: highlight 0.5s;
	}

	@keyframes highlight {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}
	.paragraphe {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 40vw;
	}

	li {
		margin: 20px 40px;
		line-height: 140%;
		list-style-type: disc;
		font-family: 'DM Sans', sans-serif;
	}

	.bold {
		font-weight: 600;
	}

	@media screen and (max-width: 1000px) {
		.contenu {
			max-width: 70vw;
		}

		.paragraphe {
			max-width: 80vw;
		}
		li {
			margin: 20px 10px;
		}
	}
</style>
