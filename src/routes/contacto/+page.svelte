<script>
    import mapboxgl from 'mapbox-gl'
    import '../../mapbox.css'
    import { onMount, onDestroy } from "svelte"

    let mapContainer, map;

    onMount(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbi0yNSIsImEiOiJjbGViaGI4aDkwcHpxM25udTAwaWcyczFrIn0.MZhpce5K1n4Gi7xBVGFj6Q';
        map = new mapboxgl.Map({
            container: mapContainer, // container ID
            style: 'mapbox://styles/alan-25/clm58crii02cx01qi2xqb74tx', // style URL
            center: [-71.5578, -16.36805], // starting position [lng, lat]
            zoom: 13, // starting zoom
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

<article>
    <div class="container">
        <form action="">
            <h1>Contáctanos</h1>
            <label for="nombre">
                <p>Nombre completo</p>
                <input name="nombre" id="nombre" type="text" placeholder="Juan Pérez">
            </label>
            <label for="correo">
                <p>Correo electrónico</p>
                <input name="correo" id="correo" type="email" placeholder="ejemplo@123.com">
            </label>
            <label for="telefono">
                <p>Número de teléfono</p>
                <input name="telefono" id="telefono" type="text" placeholder="+51-999-999-999">
            </label>
            <label for="razon">
                <p>Razón o motivo</p>
                <textarea name="razon" id="razon" cols="40" rows="6" placeholder="Quisiera agendar una consulta médica para el 8 de Septiembre..."></textarea>
            </label>
            <input type="submit" value="enviar &gt;">
        </form>
    </div>
    <div class="map" bind:this={mapContainer} />
</article>

<style>
    article {
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .map {
        position: absolute;
        width: 100%;
        height: 120vh;
    }
    .container {
        position: absolute;
        left: calc((100% - 1080px) / 2);
        top: 50%;
        transform: translate(0, -50%);
        z-index: 1000;
        width: 480px;
        padding: 18px;
        margin: 0 16px;
        background-color: var(--teal);
        color: var(--white);
        border-radius: 32px;
    }
    form {
        padding: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        border: 1px solid var(--white);
        border-radius: 32px;
    }
    label {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    label>p {
        font-size: 14px;
        margin-left: 16px;
    }
    input, textarea {
        font-size: 16px;
        border: none;
        padding: 8px 16px;
        border-radius: 20px;
    }
    input[type="submit"] {
        border: 2px solid var(--teal);
        font-weight: bold;
        color: var(--teal);
    }
    input[type="submit"]:focus, input[type="submit"]:hover {
        border: 2px solid var(--white);
        background-color: var(--teal);
        color: var(--white);
    }
    input:focus, textarea:focus {
        outline: none;
        background-color: #a8fffe;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1080px) {
    }
</style>