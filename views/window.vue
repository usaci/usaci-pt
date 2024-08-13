<script lang="ts" setup>

    import { provide, ref } from "vue";
    const windowSize = ref({
        width: window.innerWidth,
        height: window.innerHeight
    })
    onMounted(() => {
        window.addEventListener('resize', () => {
            windowSize.value.width = window.innerWidth;
            windowSize.value.height = window.innerHeight;
        })
    })
    provide('window', windowSize.value);

</script>
<template>
    <slot></slot>
</template>