<script>
	import { page } from '$app/stores';

	export let href;
	export let list = [];
</script>

<a class="primary" {href} aria-current={$page.url.pathname === href}><slot /></a>
{#if list}
	<ul>
	{#each list as miembro}
		<li><a href={href + '#' + miembro.href}>{miembro.tag}</a></li>
	{/each}
	</ul>
{/if}

<style>
	a {
		display: block;
		text-decoration: none;
		color: black;
		font-weight: bold;
	}

	a:hover {
		text-decoration: underline;
	}

	a[aria-current='true'] {
		color: var(--teal);
	}

	a.primary {
		padding: 8px 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li>a {
		padding: 6px 12px;
	}
</style>
