<script>
  import { goto } from '$app/navigation';

  let searchKey = '';
</script>

<nav class="fixed left-0 right-0 top-0 border-b border-black p-0">
  <div class="flex flex-row">
    <a href="/">home</a>
    <div class="mx-auto">
      <input class="w-96" type="text" bind:value={searchKey} />
      <button
        on:click={() => {
          if (!searchKey.length) return;
          goto(`/search/${searchKey}`);
        }}>Search</button
      >
    </div>
  </div>
</nav>
