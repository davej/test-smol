```svelte
<script>
  import { onMount } from 'svelte';
  import Navbar from './Navbar.svelte';

  let title = 'Your Name';

  onMount(() => {
    document.title = `${title} | Home`;
  });
</script>

<header class="bg-gray-800 text-white py-6 px-4">
  <div class="container mx-auto flex justify-between items-center">
    <h1 class="text-3xl font-bold">{title}</h1>
    <Navbar />
  </div>
</header>
```