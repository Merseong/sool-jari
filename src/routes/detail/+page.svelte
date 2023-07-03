<form method="POST" action="?/create">
  <label for="title">
    술 타이틀
    <input type="text" name="title" />
  </label>

  <label for="category">
    주종
    <input type="text" name="category" />
  </label>

  <label for="degree">
    도수
    <input type="number" name="degree" />
  </label>

  <label for="creator">
    생산자/제조원/국가
    <input type="text" name="creator" />
  </label>

  <button type="submit">제출하기</button>
</form>

<style lang="postcss">
  label {
    @apply block;
  }
</style>
