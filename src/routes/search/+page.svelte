<script>
  import Card from './Card.svelte';

  const myArrdata = [
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
    {
      title: 'a',
      class: 'aa',
    },
  ];
</script>

<div class="container grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {#each myArrdata as item}
    <Card baseContent={item.class} />
  {/each}
  <Card baseContent="추가하기" />
</div>
