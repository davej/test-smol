```svelte
<script>
  import { onMount } from 'svelte';
  import { firestore } from '$lib/utils/firestore.js';
  import BlogPost from '$lib/components/BlogPost.svelte';

  let blogPosts = [];

  onMount(async () => {
    blogPosts = await firestore.getBlogPosts();
  });
</script>

<main class="dark:bg-gray-800">
  <h1 class="text-4xl font-bold text-white mb-4">Blog</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each blogPosts as post (post.id)}
      <BlogPost {post} />
    {/each}
  </div>
</main>
```