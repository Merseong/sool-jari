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

<div id="alc-card" class="border border-black">
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
