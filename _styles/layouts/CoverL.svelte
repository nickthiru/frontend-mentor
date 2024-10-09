<div class="cover-l">
  <slot />
</div>

<style>
  .cover-l {
    display: flex;
    flex-direction: column;
    min-block-size: 100vh;
    padding: var(--size-3);
    justify-content: center;
  }
  
  .cover-l > * {
    margin-block: var(--size-3);
  }
  
  :global(.cover-l > .box-l) {
    margin-block: auto;
  }
  
  .cover-l > :first-child:not(.box-l) {
    margin-block-start: 0;
  }
  
  .cover-l > :last-child:not(.box-l) {
    margin-block-end: 0;
  }
</style>
