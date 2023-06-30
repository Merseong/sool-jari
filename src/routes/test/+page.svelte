<script>
  export let data;
</script>

<h1>test page</h1>

<table>
  <thead>
    <tr>
      <th>title</th>
      <th>content</th>
    </tr>
  </thead>
  <tbody>
    {#each data.tests as test}
      <tr>
        <td>{test.title}</td>
        <td>{test.content}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table,
  th,
  td {
    border: 1px solid gray;
  }
</style>
