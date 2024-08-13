<template>
    <main class="mainContents">
        <section class="works">
            <div class="inner">
                <h2 class="subTitle font-bayon">WORKS</h2>
                <ul class="works__list">
                    <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
                </ul>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import { type Blog } from "~~/types/blog";
    const { data, error } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
    queries: { limit: 100 }
    });
    console.log(data);
</script>

<style>

    /* WORKS */
    .works {
        margin-top: 100px;
        padding-bottom: 100px;
        .subTitle {
            font-size: 10vw;
            margin-bottom: 0;
            line-height: 1;
        }
    }

    .works .works__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    /* works */
    .works .inner {
        display: flex;
        flex-direction: column;
        padding: 40px;
        margin: 0 auto;
        gap: 60px;
    }

    .works .inner .titles {
        writing-mode: vertical-rl;
    }



    @media screen and (max-width: 768px) {


        .works {
            padding-bottom: 30px;
            margin-bottom: 30px;
        }

        .works .inner {
            padding: 20px;
            gap: 20px;
        }


        .works .inner .titles .subTitle {
            margin-left: 0;
            font-size: calc(14 * var(--rem));
        }

        .works .inner .titles .mainTitle {
            margin-bottom: 30px;
            font-size: 14vw;
        }

        .works .works__list {
            grid-template-columns: 1fr;
        }

        .work .work__title {
            font-size: calc(17 * var(--rem));
        }


        
    }
</style>
