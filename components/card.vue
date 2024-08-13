<script setup lang="ts">
    interface CardProps {
        title: string,
        link: string,
        date?: string,
        category?: string,
        eyecatch: string,
        targetIsBlank: boolean,
        id: number,
    }
    defineProps<CardProps>();

</script>
<template>
    <article class="card" :class="id % 2 == 0 ? 'reverse' : ''">
        <NuxtLink :href=link :target="targetIsBlank == true ? '_blank': ''">
            <div class="card__inner">
                <figure class="card__eyecatch">
                    <img :src=eyecatch :alt=title>
                </figure>
                <div class="card__text">
                    <p class="card__category">{{ category }}</p>
                    <h3 class="card__title">{{ title }}</h3>
                    <time datetime="" class="card__time">{{ date }}</time>
                </div>
            </div>
        </NuxtLink>
    </article>
</template>
<style scoped lang="scss">
    .card {
        position: relative;
        overflow: clip;

        &__inner {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 48px;
        }
        
        &__text {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            color: var(--bg-cream);
        }
        &__title {
            width: fit-content;
            font-size: clamp(2rem, 1.111rem + 1.85vw, 2.5rem);
            font-size: calc(32 * var(--rem));
            background-color: var(--gray-700);
            white-space: nowrap;
        }
        &__category {
            width: fit-content;
            background-color: var(--gray-700);
        }

        &__time {
            
            background-color: var(--gray-700);
        }

        &__eyecatch {
            position: relative;
            z-index: -1;
            aspect-ratio: 16 / 9;
            width: 100%;
            > img {
                width: 100%;
            }
        }
    
        &.reverse {
            .card__inner {
                flex-direction: row-reverse;
            }
            .card__text {
                align-items: flex-start;
            }
        }
    }
</style>