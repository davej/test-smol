```svelte
<script>
  import { onMount } from 'svelte';
  import { getPortfolioItems } from '../lib/utils/firestore.js';
  import PortfolioItem from '../lib/components/PortfolioItem.svelte';

  let portfolioItems = [];

  onMount(async () => {
    portfolioItems = await getPortfolioItems();
  });
</script>

<main class="dark:bg-gray-800 min-h-screen">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-white mt-8 mb-4">Portfolio</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each portfolioItems as item (item.id)}
        <PortfolioItem {item} />
      {/each}
    </div>
  </div>
</main>
```