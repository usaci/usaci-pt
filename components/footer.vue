<script setup lang="ts">
    interface Props {
        onClick?: Function
    }
    const props = defineProps<Props>();

</script>
<template>
    <footer class="siteFooter">
        <div class="inner">
            <nav class="siteFooter__nav">
                <ul class="siteFooter__nav__items font-bayon">
                    <li class="siteFooter__nav__item" >
                        <NuxtLink to="">
                            About
                        </NuxtLink>
                    </li>
                    <li class="siteFooter__nav__item">
                        <NuxtLink to="">
                            Works
                        </NuxtLink>
                    </li>
                    <li class="siteFooter__nav__item">
                        <NuxtLink to="">
                            Concept
                        </NuxtLink>
                    </li>
                    <li class="siteFooter__nav__item">
                        <a href="https//designrooms.com" target="_blank">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
    .siteFooter {
        position: fixed;
        left: 40px;
        bottom: 20px;
        &__nav {
            font-size: calc(24 * var(--rem)); 
            ul {
                display: flex;
                gap: 40px;
                > li {
                    line-height: 1;
                    > a {
                        line-height: 1; 
                        margin-block: var(--leading-trim);
                    }
                }
            }
        }
    }
</style>