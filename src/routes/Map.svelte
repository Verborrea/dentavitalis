<script>
    import location from '$lib/images/location.svg'
    import mapboxgl from 'mapbox-gl'
    import '../mapbox.css'
    import { onMount, onDestroy } from "svelte"

    let mapContainer, map;

    onMount(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbi0yNSIsImEiOiJjbGViaGI4aDkwcHpxM25udTAwaWcyczFrIn0.MZhpce5K1n4Gi7xBVGFj6Q';
        map = new mapboxgl.Map({
            container: mapContainer, // container ID
            style: 'mapbox://styles/alan-25/clm58crii02cx01qi2xqb74tx', // style URL
            center: [-71.5460, -16.3653], // starting position [lng, lat]
            zoom: 11, // starting zoom
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
                    title: 'Mapbox',
                    description: 'Washington, D.C.'
                }
                },
                {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-71.54408580256991,-16.34362737225257]
                },
                properties: {
                    title: 'Mapbox',
                    description: 'San Francisco, California'
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
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
        }
    });

    onDestroy(() => {
        if (typeof map !== 'undefined') {
            map.remove();
        }
    });
</script>

<section>
    <aside class="white">
        <div class="container">
            <h1>Estamos cerca tuyo</h1>
            <p>Visítanos en el Centro Médico Cayma o en Las Malvinas </p>
            <img src={location} alt="Location icon">
        </div>
    </aside>
    <div class="map" bind:this={mapContainer} />
</section>

<style>
    aside {
        background-image: url('$lib/images/background.png');
        margin: var(--margin);
        aspect-ratio: 1;
        background-size: cover;
        border-radius: 32px;
        padding: 12px;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 16px;
        height: 100%;
        border: 1px solid var(--white);
        border-radius: 24px;
    }
    .map {
        margin: 0 24px;
        aspect-ratio: 1;
        border-radius: 32px;
    }
</style>