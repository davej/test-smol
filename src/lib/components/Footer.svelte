```svelte
<script>
  import { currentYear } from '$lib/utils.js';
</script>

<footer class="bg-gray-800 text-white py-6 px-4">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <p>&copy; {currentYear()} Your Name</p>
    </div>
    <div>
      <a href="https://github.com/yourusername" class="text-white hover:text-gray-300 mx-2" target="_blank">Github</a>
      <a href="https://linkedin.com/in/yourusername" class="text-white hover:text-gray-300 mx-2" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/yourusername" class="text-white hover:text-gray-300 mx-2" target="_blank">Twitter</a>
    </div>
  </div>
</footer>
```