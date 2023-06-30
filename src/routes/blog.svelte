```svelte
<script>
  import { onMount } from 'svelte';
  import Card from '$lib/components/Card.svelte';
  import { getBlogPosts } from '$lib/utils.js';

  let posts = [];

  onMount(async () => {
    posts = await getBlogPosts();
  });
</script>

<main class="dark:bg-gray-800 dark:text-white">
  <h1 class="text-3xl font-bold mb-4">Blog</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each posts as post (post.id)}
      <Card {post} />
    {/each}
  </div>
</main>

<style>
  main {
    padding: 1rem;
  }
</style>
```