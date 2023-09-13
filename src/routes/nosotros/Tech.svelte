<script>
    import dentadura from "$lib/images/dentadura.png";
</script>


<div class="bg-teal">
    <div id="tech-spacer-1" />
    <section id="tech">
        <div class="img-container">
            <img src={dentadura} alt="Dentadura" width="322" height="331"/>
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
        background-image: url("$lib/images/stacked-waves-top.svg");
    }
    #tech-spacer-2 {
        background-image: url("$lib/images/stacked-waves-bottom.svg");
    }
</style>
