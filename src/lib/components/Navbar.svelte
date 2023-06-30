```svelte
<script>
  import { goto } from '$app/navigation';
  let active = 'home';

  function navigateTo(route) {
    active = route;
    goto(`/${route}`);
  }
</script>

<nav id="navbar" class="bg-dark text-white p-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-2xl font-bold">
      <a href="/" on:click|preventDefault={() => navigateTo('home')}>My Website</a>
    </div>
    <div>
      <a href="/about" on:click|preventDefault={() => navigateTo('about')} class="mx-2 {active === 'about' ? 'text-yellow-500' : ''}">About</a>
      <a href="/portfolio" on:click|preventDefault={() => navigateTo('portfolio')} class="mx-2 {active === 'portfolio' ? 'text-yellow-500' : ''}">Portfolio</a>
      <a href="/blog" on:click|preventDefault={() => navigateTo('blog')} class="mx-2 {active === 'blog' ? 'text-yellow-500' : ''}">Blog</a>
      <a href="/contact" on:click|preventDefault={() => navigateTo('contact')} class="mx-2 {active === 'contact' ? 'text-yellow-500' : ''}">Contact</a>
    </div>
  </div>
</nav>

<style>
  .bg-dark {
    background-color: #1a202c;
  }
  .text-white {
    color: #fff;
  }
  .text-yellow-500 {
    color: #d69e2e;
  }
</style>
```