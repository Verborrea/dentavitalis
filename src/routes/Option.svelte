<script>
	import { page } from '$app/stores';

	export let href;
	export let list = [];
</script>

{#if list.length == 0}
	<a class="primary" {href} aria-current={$page.url.pathname === href}><slot /></a>
{:else}
	<div class="second">
		<div class="container">
			<a class="primary" {href} aria-current={$page.url.pathname === href}><slot /></a>
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3 5L7 9L11 5" stroke="black" stroke-width="2" stroke-linecap="square"/>
			</svg>
		</div>
	
		<ul>
		{#each list as miembro}
			<li><a href={href + '#' + miembro.href}>{miembro.tag}</a></li>
		{/each}
		</ul>
	</div>
{/if}

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	a {
		display: block;
		text-decoration: none;
		color: black;
		font-weight: bold;
	}

	a.primary::before{
		content: '';
		background-color: black;
		position: absolute;
		inset: 32px auto 4px 0;
		width: 0%;
		transition: all 0.3s ease;
	}

	a.primary:hover::before{
		width: 100%;
	}

	a[aria-current='true'] {
		color: var(--teal);
	}

	a.primary[aria-current='true']::before {
		background-color: var(--teal);
	}
	a.primary[aria-current='true']+svg>path {
		stroke: var(--teal);
	}

	a.primary {
		padding: 8px 0;
		position: relative;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li>a {
		padding: 6px 12px;
	}

	ul>li:hover a{
		color: var(--teal);
	}

	@media (min-width: 924px) {
		ul {
			display: none;
		}

		.second:hover > ul{
			display: block;
			position: absolute;
			z-index: 999;
			background-color: var(--white);
			padding: 12px 8px;
			border-radius: 16px;
		}
	}
</style>
