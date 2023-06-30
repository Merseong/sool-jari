<script>
	export let data;

	function removeById(id) {
		fetch();
	}
</script>

<h1>test page</h1>

<table>
	<thead>
		<tr>
			<th>title</th>
			<th>content</th>
			<th>삭제</th>
		</tr>
	</thead>
	<tbody>
		{#each data.tests as test}
			<tr>
				<td>{test.title}</td>
				<td>{test.content}</td>
				<td
					><button
						on:click={async (e) => {
							await fetch(`/test/${test.id}`, {
								method: 'DELETE'
							});

							data.tests = data.tests.filter((t) => t !== test);
						}}
					>
						X
					</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<h3>추가용 폼</h3>
<form method="POST" action="?/create">
	<label for="title">
		Title
		<input type="text" name="title" />
	</label>
	<label for="content">
		Content
		<textarea name="content" cols="30" rows="10" />
	</label>

	<button type="submit">제출하기</button>
</form>

<style>
	table,
	th,
	td {
		border: 1px solid gray;
	}
</style>
