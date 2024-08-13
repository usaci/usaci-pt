<script setup lang="ts">
    const seed = ref<number>();
    const noiseAnimation = () => {
        seed.value = Math.floor(Math.random() * 100);
        requestAnimationFrame(noiseAnimation)
    }
    onMounted(() => {
        // 初期値設定
        const fps: number = 8;
        setTimeout(noiseAnimation, 1000 / fps);
    })
</script>
<template>
    <div class="noise">
        <svg viewBox="0 0 2000 2000" xmlns='http://www.w3.org/2000/svg'>
            <filter id='noiseFilter'>
                <feTurbulence 
                baseFrequency='6' 
                numOctaves='6' 
                stitchTiles='stitch' 
                :seed="seed"
                />
            </filter>
            
            <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
    </div>
</template>
<style lang="scss">
    .noise {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: .5;
        z-index: 12;
        pointer-events: none;
        user-select: none;
        mix-blend-mode: darken;
        filter: grayscale(1);
    }
</style>