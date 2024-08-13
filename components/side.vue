<script setup lang="ts">
    import gsap from 'gsap';
    interface Props {
        currentSection: number
    }
    const props = defineProps<Props>();
    const sectionInner = ref();
    const numberInner = ref();
    const left = ref();
    const right = ref();
    const animateSideContents = (delay: number) => {
        gsap.fromTo(left.value, 
        {
            x: -100
        },
        {
            duration: 1,
            ease: "circ.inOut",
            x: 0,
            delay: delay
        })
        gsap.fromTo(right.value, 
        {
            x: 100
        },
        {
            duration: 1,
            ease: "circ.inOut",
            x: 0,
            delay: delay
        })
    }
    onMounted(() => {
        animateSideContents(5);
    })

    watch(props, () => {
        if(props.currentSection === 1) {
            gsap.to(sectionInner.value, {
                xPercent: -25
            })
            gsap.to(numberInner.value, {
                xPercent: -25
            })
        }
        else if(props.currentSection === 2) {
            gsap.to(sectionInner.value, {
                xPercent: -50
            })
            gsap.to(numberInner.value, {
                xPercent: -50
            })
        }
        else if(props.currentSection === 3) {
            gsap.to(sectionInner.value, {
                xPercent: -75
            })
            gsap.to(numberInner.value, {
                xPercent: -75
            })
        }
        else if(props.currentSection == 0) {
            gsap.to(sectionInner.value, {
                xPercent: -0
            })

            gsap.to(numberInner.value, {
                xPercent: 0
            })
        }

    })
</script>
<template>
    <div class="side font-bayon">
        <div class="side__left-item" ref="left">
            <p class="barcode font-barcode">
                THIS IS USACI'S WEBSITE
            </p>
        </div>
        <div class="side__right-item" ref="right">
            <div class="number">
                <div class="inner" ref="numberInner">                  
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                </div>
            </div>
            <div class="section">
                <div class="inner" ref="sectionInner">
                    <span>KEYVISUAL</span>
                    <span>ABOUT</span>
                    <span>WORKS</span>
                    <span>BLOG</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .side {
        position: fixed;
        // pointer-events: none;
        // user-select: none;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 1;
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
            .number {
                width: 28px;
                overflow: hidden;
                position: relative;
                margin-block: var(--leading-trim);
                &:before {
                    content: "";
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 1px;
                    background-color: var(--gray-700);
                    bottom: 0;
                }
                > .inner {
                    display: flex;
                    gap: 4px;
                    width: max-content;
                    > span {
                        width: 28px;
                        line-height: 1;
                        text-align: center;
                        margin-block: var(--leading-trim);
                    }
                }
            }
            .section {
                position: relative;
                overflow: hidden;
                margin-block: var(--leading-trim);
                writing-mode: vertical-lr;
                width: 28px;
                > .inner {
                    display: flex;
                    flex-direction: column;
                    > span {
                        line-height: 1;
                        text-align: center;
                        margin-block: var(--leading-trim);
                    }
                }
            }
        }
        
    }
    @media screen and (max-width: 768px) {
        .side {
            font-size: calc(16 * var(--rem));
            &__left-item {
                left: 4px;
            }

            &__right-item {
                right: 4px;
                .number {
                    width: 16px;
                }

                .section {
                    width: 16px;
                }
            }
        }
    }
</style>