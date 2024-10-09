<script>
  export let s = "var(--size-3)";  // gap
  export let j_c = "left";  // justify-content
  export let a_i = "spread";  // align-items
</script>


<div
  class="cluster"
  style="
    --s:{s};
    --j-c:{j_c};
    --a-i:{a_i};
  "
>
  <slot />
</div>


<style>
  .cluster {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s);
    justify-content: --j-c;
    align-items: --a-i;
  }
</style>