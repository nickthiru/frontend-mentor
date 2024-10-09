<script>
  // export let s = "var(--size-5)";  // margin-block-start size
  export let g = "var(--size-5)";  // gap size

</script>

<div
  class="stack-l"
  style="
    --g:{g};
  "
>
  <slot />
</div>


<style>
  .stack-l {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--g);
  }

  /* :global(.stack-l > *) {
    margin-block: 0;
  } */

  /* :global(.stack-l > * + *) {
    margin-block-start: var(--s);
  } */
</style>