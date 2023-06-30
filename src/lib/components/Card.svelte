```svelte
<script>
  export let title = "";
  export let description = "";
  export let link = "";
</script>

<div class="card bg-dark text-white rounded-lg shadow-lg">
  <div class="card-body">
    <h5 class="card-title text-xl font-bold">{title}</h5>
    <p class="card-text">{description}</p>
    <a href="{link}" class="btn btn-primary">Read More</a>
  </div>
</div>

<style>
  .card {
    width: 18rem;
  }
</style>
```