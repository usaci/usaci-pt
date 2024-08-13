<template>
    <div class="container">
        <!-- <Noise></Noise> -->
        <Header></Header>
        <Window>
            <slot></slot>
        </Window>
    </div>
</template>
<script setup lang="ts">
    import 'destyle.css';
import Window from '~/views/window.vue';
</script>
<style lang="scss">
    :root {
        --bg-cream: rgb(239 239 239);
        --purple-500: rgb(87 94 241);
        --purple-700: rgb(66, 71, 182);
        --red-500: rgb(241 87 87);
        --gray-400: rgb(152 152 152);
        --gray-700: #0f0f0f;
        --rem: 1rem / 16;
        --leading-trim: calc((1em - 1lh) / 2);
        --font-bayon: "Bayon";
        --font-zen-kaku-gothic-new: "Zen Kaku Gothic New";
        --font-noto-sans-jp: "Noto Sans JP";
        --font-syne: "syne";
        --font-barcode: "Libre Barcode 39 Text";
        --max-width: 1920px;
        --z-index-nav: 2;
        --z-index-menu-button: 3;
        --z-index-header-logo: 4;
        --z-index-loading: 10;
    }

    body {
        background-color: var(--bg-cream);
        font-family: var(--font-zen-kaku-gothic-new), sans-serif;
        font-size: calc(18 * var(--rem));
        font-weight: 900;
        color: var(--purple-700);
    }
    p,
    table,
    blockquote,
    address,
    pre,
    iframe,
    form,
    figure,
    time,
    span,
    dl,
    h1, 
    h2, 
    h3,
    h4,
    h5,
    h6,
    li,
    a,
    blockquote,
    cite,
    code {
        letter-spacing: -0.02em;
        line-height: 1.8;
    }

    .container {
        overflow: clip;
        height: 100%;
    }

    .font-extended {
        transform: scaleX(1.1);
        width: calc(100% / 1.1);
        transform-origin: top left;
    }

    .font-bayon {
        font-family: var(--font-bayon), sans-serif;
        font-weight: 400;
    }

    .font-syne {
        font-family: var(--font-syne), sans-serif;
    }

    .font-barcode {
        font-family: var(--font-barcode), sans-serif;
    }
    @media screen and (max-width: 768px) {
        body {
            font-size: calc(14 * var(--rem));
        }
    }
    .mainTitle {
        font-size: calc(32 * var(--rem));
        border-bottom: solid 2px var(--purple-700);
        padding-bottom: 8px;
    }
</style>