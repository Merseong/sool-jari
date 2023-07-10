<script>
  import { toBlob } from 'html-to-image';
  import { saveAs } from 'file-saver';
  import Basic from './Basic.svelte';

  export let data;

  $: alcData = data.alc;

  function download() {
    toBlob(document.getElementById('alc-card')).then((blob) => {
      if (window.saveAs) {
        window.saveAs(blob, 'my-image.png');
      } else {
        saveAs(blob, 'my-image.png');
      }
    });
  }
</script>

<Basic baseData={alcData} />

<button on:click={download}>다운로드</button>

<style lang="postcss">
</style>
