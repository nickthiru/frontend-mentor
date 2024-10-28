<script>
  import "../app.css";
  import CoverL from "$layouts/CoverL.svelte";
  import CenterL from "$layouts/CenterL.svelte";
  import RecipeImage from "$components/RecipeImage.svelte";
  import RecipeDetails from "$components/RecipeDetails.svelte";
</script>



<CoverL>
  <CenterL>
    <article>
      <RecipeImage />
      <RecipeDetails />
    </article>
  </CenterL>
</CoverL>
