<script>
	import { toBlob } from 'html-to-image';
	import { saveAs } from 'file-saver';

	let searchValue = '';
	let main;

	function search() {
		console.log(searchValue);
	}

	function download() {
		toBlob(main).then((blob) => {
			if (window.saveAs) {
				window.saveAs(blob, 'my-image.png');
			} else {
				saveAs(blob, 'my-image.png');
			}
		});
	}
</script>

<div class="main" bind:this={main}>
	<h1>SoolJari</h1>
	<h3>이세상 모든 술들</h3>

	<input type="text" bind:value={searchValue} placeholder="검색할 술을 입력하세요" />
	<button on:click={search}>검색</button>
	<p>{searchValue}</p>
</div>

<button on:click={download}>다운로드</button>

<style>
	.main {
		background: white;
		border: 1px solid black;
	}
</style>
