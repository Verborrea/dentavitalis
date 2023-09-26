<script>
	import { page } from '$app/stores'
    import Card from './Card.svelte'
    import Intro from './Intro.svelte'

	export let data
	let selected = 'estetica'

	for (const categoria of data.cats) {
		if ($page.url.hash === '#' + categoria.slug)
			selected = categoria.slug
	}
</script>

<Intro />

<div class="container">
{#each data.cats as categoria}
	<div class="categoria" id={categoria.slug}>
		<button
			type="button"
			on:click={()=>{ selected = (selected == categoria.slug) ? -1 : categoria.slug}}
			aria-expanded={selected == categoria.slug}
			aria-controls={categoria.slug + '-body'}
		>
			<span>{categoria.name}</span>
			{#if selected == categoria.slug}
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M22 18L14 10L6 18" stroke="#0FB3B2" stroke-width="4" stroke-linecap="square"/>
				</svg>
			{:else}
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 10L14 18L22 10" stroke="#0FB3B2" stroke-width="4" stroke-linecap="square"/>
				</svg>
			{/if}
		</button>
		<div
			id={categoria.slug + '-body'} class="grid"
			class:open={selected == categoria.slug}
			aria-hidden={selected != categoria.slug}
		>
			<div class="servicios">
				{#each categoria.services as servicio}
					<Card {servicio} />
				{/each}
			</div>
		</div>
	</div>
{/each}
</div>


<style>
    .grid {
        display: grid; /* 1 */
        grid-template-rows: 0fr; /* 2 */
        transition: grid-template-rows 0.5s ease-in-out; /* 3 */
    }

    .grid.open {
        grid-template-rows: 1fr; /* 5 */
    }

    .container {
        padding: 16px;
		max-width: 1080px;
		margin: auto;
		margin-bottom: 64px;
    }

	.categoria button {
		position: relative;
        display: flex;
		align-items: center;
		width: 100%;
		gap: 6px;

		padding: 16px 0;
		border: none;

		background-color: transparent;
		color: var(--teal);

		font-weight: bold;
		text-align: left;
		font-size: 24px;
		line-height: 26px;
	}

	button:hover {
		text-decoration: underline;
	}
    
    .servicios {
        overflow: hidden;
        columns: 3 240px;
        column-gap: 16px;
    }

	svg {
		width: 14px;
		height: 14px;
	}

	@media (min-width: 900px) {
		.categoria button {
			font-size: 36px;
    		line-height: 48px;
		}
		svg {
			width: auto;
			height: auto;
		}
	}
</style>