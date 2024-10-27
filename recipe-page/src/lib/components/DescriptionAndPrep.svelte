<script>
  import StackL from "$layouts/StackL.svelte";
</script>

<section>
  <StackL>
    <h1 class="title young-serif-regular">Simple Omelette Recipe</h1>
  
    <p class="outfit-regular">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
      to perfection, optionally filled with your choice of cheese, vegetables, or meats.
    </p>
  
    <div class="prep">
      <h2 class="prep__heading outfit-semibold">Preparation time</h2>
      <ul>
        <li>
          <span class="inc-indent"><span class="outfit-bold">Total</span><span class="outfit-regular">:
              Approximately 10
              minutes</span></span>
        </li>
        <li>
          <span class="inc-indent"><span class="outfit-bold">Preparation</span><span class="outfit-regular">:
              5 minutes</span></span>
        </li>
        <li>
          <span class="inc-indent"><span class="outfit-bold">Cooking</span><span class="outfit-regular">: 5
              minutes</span></span>
        </li>
      </ul>
    </div>
  </StackL>
</section>



<style>
  .title {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }

  .prep {
    padding: 1rem;
    border-radius: var(--radius-2);
    background-color: var(--pink-0);
  }

  .prep__heading {
    font-size: var(--size-4);
    color: var(--pink-11);
  }
</style>