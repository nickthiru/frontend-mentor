<script>
  export let w = "inherit";  // width
  export let h = "inherit";  // height
  export let min_w = "inherit";  // max-width
  export let max_w = "inherit";  // max-width
  export let c = "inherit";  // color
  export let p = "0";  // padding
  export let m = "0";  // margin
  export let m_inline = "0";  // margin-inline
  export let b_w = "0";  // border-width
  export let b_s = "none";  // border-style
  export let b_c = "none";  // border-color
  export let b_r = "0";  // border-radius
  export let bg_c = "white"; // background-color
  export let t_align = "left"; // text-align
  export let l_h = "var(--font-lineheight-1)";  // line-height
  export let shadow = "none"; // box-shadow
  export let invert = false;
</script>


<div
  class="box-l"
  class:invert
  style="
    --w:{w};
    --h:{h};
    --min-w:{min_w};
    --max-w:{max_w};
    --c:{c};
    --p:{p};
    --b-w:{b_w};
    --b-s:{b_s};
    --b-c:{b_c};
    --b-r:{b_r};
    --m:{m};
    --m-inline:{m_inline};
    --bg-c:{bg_c};
    --t-align:{t_align};
    --l-h:{l_h};
    --shadow:{shadow};
  "
>
  <slot />
</div>


<style>
  .box-l {
    width: var(--w);
    height: var(--h);
    min-width: var(--min-w);
    max-width: var(--max-w);
    color: var(--c);
    padding: var(--p);
    border-width: var(--b-w);
    border-style: var(--b-s);
    border-color: var(--b-c);
    border-radius: var(--b-r);
    margin: var(--m);
    margin-inline: var(--m-inline);
    background-color: var(--bg-c);
    text-align: var(--t-align);
    line-height: var(--l-h);
    box-shadow: var(--shadow);
  }

  .box-l * {
    color: inherit;
  }

  /* .box-l.invert {
    color: var(--color-light);
    background-color: var(--color-dark);
  } */
</style>