<script>
  import { toBlob } from 'html-to-image';
  import { saveAs } from 'file-saver';

  export let data;

  let main;
  let imageSrc = '';
  let fileInput;

  $: alcData = data.alc;

  console.log(data.alc);

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

<div bind:this={main}>
  <div>
    {alcData.title}
  </div>
  <div>
    {alcData.category}
  </div>
  <div>
    {alcData.degree}도
  </div>
  <div>
    {alcData.creator}
  </div>

  <img class="container max-h-96 object-contain" src={imageSrc} alt="" />
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

<style lang="postcss">
</style>
