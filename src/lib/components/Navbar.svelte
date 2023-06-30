```svelte
<script>
  import { goto } from '$app/navigation';
</script>

<nav class="bg-gray-800 p-2 mt-0 w-full">
  <div class="container mx-auto flex flex-wrap items-center">
    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
      <a href="/" class="text-white no-underline hover:text-white hover:no-underline" on:click|preventDefault={() => goto('/')}>My Personal Website</a>
    </div>
    <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
      <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-white no-underline" href="/about" on:click|preventDefault={() => goto('/about')}>About</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/projects" on:click|preventDefault={() => goto('/projects')}>Projects</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/blog" on:click|preventDefault={() => goto('/blog')}>Blog</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/contact" on:click|preventDefault={() => goto('/contact')}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```