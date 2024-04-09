<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="container">
    <Header />
    <div class="content">
    <slot />
    </div>
    <Footer />
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>
