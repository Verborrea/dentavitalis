<script>
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import src from '$lib/images/servicios.jpg'
    import Card from '../sedes/Card.svelte'

	const servicios = [
		{id: 0, clicked: true, tag: "Estética dental", href: "estetica"},
		{id: 1, clicked: false, tag: "Rehabilitación dental", href: "rehabilitacion"},
		{id: 2, clicked: false, tag: "Tratamientos de conducto dental", href: "conducto"},
		{id: 3, clicked: false, tag: "Cirugía oral", href: "cirugia"},
		{id: 4, clicked: false, tag: "Prevención dental", href: "prevencion"},
		{id: 5, clicked: false, tag: "Periodoncia", href: "periodoncia"},
		{id: 6, clicked: false, tag: "Implantes dentales", href: "implantes"},
		{id: 7, clicked: false, tag: "Ortodoncia", href: "ortodoncia"},
		{id: 8, clicked: false, tag: "Odontopediatría", href: "odontopediatria"},
	];

	let clicked = 0

	for (const servicio of servicios) {
		if ($page.url.hash === '#' + servicio.href)
			clicked = servicio.id
	}
</script>


<section>
	<div class="text-container">
		<svg width="96" height="32" viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.0344 3.58633C15.3 2.59965 16.6999 2.59964 16.9656 3.58633L19.2444 12.0499C19.3371 12.3941 19.6059 12.6629 19.95 12.7556L28.4137 15.0344C29.4004 15.3 29.4004 16.6999 28.4137 16.9656L19.9501 19.2444C19.6059 19.3371 19.3371 19.6059 19.2444 19.95L16.9656 28.4137C16.7 29.4004 15.3001 29.4004 15.0344 28.4137L12.7556 19.9501C12.6629 19.6059 12.3941 19.3371 12.0499 19.2444L3.58633 16.9656C2.59965 16.7 2.59964 15.3001 3.58633 15.0344L12.0499 12.7556C12.3941 12.6629 12.6629 12.3941 12.7556 12.05L15.0344 3.58633Z" fill="#0FB3B2"/>
			<path d="M47.0344 3.58633C47.3 2.59965 48.6999 2.59964 48.9656 3.58633L51.2444 12.0499C51.3371 12.3941 51.6059 12.6629 51.95 12.7556L60.4137 15.0344C61.4004 15.3 61.4004 16.6999 60.4137 16.9656L51.9501 19.2444C51.6059 19.3371 51.3371 19.6059 51.2444 19.95L48.9656 28.4137C48.7 29.4004 47.3001 29.4004 47.0344 28.4137L44.7556 19.9501C44.6629 19.6059 44.3941 19.3371 44.0499 19.2444L35.5863 16.9656C34.5996 16.7 34.5996 15.3001 35.5863 15.0344L44.0499 12.7556C44.3941 12.6629 44.6629 12.3941 44.7556 12.05L47.0344 3.58633Z" fill="#0FB3B2"/>
			<path d="M79.0344 3.58633C79.3 2.59965 80.6999 2.59964 80.9656 3.58633L83.2444 12.0499C83.3371 12.3941 83.6059 12.6629 83.95 12.7556L92.4137 15.0344C93.4004 15.3 93.4004 16.6999 92.4137 16.9656L83.9501 19.2444C83.6059 19.3371 83.3371 19.6059 83.2444 19.95L80.9656 28.4137C80.7 29.4004 79.3001 29.4004 79.0344 28.4137L76.7556 19.9501C76.6629 19.6059 76.3941 19.3371 76.0499 19.2444L67.5863 16.9656C66.5996 16.7 66.5996 15.3001 67.5863 15.0344L76.0499 12.7556C76.3941 12.6629 76.6629 12.3941 76.7556 12.05L79.0344 3.58633Z" fill="#0FB3B2"/>
		</svg>
		<h1>Nuestros Servicios</h1>
		<p>
			Desde el bienestar de la odontología general, hasta la corrección de
			imperfecciones cosméticas, restauración de implantes y hasta esas dolorosas
			emergencias orales, DENTA VITALIS lo tiene cubierto.
		</p>
		<a href="/" class="button variation">Reserva tu cita ahora &gt;</a>
	</div>
	<div class="image-container">
		<img {src} alt="Aquí viene el texto alternativo de los servicios" height="419">
	</div>
</section>

<ul>
{#each servicios as servicio (servicio.id)}
	<li>
		<button
			type="button"
			id={servicio.href}
			class:clicked={clicked == servicio.id}
			on:click={() => { clicked = (clicked != servicio.id) ? servicio.id : -1}}
		>
			{servicio.tag}
		</button>
		{#if clicked == servicio.id}
			<div class="cards" transition:slide={{ duration: 300, easing: quintOut, axis: 'x' }}>
				<Card name="Blanqueamiento"/>
				<Card name="Blanqueamiento"/>
				<Card name="Blanqueamiento"/>
			</div>
		{/if}
	</li>
{/each}
</ul>

<style>
	section, .text-container {
		display: flex;
	}
	section {
		flex-direction: column-reverse;
	}
	.text-container {
		align-items: flex-start;
		flex-direction: column;
		padding: 0 16px;
		gap: 16px;
	}
	.image-container {
		padding: 16px;
	}
	img {
		width: 100%;
		height: auto;
		border-radius: 48px;
		box-shadow: #0000003d 0px 4px 4px 0px;
	}
	button {
		border: none;
		padding: 16px;
		font-size: 24px;
		line-height: 26px;
		font-weight: bold;
		background-color: transparent;
		color: var(--teal);
		text-align: left;
		width: 100%;
	}
	button:hover {
		text-decoration: underline;
	}
	button::before {
		content: '+ ';
	}
	button.clicked::before {
		content: '- ';
	}

	ul {
		width: 100%;
		max-width: 1080px;
    	margin: auto;
		list-style-type: none;
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 0 16px;
	}

	@media (min-width: 450px) {
		.cards {
			flex-direction: row;
		}
	}
	@media (min-width: 768px) {
		section {
			flex-direction: row;
			align-items: center;
			max-width: 1080px;
			margin: 64px auto;
		}
		section > * {
			flex: 1;
		}
		button {
			font-size: 36px;
    		line-height: 38px;
		}
	}
</style>