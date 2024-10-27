<script>
	import StackL from "$gl-styles/layouts/StackL.svelte";
	import DescriptionAndPrep from "./DescriptionAndPrep.svelte";
	import Ingredients from "./Ingredients.svelte";
	import Instructions from "./Instructions.svelte";
	import Nutrition from "./Nutrition.svelte";
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