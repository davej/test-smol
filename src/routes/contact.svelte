```svelte
<script>
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Button from '$lib/components/Button.svelte';

  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    // handle form submission
  }
</script>

<Header />

<Navbar />

<main class="dark:bg-gray-800 dark:text-white">
  <h1 class="text-3xl font-bold">Contact Me</h1>
  <form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="name" class="sr-only">Name</label>
        <input id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" bind:value={name} />
      </div>
      <div>
        <label for="email" class="sr-only">Email address</label>
        <input id="email" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" bind:value={email} />
      </div>
      <div>
        <label for="message" class="sr-only">Message</label>
        <textarea id="message" name="message" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your message" bind:value={message}></textarea>
      </div>
    </div>

    <Button text="Submit" />
  </form>
</main>

<Footer />
```