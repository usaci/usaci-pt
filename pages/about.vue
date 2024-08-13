<template>
    <main class="mainContents">
        <article class="article">
            <section class="about about--firstBlock">
                <div class="inner">
                    <div class="about__texts">
                        <h3 class="mainTitle">プロフィール</h3>
                        <div class="box">
                            <div>
                                <h4>usaci/藤川拓也</h4>
                                <p>
                                    2000年12月9日生まれ、神奈川県秦野市在住。<br>
                                    不動産会社のWebデザイナー（パートタイム）として1年ほど勤務した後、神奈川県内のデザイン制作会社にデザイナーとして在籍。<br>
                                    2024年3月から株式会社クルービットでWebアプリケーションのUIUXデザインやWebサイトの制作、フロントエンド開発を担当。
                                </p>
                                <p>趣味：写真撮影（Nikon Z6ii）、お笑い鑑賞、音楽鑑賞など。</p>
                            </div>
                        </div>

                        <h3 class="mainTitle">スキル</h3>
                        <dl class="about__skill">
                            <dt>対応領域</dt>
                            <dd>Webデザイン、グラフィックデザイン、フロントエンド、マークアップ、CMS構築（WordPress等）</dd>
                            <dt>使用言語</dt>
                            <dd>HTML, CSS, JavaScript(Pure JS), Vue.js, Nuxt.js, PHP</dd>

                            <dt>使用ソフト・ツールなど</dt>
                            <dd>Figma, Adobe illustrator, Adobe Photoshop, Adobe Aftereffects, Adobe Premiere Pro, WordPress, MicroCMS</dd>
                        </dl>

                        <h3 class="mainTitle">経歴</h3>
                        <dl class="about__career">
                            <div class="career__block">
                                <dt>2020年4月</dt>
                                <dd>明治大学政治経済学部に入学。大学では映像制作サークルに入り、宣伝映像などの制作に携わりました。</dd>
                            </div>
                            <div class="career__block">
                                <dt>2021年4月~2022年9月</dt>
                                <dd>自分の人生を見つめ直すために大学を休学。この間に以前から好きだったデザインを仕事にすることを決意しました。</dd>
                            </div>
                            <div class="career__block">
                                <dt>2022年7月~2023年8月</dt>
                                <dd>神奈川県内の不動産関連会社にパートタイムのWebデザイナーとして入社。<br>
                                    既存サイトのUIUXデザインの改修や、新規サイトの開発に従事。要件定義からデザイン、実装に至るまで幅広い業務に携わりました。<br>
                                </dd>
                            </div>

                            <div class="career__block">
                                <dt>2022年10月</dt>
                                <dd>
                                    明治大学政治経済学部中途退学。
                                </dd>
                            </div>

                            <div class="career__block">
                                <dt>2023年4月~2024年3月</dt>
                                <dd>
                                    UIUXデザインやWeb開発についてより深く学ぶため、デジタルハリウッド東京本校UI/UXD専攻に入学。
                                </dd>
                            </div>

                            <div class="career__block">
                                <dt>2023年8月~現在</dt>
                                <dd>
                                    カズミア株式会社にデザイナー・フロントエンドエンジニアとして入社。<br>
                                    Webサイトのデザインや構築といった業務に従事しています。
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </article>
    <!-- <footer class="article__footer">

    </footer> -->
</main>
</template>
<script setup lang="ts"></script>

<style>
    .article__header {
        padding: 40px;
    }
    .article {
        max-width: 1200px;
       margin: 0 auto;
       border-radius: 20px;
       margin-top: 100px;
       backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
    }

    .article .about .mainTitle {
        margin-bottom: 40px;
    }

    .article .about .myImg {
        width: 40%;
    }

    .article .about .myImg img {
        width: 100%;
    }

    .article .about .box {
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        gap: 2em;
    }

    .article .about h4 {
        font-size: calc(22 * var(--rem));
        margin-bottom: 20px;
    }

    .article .about .about__skill {
        margin-bottom: 80px;
    }
    .article .about .about__skill dt {
        font-size: calc(20 * var(--rem));
        margin-bottom: 10px;
    }


    .article .about .about__skill dd {
        margin-bottom: 30px;
    }

    .article .about .about__career {
        border-left: solid 1px;
    }

    .article .about .about__career .career__block {
        position: relative;
        padding-left: 30px;
    }

    .article .about .about__career .career__block:before {
        content: "";
        position: absolute;
        top: 9px;
        left: -5px;
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: var(--purple-700);;
        
    }

    .article .about .about__career .career__block:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: var(--purple-700);

    }

    .article .about .about__career dt {
        margin-bottom: 1rem;
    }

    .article .about .about__career dd {
        margin-bottom: 30px;
    }


    @media screen and (max-width: 768px) {
        .article__header, .article__main {
            padding: 20px;
        }

        .article__header .article__title {
        font-size: calc(26 * var(--rem));
            margin-bottom: 30px;
        }

        .article .about .box {
            flex-direction: column;
        }

        .article .about .myImg {
            width: 100%;
        }
    }

</style>