<script>
  import { goto } from '$app/navigation';

  let searchValue = '';

  $: targetLink = `/search/${searchValue}`;

  function search() {
    goto(targetLink);
  }
</script>

<div class="container mx-auto mt-24 content-center p-2">
  <h1 class="text-center text-4xl font-black">SoolJari</h1>
  <h3 class="text-center text-lg">이세상 모든 술들(을 모으고싶은)</h3>

  <div class="mx-auto flex h-14 max-w-3xl content-center text-center">
    <form class="w-[90%] p-0 pr-2" on:submit|preventDefault={search}>
      <input
        class="m-0 flex h-full w-full rounded-md border"
        type="text"
        bind:value={searchValue}
        placeholder="검색할 술을 입력하세요"
      />
    </form>
    <a
      class="flex w-[10%] items-center justify-center rounded-md border p-1 text-lg"
      href={targetLink}
    >
      검색
    </a>
  </div>
</div>
