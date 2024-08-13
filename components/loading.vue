<script setup lang="ts">
    import lottie, { type AnimationItem } from 'lottie-web';
    import gsap from 'gsap';
    let helloWorldAnimation: AnimationItem;
    const isActive = ref<boolean>(true);
    const counter = ref<number>(0);
    const $lines = ref<Element>();
    const loadAnimation = () => {
        helloWorldAnimation = lottie.loadAnimation({
            container: document.querySelector('.lottie-loading')!,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/animation/loading.json',
        });  
    }

    const hideLoading = () => {
        const loading: HTMLDivElement | null = document.querySelector('.loading');
        isActive.value = false;
        
        // gsap state
        const lines = document.querySelectorAll('.loading .lines')[0];
        $lines.value = lines;
        Array.from($lines.value.children).forEach((line) => {
            const duration = Math.random() * 0.9 + 0.1;
            gsap.to(line, 
                {
                    duration: duration,
                    ease: "circ.inOut",
                    yPercent: -100
                },
            )
        })
        setTimeout(() => {
            if(!loading) return;
            loading.style.visibility = "hidden";
            loading.style.opacity = "0";
        }, 2000)
    }

    const addCounter = () => {
        gsap.to(counter, {
            value: 100,
            duration: 3.5,
            ease: "circ.inOut"
        })
    }

    onMounted(() => {
        loadAnimation();
        addCounter();
        setTimeout(hideLoading, 4000); // 4秒後に表示
    })

    onUnmounted(() => {
        loadAnimation();
        addCounter();
    })
</script>
<template>
    <div class="loading" :class="isActive? 'isActive' : ''">
        <div class="lines" ref="lines" >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="inner">
            <div class="lottie-loading"></div>
            <div class="counter font-bayon">
                {{ counter.toFixed(0) + "%" }}
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .loading {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100svh;
        color: var(--bg-cream);
        transition: cubic-bezier(0.85, 0, 0.15, 1) .8s;
        pointer-events: none;
        user-select: none;
        overflow: hidden;

        z-index: var(--z-index-loading);

        &.isActive {
            pointer-events: all;
            user-select: all;
            .inner {
                opacity: 1;
                visibility: visible;
            }
        }

        .lines {
            position: fixed;
            display: flex;
            width: 100%;
            height: 100%;
            gap: 0; // 隙間をゼロに設定
            overflow: hidden;
            z-index: -1;
        }

        .line {
            width: 20%;
            height: 100%;
            background-color: var(--gray-700);
            box-sizing: border-box; // ボックスサイズを調整
        }

        .inner {
            transition: .6s;
            opacity: 0;
            visibility: hidden;
            display: flex;
            width: 100%;
            max-width: var(--max-width);
            justify-content: space-between;
            padding: 40px;
            margin-inline: auto;
        }

        .lottie-loading {
            height: 96px;
        }
        .counter {
            font-size: calc(110 * var(--rem));
            margin-block: var(--leading-trim);
        }
    }

    @media screen and (max-width: 768px) {
        .loading {
            .inner {
                padding: 20px;
                flex-direction: column;
            }
            .counter {
                font-size: calc( 50vw - 20px );
            }
        }
    }
</style>