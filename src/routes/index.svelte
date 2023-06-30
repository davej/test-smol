```svelte
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main class="min-h-screen bg-gray-900 text-white">
  <section class="text-center py-20">
    <h1 class="text-5xl font-bold">Welcome to My Personal Website</h1>
    <p class="mt-5 text-lg">This is a place where I share my work and thoughts.</p>
  </section>
</main>

<Footer />
```