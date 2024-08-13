<script setup lang="ts">
    import gsap from 'gsap';
    interface Props {
        value: number
    }
    const props = defineProps<Props>();
    const itemValue01 = ref("0%");
    const itemValue02 = ref("0%");
    const itemValue03 = ref("0%");
    const itemValue04 = ref("0%");

    onMounted(() => {
    })
    watch(props, () => {
        const progress: number = props.value;
        if(props.value >= 0 && props.value <= 0.25) {
            gsap.to(itemValue01, {
                duration: .2,
                value: progress * 100 + "%",
                ease: "none"
            })

            gsap.to(itemValue02, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            })

            gsap.to(itemValue03, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            })

            gsap.to(itemValue04, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            })
        }

        else if(props.value >= 0.25 && props.value <= 0.5) {
            gsap.to(itemValue01, {
                duration: .2,
                value: 25 + "%",
                ease: "none"
            })

            gsap.to(itemValue02, {
                duration: .2,
                value: progress * 100 - 25 + "%",
                ease: "none"
            })

            gsap.to(itemValue03, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            })

            gsap.to(itemValue04, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            })
        }
    
        else if(props.value >= 0.5 && props.value <= 0.75) {

            gsap.to(itemValue02, {
                duration: .2,
                value: 25 + "%",
                ease: "none"
            })

            gsap.to(itemValue03, {
                duration: .2,
                value: progress * 100 - 50 + "%",
                ease: "none"
            })

            gsap.to(itemValue04, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            })
        }

        else if(props.value >= 0.75 && props.value <= 1) {
            gsap.to(itemValue03, {
                duration: .2,
                value: 25 + "%",
                ease: "none"
            })

            gsap.to(itemValue04, {
                duration: .2,
                value: progress * 100 - 75 + "%",
                ease: "none"
            }) 
        }
        
        if(props.value > 0.99) {
            gsap.to(itemValue01, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            }) 
            gsap.to(itemValue02, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            }) 
            gsap.to(itemValue03, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            }) 
            gsap.to(itemValue04, {
                duration: .2,
                value: 0 + "%",
                ease: "none"
            }) 
        }


    })
</script>
<template>
    <div class="progressWrap">
        <div class="progress progress--base">
            <div class="progress__item"></div>
            <div class="progress__item"></div>
            <div class="progress__item"></div>
            <div class="progress__item"></div>
        </div>
        <div class="progress progress--main">
            <div class="progress__item"></div>
            <div class="progress__item"></div>
            <div class="progress__item"></div>
            <div class="progress__item"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .progressWrap {
        position: fixed;
        right: 0px;
        bottom: 0;
        height: 7px;
        width: 100vw;
        overflow: hidden;
    }
    .progress {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        gap: 4px;
        &__item {
            position: absolute;
            width: calc(25% - 4px); // 基準となるサイズ
            height: 100%;
            &:nth-of-type(1) {
                left: 0;
            }
            &:nth-of-type(2) {
                left: 25%;
            }
            &:nth-of-type(3) {
                left: 50%;
            }
            &:nth-of-type(4) {
                width: 25%;
                left: 75%;
            }
        }
        &--base {
            .progress__item {
                background-color: var(--gray-400);
            }
        }

        &--main {
            .progress__item {
                background-color: #F2D157;
                &:nth-of-type(1) {
                    width: calc( v-bind(itemValue01) - 4px );
                }
                &:nth-of-type(2) {
                    width: calc( v-bind(itemValue02) - 4px );
                }
                &:nth-of-type(3) {
                    width: calc( v-bind(itemValue03) - 4px );
                }
                &:nth-of-type(4) {
                    width: calc( v-bind(itemValue04));
                }
            }
        }
    }
</style>