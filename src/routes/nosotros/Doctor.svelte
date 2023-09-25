<script>
	export let nombre, especialidad, reversed = false
</script>


<article class:reversed={reversed}>
	<slot name="img"/>
	<div>
		<h2>{nombre}</h2>
		<h3>{especialidad}</h3>
		<p><slot /></p>
	</div>
</article>


<style>
	* {
		text-align: left;
	}
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
	}
	article>div {
		padding: 24px 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 12px;
	}
	article {
		padding: 0;
	}

	@media (min-width: 768px) {
		article {
			display: flex;
			gap: 40px;
			max-width: 1080px;
			padding: 0 16px;
			margin: auto;
		}
		article>*:nth-child(1) {
			flex: 1;
		}
		article>*:nth-child(2) {
			flex: 1.5;
		}
		.reversed {
			flex-direction: row-reverse;
		}
		h2 {
			font-size: 28px;
			line-height: 32px;
		}
		h3 {
			font-size: 20px;
			line-height: 24px;
		}
		p {
			font-size: 18px;
		}
	}
</style>