```svelte
<script>
  import Card from '$lib/components/Card.svelte';
  import { projects } from '$lib/utils.js';
</script>

<main class="dark:bg-gray-800">
  <h1 class="text-4xl text-white mb-4">Projects</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each projects as project (project.id)}
      <Card {project} />
    {/each}
  </div>
</main>
```