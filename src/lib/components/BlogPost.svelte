<script>
  import { onMount } from 'svelte';
  import { firestore } from '../../utils/firestore.js';

  let post = {};

  onMount(async () => {
    const doc = await firestore.collection('blogPosts').doc($$props.id).get();
    post = doc.data();
  });
</script>

<article class="bg-gray-800 text-white p-4 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-2">{post.title}</h2>
  <p class="text-gray-400">{post.date}</p>
  <div class="mt-4">
    {@html post.content}
  </div>
</article>