<script setup lang="ts">
    import gsap from 'gsap';
    const menuIsActive = ref(false);
    const navIsActive = ref(false);
    const $lines = ref<Element>();
    const toggleMenu = () => {
        menuIsActive.value = !menuIsActive.value;
        navIsActive.value = !navIsActive;
        toggleMenuBackground()
    }

    const toggleMenuBackground = () => {
        // gsap state
        const lines = document.querySelectorAll('.lines')[0];
        $lines.value = lines;
        // 背景を出しわけする
        Array.from($lines.value.children).forEach((line) => {
            const duration = Math.random() * 0.6 + 0.1;
            console.log(duration)
            if(menuIsActive.value == true) {
                gsap.to(line, 
                    {
                        duration: duration,
                        ease: "circ.inOut",
                        y: 0
                    }
                )
            } else {
                gsap.to(line, 
                    {
                        duration: duration,
                        ease: "circ.inOut",
                        y: 2000
                    },
                )
            }
        })
    }
    
</script>

<template>
    <header class="siteHeader">
        <div class="inner">
            <h1 class="logo">
                <NuxtLink to="/">
                    <img src="/logo.svg" alt="usaci website">
                </NuxtLink>
            </h1>
            <div class="menu" role="button" :onclick=toggleMenu :class="menuIsActive ? 'isActive' : ''">
                <div class="menu__parts">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav class="siteHeader__nav" :class="navIsActive ? 'isActive': ''">
                <div class="lines" ref="lines" >
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                    <div class="line" style="transform: translateY(100%)" ></div>
                </div>
                <div class="inner">
                    <ul class="siteHeader__nav__items font-bayon">
                        <li class="siteHeader__nav__item" :class="menuIsActive ? 'isActive' : ''" @click="toggleMenu">
                            <NuxtLink to="/about">
                                About
                            </NuxtLink>
                        </li>
                        <li class="siteHeader__nav__item" :class="menuIsActive ? 'isActive' : ''" @click="toggleMenu">
                            <NuxtLink to="/works">
                                Works
                            </NuxtLink>
                        </li>
                        <li class="siteHeader__nav__item" :class="menuIsActive ? 'isActive' : ''" @click="toggleMenu">
                            <NuxtLink to="">
                                Contact
                            </NuxtLink>
                        </li>
                        <li class="siteHeader__nav__item" :class="menuIsActive ? 'isActive' : ''" @click="toggleMenu">
                            <a href="https://www.designs-room.com/" target="_blank">
                                Blog
                                <span style="font-size: 10px;">外部サイトに遷移します</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<style lang="scss">
    .siteHeader {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100px;
        z-index: 1;
        > .inner {
            width: 100%;
            height: 100%;
            margin-inline: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            .logo {
                position: relative;
                z-index: var(--z-index-header-logo);
                height: 100%;
                img {
                    height: 100%;
                }
            }

        .siteHeader__nav {
            position: fixed;
            width: 100%;
            height: 100svh;
            color: var(--bg-cream);
            z-index: var(--z-index-nav);
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            font-size: calc(120 * var(--rem));
            list-style: none;
            pointer-events: none;
            user-select: none;
            .inner {
                width: 100%;
                height: 100%;
                max-width: 960px;
                padding-top: 40px;
                margin-inline: auto;
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
            &__items {
                display: flex;
                flex-direction: column;
                margin-top: 100px;
            }

            &__item {
                position: relative;
                margin-block: var(--leading-trim);
                transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
                visibility: none;
                user-select: none;
                pointer-events: none;
                transform: translateY(30px);
                overflow: clip;
                > a {
                    transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
                    display: block;
                    transform: translateY(100%);
                }
                &.isActive {
                    transform: translateY(0px);
                    user-select: all;
                    pointer-events: all;
                    visibility: visible;
                    > a {
                        transform: translateY(0%);
                    }
                }
            }
        }
            .menu {
                position: relative;
                z-index: var(--z-index-menu-button);
                border: 1px solid var(--gray-700);
                border-radius: 50%;
                height: 100%;
                aspect-ratio: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                padding: 14px;
                transition: .4s;
                .menu__parts {
                    position: relative;
                    width: 100%;
                    > span {
                        background-color: var(--gray-700);
                        transition: .4s;
                        position: absolute;
                        display: block;
                        height: 1px;
                        &:first-of-type {
                            width: 40px;
                            top: 0;
                            left: 0;
                        }
                        &:last-of-type {
                            width: 20px;
                            top: 8px;
                            right: 0;
                        }
                    }
                }
            }
            .menu.isActive {
                border: 1px solid var(--bg-cream);
                .menu__parts {                        
                    > span {
                        background-color: var(--bg-cream);
                        &:first-of-type {
                            transform: rotate(45deg);
                        }

                        &:last-of-type {
                            top: 0px;
                            width: 40px;
                            transform: rotate(-45deg);
                        }
                    }
                }
            }
        }

    }

</style>