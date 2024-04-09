<script lang="ts">
    export let path: string;
    export let textUnderline: string;
    export let text: string;
</script>

<a href={path} class="link container">
    <div class="containerText">
        <div>
            <p>{textUnderline}</p>
            <div class="underline"></div>
        </div>
        <div>
            <p class="text">{text}</p>
            <div class="underlineHover"></div>
        </div>
    </div>
    <img src="/images/right-arrow.svg" alt="" />
</a>

<style>
    .container{
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .containerText{
        display: flex;
    }
    .text{
        padding-left: 5px
    }
    .link{
        text-decoration: none;
    }
    .underline{
        height: 3px;
        background-color: var(--yellow);
        width: 100%;
    }
    .underlineHover{
        height: 3px;
        background-color: var(--yellow);
        width: 0;
        transition: 0.3s;
    }
    .container:hover .underlineHover{
        width: 100%;
    }
    img {
        margin-left: 0;
        transition: 0.3s;
    }
    .container:hover img{
        margin-left: 5px;
    }
</style>
