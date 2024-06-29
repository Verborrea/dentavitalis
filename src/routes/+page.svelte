<script>
	import tech from "$lib/images/tech.jpg";
	import smile from "$lib/svg/smile.svg";
    import Carousel from "./DCarousel.svelte";
    import Map from "./Map.svelte";
    import Section1 from "./Section1.svelte";
	import Section2 from "./Section2.svelte";
	import Button from '$lib/Button.svelte';

	let showVideo = true;

	function toggleVideo() {
		showVideo = !showVideo;
		if (!showVideo) {
			const videoElement = document.querySelector('.lalala')
			videoElement.pause();
		}
	}
</script>

<svelte:head>
	<title>Denta Vitalis - Odontología para todos en Arequipa</title>
	<meta name="description" content="Consultorio dental en Arequipa con especialización en implantes dentales 3D. Brindamos servicios de estética dental, rehabilitación dental y más.">
	<meta name="keywords" content="Denta Vitalis, Dentistas en Cayma, Implantes dentales 3D, Arequipa, Consultorio dental, Estética dental, Enmanuel Pacheco Chirinos, Odontopediatría, Periodoncia, Ortodoncia, Cirugía oral, Tratamientos de conducto dental">
</svelte:head>

<!-- <div class="video-container" class:showVideo={showVideo}>
	<button type="button" class="close-button" on:click={toggleVideo}>Cerrar</button>
	<video class="lalala" controls loading="lazy">
		<track kind="captions">
		<source src="/navidad.webm" type="video/mp4">
		<source src="/navidad.mp4" type="video/mp4">
		Tu navegador no admite la reproducción de videos.
	</video>
</div> -->

<Section1></Section1>
<Section2></Section2>
<div class="thrid-container">
	<div class="pre"></div>
	<section id="third" class="article">
		<img src={tech} alt="Moldes 3D de dentaduras" height="291">
		<div class="third-child">
			<h2>Contamos con la tecnología más moderna</h2>
			<p>
				Contamos con impresoras 3D y más modernos equipos de vanguardia en para
				lograr un mejor diagnóstico y diseño de sonrisa.
			</p>
			<Button href="/nosotros#tech" --bkg="var(--white)" --color="#14a4ae" --h_bkg="#e8fdff" --h_color="#14a4ae">
				Conozca más aquí
			</Button>
		</div>
	</section>
</div>
<section id="fourth" class="article" >
	<img src={smile} alt="Icono con sonrisa y estrellas" />
	<h2>Estás en <strong>buenas</strong> manos</h2>
	<p>
		Nuestros clientes siempre están satisfechos con nuestros servicios.
		Mira lo que dicen:
	</p>
	<Carousel />
</section>
<section id="fifth">
	<div class="fifth-container">
		<h2>Nuestros servicios</h2>
		<div class="list-containers">
			<ul>
				<li><a href="/servicios#estetica">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Estética dental
				</a></li>
				<li><a href="/servicios#rehabilitacion">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Rehabilitación dental
				</a></li>
				<li><a href="/servicios#conducto-dental">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Tratamientos de Conducto Dental
				</a></li>
				<li><a href="/servicios#cirugia">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Cirugía oral
				</a></li>
				<li><a href="/servicios#prevencion">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Prevención dental
				</a></li>
			</ul>
			<ul>
				<li><a href="/servicios#periodoncia">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Periodoncia
				</a></li>
				<li><a href="/servicios#implantes">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Implantes dentales
				</a></li>
				<li><a href="/servicios#ortodoncia">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Ortodoncia
				</a></li>
				<li><a href="/servicios#odontopediatria">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2.125C18.1 2.125 19.0417 2.51667 19.825 3.3C20.6083 4.08333 21 5.025 21 6.125C21 6.30833 20.9875 6.55417 20.9625 6.8625C20.9375 7.17083 20.9 7.525 20.85 7.925L19.475 18C19.3917 18.6833 19.0917 19.2125 18.575 19.5875C18.0583 19.9625 17.5083 20.15 16.925 20.15C16.575 20.15 16.2333 20.075 15.9 19.925C15.5667 19.775 15.2833 19.5333 15.05 19.2L12.375 15.3C12.3417 15.25 12.2875 15.2083 12.2125 15.175C12.1375 15.1417 12.0583 15.125 11.975 15.125C11.9417 15.125 11.8083 15.2 11.575 15.35L8.975 19.125C8.74167 19.475 8.45 19.7333 8.1 19.9C7.75 20.0667 7.39167 20.15 7.025 20.15C6.44167 20.15 5.89583 19.9625 5.3875 19.5875C4.87917 19.2125 4.58333 18.675 4.5 17.975L3.15 7.925C3.1 7.525 3.0625 7.17083 3.0375 6.8625C3.0125 6.55417 3 6.30833 3 6.125C3 5.025 3.39167 4.08333 4.175 3.3C4.95833 2.51667 5.9 2.125 7 2.125C7.6 2.125 8.07917 2.20417 8.4375 2.3625C8.79583 2.52083 9.14167 2.69167 9.475 2.875C9.80833 3.05833 10.1625 3.22917 10.5375 3.3875C10.9125 3.54583 11.4 3.625 12 3.625C12.6 3.625 13.0875 3.54583 13.4625 3.3875C13.8375 3.22917 14.1917 3.05833 14.525 2.875C14.8583 2.69167 15.2083 2.52083 15.575 2.3625C15.9417 2.20417 16.4167 2.125 17 2.125Z" fill="white"/>
					</svg>
					Odontopediatría
				</a></li>
			</ul>
		</div>
		<Button href="/servicios" --bkg="var(--white)" --color="var(--teal)" --h_bkg="var(--blue)" --h_color="white">
			Ver más
		</Button>
	</div>
</section>
<Map />
<div class="final-padding"></div>

<style>
	/* .video-container {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 20;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.video-container.showVideo {
		display: flex;
	}
	video {
		max-width: 100%;
		max-height: 100%;
	}

	.close-button {
		position: absolute;
		top: 16px;
		right: 16px;
		cursor: pointer;
		padding: 8px 16px;
		border-radius: 22px;
		border: none;
		font-weight: bold;
		font-size: 16px;
	}

	.close-button:hover {
		background-color: #cccccc;
	} */



	.final-padding {
		height: 0px;
	}
	.article {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
/* ================================= */
	#third {
		padding: var(--margin);
		margin-bottom: 96px;
		background: linear-gradient(315deg, var(--teal), var(--blue));
		color: var(--white);
		border-radius: 0 0 48px 48px;
	}
	#third img {
		border-radius: 32px; 
		width: 100%;
		object-fit: cover;
	}
	.pre {
		display: block;
		content: '';
		height: 48px;
		width: 100%;
		background-color: var(--teal);
		border-radius: 48px 48px 0 0;
	}
	.third-child {
		display: flex;
		gap: 16px;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 924px) {
		.thrid-container {
			margin-left: 75px;
		}
		.pre {
			border-radius: 48px 0 0 0;
			margin-left: 75px;
			width: auto;
		}
		#third {
			border-radius: 48px 0 0 48px;
			padding: 0;
    		flex-direction: row;
			height: 577px;
		}
		.third-child {
			align-items: flex-start;
			max-width: 540px;
			padding: 0 16px;
		}
		#third img {
			display: block;
			height: 100%;
			border-radius: 48px 0 0 48px;
			width: 50%;
		}
	}
/* ================================= */
	#fourth {
		align-items: center;
		text-align: center;
	}
	#fourth > * {
		padding: 0 var(--margin);
	}
	@media (min-width: 924px) {
		#fourth>img, #fourth>h2, #fourth>p {
			max-width: 540px;
			margin: auto;
		}
	}
/* ================================= */
	#fifth {
		background-color: #87D9D9;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230fb3b2' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		margin-block: 96px auto;
	}
	.fifth-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--margin);
		padding: 48px var(--margin);
	}
	#fifth h2 {
		color: var(--blue);
	}
	#fifth ul {
		list-style: none;
	}
	#fifth li a{
		display: flex;
		font-weight: bold;
		color: var(--white);
		align-items: center;
		height: 38px;
		gap: 8px;
		text-decoration: none;
		transition: all 0.3s ease-out;
	}
	#fifth li a:hover {
		transform: translateX(1em);
	}
	@media (min-width: 924px) {
		.list-containers {
			display: flex;
			width: 100%
		}
		.list-containers > ul {
			width: 50%;
		}
		.fifth-container {
			max-width: 1080px;
			margin: auto;
		}
	}
</style>
