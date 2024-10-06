<script>
  export let w = "";  // width
  export let h = "";  // height
  export let c = "";  // color
  export let p = "";  // padding
  export let b_w = "";  // border-width
  export let b_s = "";  // border-style
  export let b_c = "";  // border-color
  export let b_r = "";  // border-radius
  export let bg_c = ""; // background-color
  export let invert = false;
</script>


<div
  class="box-l"
  class:invert
  style="
    --w:{w};
    --h:{h};
    --c:{c};
    --p:{p};
    --b-w:{b_w}
    --b-s:{b_s}
    --b-c:{b_c}
    --b-r:{b_r}
    --bg-c:{bg_c}
  "
>
  <slot />
</div>


<style>
  .box-l {
    width: var(--w, inherit);
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