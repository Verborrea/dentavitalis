<script>
    import { onMount } from "svelte";

    export let init_scroll
    let tracker, o_width, screenSize, percentage, margin = 0

    $: total = 2144 + screenSize

    let foo = (e) => {
        percentage = tracker.scrollLeft / (total - o_width) * 100
    }

    onMount(() => {
        if (init_scroll == 'true') {
            tracker.scrollLeft = 2144 + screenSize
            margin = 64
        }
    })
</script>


<svelte:window bind:innerWidth={screenSize} />


<div 
    class="image-track"
    data-mouse-down-at={0}
    on:scroll={foo}
    bind:this={tracker}
    bind:offsetWidth={o_width}
    style:margin-bottom={`${margin}px`}
>
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://gacetadental.com/wp-content/uploads/2022/07/abrir-clinica-dental-documentacion.jpg" alt="img">
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://ceodont.com/wp-content/uploads/2021/07/partes-de-una-clinica-dental-1-1200x675.jpg" alt="img">
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://clinicadentalhenao.imq.es/hubfs/imq%20dental%20henao%20consulta.jpg" alt="img">
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://d1kw0nx8pk9xzh.cloudfront.net/0001/71526693/resize-crop(w=1027;h=578):sharpen(level=0):output(format=jpeg)/up/dt/2021/11/atikah-akhtar-XJptUS8nbhs-unsplash.jpg" alt="img">
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://asesorias.com/empresas/wp-content/uploads/2020/09/montar-clinica-dental.jpg" alt="img">
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://ceodont.com/wp-content/uploads/2021/07/gabinete-clinica-dental.jpg" alt="img">
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://enfoquedental.com/wp-content/uploads/2021/10/montar-una-clinica-dental.jpg" alt="img">
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" src="https://www.dvd-dental.com/blogodontomecum/wp-content/uploads/2019/12/distribuci%C3%B3n-clinica-dental.jpg" alt="img">
</div>


<style>
    .image {
        width: 240px;
        height: 340px;
        object-fit: cover;
        object-position: 0% 50%;
        border-radius: 32px;
    }
    .image-track {
        margin-top: 64px;
        display: flex;
        gap: 32px;
        position: relative;
        padding: 0 50vw;
        overflow-x: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .image-track::-webkit-scrollbar {
        display: none;
    }

</style>