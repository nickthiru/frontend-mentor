<script>
  // import CoverL from "$gl-layouts/CoverL.svelte";
	// import CenterL from "$gl-layouts/CenterL.svelte";
  import { base } from '$app/paths';
  import Button from "$components/Button.svelte";

  export let course;

  $: imageSrc = `${base}${course.image}`;
</script>
<div class="card">
  <img src={imageSrc} alt={course.name} width="56px" height="56px">
  <h3>{course.name}</h3>
  <p>{course.description}</p>
  <Button>Get Started</Button>
</div>


<style>
  .card {
    display: flex;
    flex-direction: column;
    max-width: var(--size-14);
    padding-inline: var(--size-7);
    border-radius: var(--radius-3);
    background-color: white;
    box-shadow: var(--shadow-3);
  }
</style>