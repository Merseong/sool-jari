<script>
  export let baseData;

  let imageSrc = '';
  let fileInput;

  $: alcData = {
    title: '',
    category: '',
    degree: 0,
    creator: '',
    ...baseData,
  };

  function onImageUploaded() {
    const [file] = fileInput.files;
    if (file) {
      imageSrc = URL.createObjectURL(file);
    }
  }
</script>

<div id="alc-card">
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
