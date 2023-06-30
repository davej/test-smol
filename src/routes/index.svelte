```svelte
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Card from '$lib/components/Card.svelte';
</script>

<Header />

<main class="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-900">
  <Card>
    <h1 class="text-4xl font-bold text-white">Welcome to my personal website</h1>
    <p class="mt-2 text-lg text-gray-300">This is a simple, clean, and dark-themed personal website built with SvelteKit and Tailwind CSS.</p>
  </Card>
</main>

<Footer />
```