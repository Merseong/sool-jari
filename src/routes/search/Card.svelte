<script>
  export let baseContent = '';
  export let linkTo = '/search';
</script>

<a class="rounded-md border bg-primary" href={linkTo}>
  <div class="m-0 p-0">
    {baseContent}
  </div>
</a>
