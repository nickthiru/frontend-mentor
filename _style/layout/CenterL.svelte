<div class="center-l">
  <slot />
</div>


<style>
  .center-l {
  box-sizing: content-box;
  margin-inline: auto;
  /* max-inline-size: var(--measure); */
  padding-inline-start: var(--size-3);
  padding-inline-end: var(--size-3);
}
</style>