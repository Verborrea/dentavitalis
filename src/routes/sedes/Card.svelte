<script>
	export let name
</script>

<article>
	<div class="img-container" />
	<div class="text-container">
		<h1>{name}</h1>
		<p>
			Las carillas dentales son láminas delgadas que mejoran la apariencia
			dental al cubrir imperfecciones y lograr sonrisas estéticas.
		</p>
		<a href="/">Ver más &gt;</a>
	</div>
</article>


<style>
	article {
		border-radius: 24px;
		overflow: hidden;
		box-shadow: #0000003d 0px 4px 4px 0px;
	}
	article h1 {
		font-size: 24px;
		line-height: 28px;
		width: 100%;
	}
	article, .text-container {
		display: flex;
		flex-direction: column;
	}
	.img-container {
		height: 252px;
    	background-color: var(--teal);
	}
	.text-container {
		padding: 24px;
		gap: 12px;
		align-items: center;
	}
	article a {
		padding: 4px 16px;
		background-color: var(--teal);
		color: var(--white);
		text-decoration: none;
		border-radius: 18px;
	}
</style>