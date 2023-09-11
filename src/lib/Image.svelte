<script>
	import { onMount } from "svelte";
	export let src, alt
	let scroll, container, observer, isViewed, previousscroll, cool

	let callback = (entries, _) => {
		entries.forEach((entry) => {
			isViewed = entry.isIntersecting
			cool = previousscroll > scroll
			previousscroll = scroll
		});
	};

	onMount(() => {
		let options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.0,
		};
		observer = new IntersectionObserver(callback, options);
		observer.observe(container);
	})
</script>

<svelte:window bind:scrollY={scroll} />

<div class="container" bind:this={container}>
	<div
		id="pbox1"
		class="parallax"
		style:top={isViewed ? (`${(scroll - previousscroll) / 1.5 + 342 * cool}px`): '0px'}
	/>
	<div
		id="pbox2"
		class="parallax"
		style:top={isViewed ? (`${(scroll - previousscroll) / 3.5 + 342 * cool}px`): '0px'}
	/>
	<img {src} {alt} width="342" height="342" />
</div>

<style>
	.container {
		overflow: hidden;
		position: relative;
		width: 100%;
		border-radius: 16px;
		padding: 16px 0;
	}
	img {
		border-radius: 16px;
		display: block;
		width: calc(100% - 32px);
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
		top: 0;
	}
	#pbox2 {
		background-color: var(--blue);
		height: 200px;
		width: 200px;
		left: 0;
		top: 0;
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