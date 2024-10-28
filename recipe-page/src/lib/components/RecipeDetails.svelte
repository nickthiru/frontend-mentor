<script>
	import StackL from "$gl-styles/layouts/StackL.svelte";
	import DescriptionAndPrep from "./details-sections/DescriptionAndPrep.svelte";
	import Ingredients from "./details-sections/Ingredients.svelte";
	import Instructions from "./details-sections/Instructions.svelte";
	import Nutrition from "./details-sections/Nutrition.svelte";
</script>


<div class="details-container">
  <StackL>
    <DescriptionAndPrep />
    <Ingredients />
    <Instructions />
    <Nutrition />
  </StackL>
</div>


<style>
  .details-container {
    padding: var(--size-3);
    border-radius: 0 0 var(--radius-3) var(--radius-3);
    background-color: white;
  }

  @media (width <= 24rem) {
    .details-container {
      border-radius: 0;
    }
  }
</style>