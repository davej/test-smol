```svelte
<script>
  import { onMount } from 'svelte';
  let year = new Date().getFullYear();

  onMount(() => {
    // Any on-mount logic can go here
  });
</script>

<footer id="footer" class="bg-gray-800 text-white py-6 px-4">
  <div class="container mx-auto text-center">
    <p class="mb-4">© {year} - All rights reserved.</p>
    <div class="flex justify-center space-x-4">
      <a href="#" class="hover:text-gray-300">Privacy Policy</a>
      <a href="#" class="hover:text-gray-300">Terms of Service</a>
      <a href="#" class="hover:text-gray-300">Contact</a>
    </div>
  </div>
</footer>
```