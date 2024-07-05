<script>
    import { onMount } from "svelte";

    export let init_scroll, images
    let tracker, o_width, screenSize, percentage, margin = 0

    $: total = 2144 + screenSize

    let foo = (e) => {
        percentage = tracker.scrollLeft / (total - o_width) * 100
    }

    onMount(() => {
        tracker.scrollLeft = (2144 + screenSize) / 4
        if (init_scroll == 'true') {
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
{#each images as src}
    <img style:object-position={`${percentage}% 50%`} draggable="false" class="image" {src} alt="img">
{/each}
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