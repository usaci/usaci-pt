<script setup lang="ts">
    import {Splide, SplideSlide, SplideTrack, type Options} from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    import { type Blog } from "~~/types/blog";
    import gsap from 'gsap';
    const windowWidth = ref(0);
    const { data, error } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
    });
    console.log(data)
    const options: Options = {
        direction: "ltr", // スライダーの方向を指定/ スライドの高さをスライダーの幅に対する割合で指定
        wheel: true, // マウスホイールによるスライダーの移動を有効にする
        waitForTransition: true, 
        autoHeight: true,
        heightRatio: 9 / 16,
        perPage: 1,
        type: "fade",
        arrows: false,
        autoplay: true,
        wheelSleep: 1000,
        pagination: false,
        rewind: true
    }

    const animateBgtext = () => {
        const bgText = document.querySelector('.bgText');
        gsap.to(bgText, {
            ease: "none",
            xPercent: -50,
            duration: 50,
            repeat: -1,
        })
    }
    onMounted(() => {
        animateBgtext();
    })
</script>
<template>
    <div class="bgText isActive">
        <img src="/logo-border.svg" alt="">
        <img src="/logo-border.svg" alt="">
    </div>
    <main>
        <section class="keyVisual">
            <div class="inner">
                <Splide 
                :has-track="true"
                :options=options
                aria-label="My Favorite Images">
                    <SplideSlide v-for="blog in data?.contents" class="work splide__slide">
                        <NuxtLink :to=blog.id>
                            <figure class="eyecatch">
                                <img :src="blog.eyecatch?.url" :alt="blog.title">
                            </figure>
                        </NuxtLink>
                    </SplideSlide>
                </Splide>
                <div class="keyVisual__text font-bayon">
                    <div>
                        <small>&nbsp;2024 USACI PORTFOLIO</small>
                    </div>
                    <div>
                        <h2>USACI PORTFOLIO</h2>
                        <p>Web-design/uiux-design/front-end-development</p>
                        <p>HTML/CSS/SCSS/JavaScript/typescript/vue3/nuxt3/react/next.js/wordpressweb-design/uiux-design/graphic-design/movie/</p>
                    </div>
                </div>
            </div>
            <div class="side__left-item" ref="left">
                <p class="barcode font-barcode">
                    THIS IS USACI'S WEBSITE
                </p>
            </div>
            <aside class="side__right-item font-bayon">
                <ul class="aside__menu side__right-item">
                    <li>
                        <NuxtLink to="/works">WORKS</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">ABOUT</NuxtLink>
                    </li>
                    <!-- <li>
                        <NuxtLink to="/about">CONTACT</NuxtLink>
                    </li> -->
                </ul>
            </aside>
        </section>
    </main>
</template>

<style lang="scss"> 
    .keyVisual {
        width: 100%;
        height: calc(100svh - 100px);
        .inner {
            height: 100%;
            max-width: 1400px;
            margin-inline: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        &__works {
            height: 100%;
        }
        .eyecatch {
            aspect-ratio: 16 / 9;
            > img {
                width: 100%;
            }
        }


        &__text {
            position: fixed;
            transform: translate(-50%, 0%);
            bottom: 20px;
            left: 50%;
            padding: 0 40px;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            width: 100%;
            font-size: 2.2vw;
            justify-content: space-between;
            h2 {
                font-size: 4.8vw;
                text-align: right;
                margin-block: var(--leading-trim);
            }
            p {
                margin-block: var(--leading-trim);
                margin-bottom: 1px;
                &:last-of-type {
                    font-size: 1.4vw;
                }
            }
            div:last-of-type {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-end;
            }
        }
    }
    .side {
        position: fixed;
        // pointer-events: none;
        // user-select: none;
        width: fit-content;
        height: 100%;
        top: 0;
        z-index: -1;
        font-size: calc(28 * var(--rem));
        &__left-item {
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            left: 16px;
            .barcode {
                margin-block: var(--leading-trim);
                writing-mode: vertical-lr;
            }
        }
        &__right-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            right: 16px;
            gap: 40px;
            .aside__menu {
                gap: 4px;
                line-height: 1;
                font-size: calc(32 * var(--rem));
                align-items: flex-end;
                a {
                    line-height: 1;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .keyVisual {
            .inner {
                padding: 20px;
            }
            &__text {
                position: fixed;
                transform: translate(-50%, 0%);
                bottom: 0px;
                left: 50%;
                padding: 0 20px;
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                width: 100%;
                font-size: calc(20 * var(--rem));
                justify-content: space-between;
                flex-direction: column-reverse;
                h2 {
                    font-size: 14.8vw;
                    line-height: 1;
                    text-align: right;
                    margin-block: var(--leading-trim);
                }
                p {
                    margin-block: var(--leading-trim);
                    margin-bottom: 1px;
                    &:last-of-type {
                        font-size: calc(16 * var(--rem));
                        width: 100%;
                        word-break: break-all;
                    }
                }
                div:last-of-type {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: flex-end;
                }
            }
        }
        .side {
            font-size: calc(16 * var(--rem));
            &__left-item {
                left: 4px;
            }

            &__right-item {
                right: 4px;
                .aside__menu {
                    display: none;
                    flex-direction: column;
                    gap: 8px;
                    font-size: calc(32 * var(--rem));
                }
            }
        }
    }
    .bgText {
        position: fixed;
        display: flex;
        transform: translate(0%, -50%);
        top: 50%;
        left: 0%;
        gap: 20px;
        z-index: -1;
        transition: opacity .4s;
        opacity: 0;
        &.isActive {
            opacity: 1;
        }
        > img {
            height: 100svh;
            opacity: 1;
        }
    }
</style>
