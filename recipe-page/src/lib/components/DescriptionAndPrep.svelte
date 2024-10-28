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
          <span class="inc-indent"><b>Total</b>: Approximately 10 minutes</span>
        </li>
        <li>
          <span class="inc-indent"><b>Preparation</b>: 5 minutes</span>
        </li>
        <li>
          <span class="inc-indent"><b>Cooking</b>: 5 minutes</span>
        </li>
      </ul>
    </div>
  </StackL>
</section>



<style>
  .title {
    font-size: var(--font-size-6);
    line-height: var(--font-lineheight-0);
  }

  .prep {
    padding: 1rem;
    border-radius: var(--radius-2);
    background-color: var(--pink-0);
  }

  .prep__heading {
    font-family: Outfit, sans-serif;
    font-size: var(--font-size-3);
    color: var(--pink-11);
  }
</style>