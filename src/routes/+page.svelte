<script>
	import { toBlob } from 'html-to-image';
	import { saveAs } from 'file-saver';

	let searchValue = '';
	let main;
	let image;
	let files;

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

	function onImageUploaded() {
		const [file] = files;
		if (file) {
			image.src = URL.createObjectURL(file);
		}
	}
</script>

<div class="main" bind:this={main}>
	<div class="inner">
		<h1>SoolJari</h1>
		<h3>이세상 모든 술들</h3>

		<input type="text" bind:value={searchValue} placeholder="검색할 술을 입력하세요" />
		<button on:click={search}>검색</button>
		<p>{searchValue}</p>
		<img width="300em" src="#" alt="upload" bind:this={image} />
	</div>
</div>

<input type="file" bind:files accept="image/*" on:change={onImageUploaded} />
<button on:click={download}>다운로드</button>

<style>
	.main {
		padding: 0.5em;
		background: white;
	}

	.inner {
		margin: 0.5em;
		padding: 0.5em;
		border: 1px solid black;
	}
</style>
