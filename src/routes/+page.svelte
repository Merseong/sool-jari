<script>
	let a = 0;
	$: a2 = a * 2;
</script>

<h1>Welcome to SvelteKit</h1>
<p>{a}</p>
<p>{a2}</p>
<button on:click={() => a++}>+1</button>
