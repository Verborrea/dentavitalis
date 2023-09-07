<script>
	export let src, alt;
	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="container">
	<div
		id="pbox1"
		class="parallax"
		style:transform={`translateY(${scroll / 2.35}px)`}
	/>
	<div
		id="pbox2"
		class="parallax"
		style:transform={`translateY(${scroll / 6}px)`}
	/>
	<img {src} {alt} width="342" height="342" />
</div>

<style>
	.container {
		overflow: hidden;
		position: relative;
		width: 100%;
		border-radius: 16px;
		padding: 12px 0;
	}
	img {
		border-radius: 16px;
		display: block;
		width: 90%;
		object-fit: cover;
		margin: auto;
	}
	.parallax {
		position: absolute;
		border-radius: 16px;
		z-index: -1;
	}
	#pbox1 {
		background-color: var(--teal);
		height: 100px;
		width: 100px;
		right: 0;
		top: -100%;
	}
	#pbox2 {
		background-color: var(--blue);
		height: 200px;
		width: 200px;
		left: 0px;
		top: -16px;
	}
	@media (min-width: 924px) {
		.container {
			flex-basis: 50%;
		}
		img {
			height: 428px;
		}
		#pbox1 {
			top: -50%;
		}
	}
</style>
