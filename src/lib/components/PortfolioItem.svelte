```svelte
<script>
  import { onMount } from 'svelte';
  import { firestore } from '../../utils/firestore.js';

  export let portfolioItem = {};

  onMount(async () => {
    const doc = await firestore.collection('portfolio').doc(portfolioItem.id).get();
    portfolioItem = doc.data();
  });
</script>

<div class="portfolio-item bg-dark text-white p-4 rounded-lg shadow-lg">
  <h2 class="text-2xl font-bold mb-2">{portfolioItem.title}</h2>
  <p class="mb-4">{portfolioItem.description}</p>
  <a href={portfolioItem.link} class="text-blue-500 hover:text-blue-700">View Project</a>
</div>
```