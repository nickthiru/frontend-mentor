<script>
  export let invert = false;
</script>


<div
  class="box-l"
  class:invert
>
  <slot />
</div>


<style>
  .box-l {
    width: var(--w, inherit);
    /* width: fit-content; */
    height: var(--h, inherit);

    color: var(--c, inherit);

    padding: var(--p, var(--size-2));

    border-width: var(--b-w, 0);
    border-style: var(--b-s, none);
    border-color: var(--b-c, none);
    border-radius: var(--b-r, 0);

    background-color: var(--bg-c, white);
  }

  .box-l * {
    color: inherit;
  }

  /* .box-l.invert {
    color: var(--color-light);
    background-color: var(--color-dark);
  } */
</style>