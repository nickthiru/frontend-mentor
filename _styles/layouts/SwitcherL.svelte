<script>
  export let g = "var(--size-7)";  // gap
  export let t = "375px";  // threshold: The container width at which the component switches between a horizontal and vertical layout
  export let l = 3;  // limit: The maximum number of elements allowed to appear in the horizontal configuration
  
  $: lPlus = l + 1;
</script>


<div class="switcher-l"
  style="
    --g:{g};
    --t:{t};
    --lPlus:{lPlus};
  "
>
  <slot />
</div>

<style>
  .switcher-l {
    display: flex;
    flex-wrap: wrap;
    gap: var(--g);
  }

  :global(.switcher-l > *) {
    flex-grow: 1;
    flex-basis: calc(( var(--t) - 100%) * 999);
  }

  :global(.switcher-l > :nth-last-child(n+ 4)),
  :global(.switcher-l > :nth-last-child(n+ 4) ~ *) {
    flex-basis: 100%;
  }
</style>