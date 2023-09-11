<script>
	export let nombre, especialidad
</script>


<article>
	<slot name="img" />
	<div>
		<h2>{nombre}</h2>
		<h3>{especialidad}</h3>
		<p><slot /></p>
	</div>
</article>


<style>
	h2 {
		font-size: 26px;
		line-height: 28px;
	}
	h3 {
		font-size: 18px;
		line-height: 22px;
	}
	p {
		font-size: 16px;
		text-align: left;
	}

	article>div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
	}
</style>