<script>
  import { toBlob } from 'html-to-image';
  import { saveAs } from 'file-saver';

  let searchValue = '';
  let main;
  let imageSrc = '';
  let fileInput;

  function search() {
    console.log(searchValue);
  }

  function download() {
    toBlob(main).then((blob) => {
      if (window.saveAs) {
        window.saveAs(blob, 'my-image.png');
      } else {
        saveAs(blob, 'my-image.png');
      }
    });
  }

  function onImageUploaded() {
    const [file] = fileInput.files;
    if (file) {
      imageSrc = URL.createObjectURL(file);
    }
  }
</script>

<div class="main" bind:this={main}>
  <div class="m-1 rounded-md border p-1">
    <h1 class="text-2xl">SoolJari</h1>
    <h3 class="text-lg">이세상 모든 술들</h3>

    <input type="text" bind:value={searchValue} placeholder="검색할 술을 입력하세요" />
    <button class="rounded-md border p-1" on:click={search}>검색</button>
    <p>{searchValue}</p>
    {#if imageSrc.length > 0}
      <img src={imageSrc} alt="img" />
    {/if}
  </div>
</div>

<form>
  <input
    class="file:rounded-md"
    type="file"
    bind:this={fileInput}
    accept="image/*"
    on:change={onImageUploaded}
  />
  <button
    on:click={() => {
      imageSrc = '';
      fileInput.value = '';
    }}>이미지 초기화</button
  >
</form>
<button on:click={download}>다운로드</button>

<style>
  .main {
    padding: 0.5em;
    background: white;
  }

  img {
    height: 400px;
    width: 300px;
    object-fit: contain;
  }
</style>
