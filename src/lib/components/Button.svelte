```svelte
<script>
  export let text = '';
  export let type = 'button';
  export let onClick = () => {};
</script>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type={type} on:click={onClick}>
  {text}
</button>

<style>
  button {
    transition: all 0.3s ease;
  }
</style>
```