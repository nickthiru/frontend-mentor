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
  
  :global(.cover-l > .center) {
    margin-block: auto;
  }
  
  .cover-l > :first-child:not(.center) {
    margin-block-start: 0;
  }
  
  .cover-l > :last-child:not(.center) {
    margin-block-end: 0;
  }
</style>
