<script>
  let searchValue = '';

  function search() {
    console.log(searchValue);
  }
</script>

<div class="container mx-auto content-center p-2">
  <h1 class="text-center text-2xl">SoolJari</h1>
  <h3 class="text-center text-lg">이세상 모든 술들</h3>

  <div class="content-center">
    <input
      class="block w-full rounded-md border placeholder:text-center"
      type="text"
      bind:value={searchValue}
      placeholder="검색할 술을 입력하세요"
    />
    <button class="block rounded-md border p-1" on:click={search}>검색</button>
  </div>
</div>
