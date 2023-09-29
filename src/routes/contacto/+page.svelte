<script>
	import mapboxgl from 'mapbox-gl'
	import '../../mapbox.css'
	import { onMount, onDestroy } from "svelte"
    import SocialMedia from './SocialMedia.svelte';

	let mapContainer, map, width;
	let center = [-71.54454633162405, -16.36971528627511];
	let zoom = 11;

	onMount(() => {
        if (width > 900) {
            center = [-71.50166123466381, -16.375960464307852]
            zoom = 12
        }
        
		mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbi0yNSIsImEiOiJjbGViaGI4aDkwcHpxM25udTAwaWcyczFrIn0.MZhpce5K1n4Gi7xBVGFj6Q';
		map = new mapboxgl.Map({
			container: mapContainer, // container ID
			style: 'mapbox://styles/alan-25/clm58crii02cx01qi2xqb74tx', // style URL
			center: center, // starting position [lng, lat]
			zoom: zoom, // starting zoom
		});
		const geojson = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-71.54635865124519,-16.38957861592958]
					},
					properties: {
						title: 'Sede',
						description: 'Av. Ejército'
					}
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-71.54408580256991,-16.34362737225257]
					},
					properties: {
						title: 'Sede',
						description: 'Las Malvinas'
					}
				}
			]
		};
		// add markers to map
		for (const feature of geojson.features) {
			// create a HTML element for each feature
			const el = document.createElement('div');
			el.className = 'marker';

			// make a marker for each feature and add to the map
			new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
			.setPopup(
				new mapboxgl.Popup({ offset: 25 }) // add popups
				.setHTML(
					`<a href='https://goo.gl/maps/qC2jfY87K8N4ELgbA' target='_blank'>
						<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>
						</a>
					`
				)
			)
			.addTo(map);
		}
	});

	onDestroy(() => {
		if (typeof map !== 'undefined') {
			map.remove();
		}
	});
</script>

<div class="map" bind:this={mapContainer} bind:clientWidth={width}/>
<section>
	<div class="content">
		<div class="form-container">
			<form action="">
				<h1>Contáctanos</h1>
				<label for="nombre">
					<p>Nombre completo:</p>
					<input name="nombre" id="nombre" type="text" placeholder="ej: José Pérez">
				</label>
				<label for="correo">
					<p>Correo electrónico:</p>
					<input name="correo" id="correo" type="email" placeholder="ej: ejemplo@123.com">
				</label>
				<label for="telefono">
					<p>Número de teléfono:</p>
					<input name="telefono" id="telefono" type="text" placeholder="ej: 987-654-321">
				</label>
				<label for="razon">
					<p>Razón o motivo:</p>
					<textarea name="razon" id="razon" cols="40" rows="6" placeholder="Buenas, me gustaría preguntar sobre..."></textarea>
				</label>
				<button type="submit">
					Enviar
					<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
						<g fill-rule="evenodd">
							<path class="HoverArrow__linePath" d="M0 5h7"></path>
							<path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
						</g>
					</svg>
				</button>
			</form>
		</div>
		<SocialMedia />
	</div>
	<div class="relleno" />
</section>

<style>
	:global(main) {
		position: relative;
	}
	section {
		display: flex;
		width: 100%;
		align-items: center;
	}
	section > * {
		flex: 1;
	}
	.map {
		position: absolute;
		width: 50%;
		right: 0;
		height: calc(854px + 11vw);
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
		padding: 64px 0;
	}
	.form-container {
		width: 80%;
		min-width: 480px;
		padding: 16px;
		background-color: var(--teal);
		color: var(--white);
		border-radius: 32px;
	}
	form {
		padding: 24px 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		border: 1px solid white;
		border-radius: 20px;
	}
	label {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	label>p {
		font-weight: bold;
		font-size: 14px;
		margin-left: 16px;
	}
	input, textarea {
		font-size: 16px;
		border: none;
		padding: 8px 16px;
		border-radius: 20px;
	}
	button {
		font-size: 16px;
		padding: 8px 16px;
		border-radius: 22px;
		border: 2px solid white;
		font-weight: bold;
		color: white;
		background-color: var(--teal);
	}
	button:focus, button:hover {
		border: 2px solid white;
		color: var(--teal);
		background-color: white;
		outline: none;
	}
	input:focus, textarea:focus {
		outline: none;
		background-color: #a9fffe;
	}
	.HoverArrow {
		stroke-width: 2px;
		fill: none;
		stroke: currentColor;
		margin-left: 5px;
	}
	.HoverArrow__linePath, .HoverArrow__tipPath  {
		transition: all 0.25s ease;
	}

	.HoverArrow__linePath {
		opacity: 0;
	}

	button:focus .HoverArrow__linePath,
	button:hover .HoverArrow__linePath,
	button:hover .HoverArrow__linePath {
		opacity: 1;
	}

	button:focus .HoverArrow__tipPath,
	button:hover .HoverArrow__tipPath,
	button:hover .HoverArrow__tipPath {
		transform: translateX(3px);
	}

	@media (max-width: 924px) {
		section {
			flex-direction: column;
    		padding: 24px;
		}
	}

	@media (max-width: 768px) {
		section {
			padding: 16px;
		}
		.content {
			padding: 0;
   			width: 100%;
		}
		.form-container {
			width: 100%;
			min-width: auto;
		}

		.form-container form {
			padding: 11px;
			border-radius: 22px;
		}
	}
</style>