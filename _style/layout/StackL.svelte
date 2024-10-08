<script>
  export let s = "";  // margin-block-start size
</script>

<div
  class="stack-l"
  style="
    --s:{s};
  "
>
  <slot />
</div>


<style>
  .stack-l {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  :global(.stack-l > *) {
    margin-block: 0;
  }

  :global(.stack-l > * + *) {
    /* margin-block-start: var(--s, var(--size-5)); */
    margin-block-start: var(--s, var(--size-fluid-1));
  }
</style>