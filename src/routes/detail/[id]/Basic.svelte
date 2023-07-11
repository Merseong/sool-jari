<script>
  export let baseData;

  $: alcData = {
    title: '',
    category: '',
    degree: 0,
    creator: '',
    ...baseData,
  };
</script>

<div id="alc-card">
  <div class="m-2 h-64 w-96 rounded-md border-2 border-black bg-white p-2">
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
  </div>
</div>
