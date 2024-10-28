<script>
  import "../app.css";
  import CoverLMob from "$styles/layouts/CoverLMob.svelte";
  import CenterLMob from "$styles/layouts/CenterLMob.svelte";
  import RecipeImage from "$components/RecipeImage.svelte";
  import RecipeDetails from "$components/RecipeDetails.svelte";
</script>



<CoverLMob>
  <CenterLMob p_inline="var(--size-4)">
    <main>
      <article>
        <RecipeImage />
        <RecipeDetails />
      </article>
    </main>
  </CenterLMob>
</CoverLMob>
