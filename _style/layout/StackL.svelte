<div class="stack-l">
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
    margin-block-start: var(--s, var(--size-5));
  }
</style>