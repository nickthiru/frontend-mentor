<div class="cover-l">
  <slot />
</div>

<style>
  .cover-l {
    display: flex;
    flex-direction: column;
    min-block-size: 100vh;
    padding: var(--size-3);
  }
  
  .cover-l > * {
    margin-block: var(--size-3);
  }
  
  :global(.cover-l > .center-l) {
    margin-block: auto;
  }
  
  .cover-l > :first-child:not(.center-l) {
    margin-block-start: 0;
  }
  
  .cover-l > :last-child:not(.center-l) {
    margin-block-end: 0;
  }

  @media (width <= 24rem) {
    .cover-l {
      padding: 0;
    }
  }
</style>
