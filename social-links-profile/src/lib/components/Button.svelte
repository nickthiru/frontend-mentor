<script>
  // export let action  // onButtonPress function
</script>


<button class="btn text text--bold">
  <slot />
</button>


<style>
  .btn {
    /* width: 100%; */
    color: inherit;
    text-align: center;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background-color: var(--grey-700);
    transition: background-color 1s, color 1s;
  }

  .btn:hover {
    color: var(--grey-700);
    background-color: var(--green);
    cursor: pointer;
  }

  /* @media (width <= 68rem) {
    .btn {
      width: 376px;
    }
  }

  @media (width <= 34rem) {
    .btn {
      width: 279px;
    }
  } */
</style>