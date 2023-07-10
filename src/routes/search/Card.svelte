<script>
  export let baseContent = '';
  export let linkTo = '/search';

  $: cardContent = {
    title: '',
    category: '',
    others: [],
    ...baseContent,
  };
</script>

<a class="rounded-md border hover:bg-slate-50" href={linkTo}>
  <p class="h-8 text-sm text-gray-500">{cardContent.category}</p>
  <p class="h-10 text-xl font-bold">{cardContent.title}</p>
  <p class="h-12 text-sm text-gray-400">
    {#each cardContent.others as altName}
      <span>{altName}, </span>
    {/each}
  </p>
</a>
