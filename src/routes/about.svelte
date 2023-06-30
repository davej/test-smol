```svelte
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main class="dark:bg-gray-900 text-white">
  <section class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-4">About Me</h1>
    <p class="text-lg">
      Hello, I'm a web developer with a passion for creating clean, simple, and efficient code. I have experience in a variety of technologies, including SvelteKit and Tailwind CSS.
    </p>
  </section>
</main>

<Footer />
```