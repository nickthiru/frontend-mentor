<script>
  export let max_inline = "var(--measure)";  // max-inline-size
  export let p_inline = "var(--size-3)";  // padding-inline
</script>


<div
  class="center-l"
  style="
    --max-inline:{max_inline};
    --p-inline:{p_inline};
  "
>
  <slot />
</div>


<style>
  .center-l {
    box-sizing: content-box;
    margin-inline: auto;
    max-inline-size: var(--max-inline);
    padding-inline: var(--p-inline);
  }
</style>