<script>
    import dentadura from "$lib/images/nosotros/dentadura.png";
    import { onMount } from "svelte";
    import * as THREE from 'three';

    let renderer, camera

    function resizeRenderer() {
        const container = document.querySelector('#img-container');
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
    }

    onMount(() => {
        const scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 50, 300 / 500, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( 300, 500 );
        renderer.setClearColor(0x0FB3B2);
        renderer.shadowMap.enabled = true; // Habilitar las sombras en el renderer
        
        document.querySelector('#img-container').appendChild( renderer.domElement );

        resizeRenderer()

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshStandardMaterial( { color: 0x0FB3B2 } );
        const cube = new THREE.Mesh( geometry, material );
        cube.castShadow = true; // El cubo proyectará sombras
        cube.receiveShadow = true; // El cubo recibirá sombras
        scene.add( cube );

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.75); // El segundo argumento es la intensidad
        scene.add(ambientLight);


        // Agregar luz direccional
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // Configurar el área de sombra para la luz
        directionalLight.shadow.camera.left = -5;
        directionalLight.shadow.camera.right = 5;
        directionalLight.shadow.camera.top = 5;
        directionalLight.shadow.camera.bottom = -5;
        directionalLight.shadow.camera.near = 0.1;
        directionalLight.shadow.camera.far = 1000;
        directionalLight.shadow.mapSize.set(1024, 1024); // Resolución de la sombra

        camera.position.z = 3;

        function animate() {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        }

        animate();
    })
</script>

<svelte:window on:resize={resizeRenderer}/>

<div class="bg-teal">
    <div id="tech-spacer-1" />
    <section id="tech">
        <div id="img-container">
            <!-- <img src={dentadura} alt="Dentadura" width="322" height="331"/> -->
        </div>
        <div class="text-container">
            <p><strong>Soluciones modernas</strong></p>
            <h2>Utilizamos tecnología <strong>3D</strong></h2>
            <p>
                La impresión en 3D para dientes, también conocida como impresión
                dental 3D o fabricación aditiva dental, es una tecnología innovadora
                que se utiliza en el campo de la odontología para crear prótesis
                dentales, modelos de estudio, alineadores transparentes y otros
                dispositivos dentales de manera precisa y eficiente.
            </p>
        </div>
    </section>
    <div id="tech-spacer-2" />
</div>


<style>
    .bg-teal {
        background-color: var(--teal);
    }
    #tech, .text-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    #tech {
        padding: 24px;
        color: var(--white);
    }
    img {
        display: block;
        width: 80%;
        height: auto;
        margin: auto;
    }
    .img-container {
        display: flex;
        justify-content: center;
    }
    strong {
        color: var(--dark-blue);
    }
    p > strong {
        font-size: 20px;
        letter-spacing: -0.04em;
    }

    @media (min-width: 768px) {
        #tech {
            flex-direction: row;
            justify-content: center;
            max-width: 1080px;
            margin: auto;
        }
        #tech > *{
            flex: 1;
        }
        img {
            width: 322px;
        }
        .text-container {
            justify-content: center;
            padding: 16px;
        }
    }


    #tech-spacer-1,
    #tech-spacer-2 {
        aspect-ratio: 900/100;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    #tech-spacer-1 {
        background-image: url("$lib/svg/stacked-waves-top.svg");
    }
    #tech-spacer-2 {
        background-image: url("$lib/svg/stacked-waves-bottom.svg");
    }
</style>
