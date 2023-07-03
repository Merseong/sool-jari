<script>
  import Card from './Card.svelte';

  export let data;

  $: myArrdata = data.alcs;
</script>

<div class="container grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {#each myArrdata as item}
    <Card baseContent={item.title} linkTo={`/detail/${item.id}`} />
  {/each}
  <Card baseContent="추가하기" linkTo="/detail" />
</div>
