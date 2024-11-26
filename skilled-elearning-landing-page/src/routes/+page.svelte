<script>
  import CenterL from "$gl-layouts/CenterL.svelte";
	import SwitcherL from "$gl-styles/layouts/SwitcherL.svelte";
	import Button from "$components/Button.svelte";
  import "../app.css";
	import CourseCard from "$components/CourseCard.svelte";
  import courses from "$data/courses.js";
	import SectionCard from "../lib/components/SectionCard.svelte";
</script>


<div class="pg-layout">
  <nav>
    <CenterL max_inline="70rem">
      <div class="nav">
        <p class="logo">skilled</p>
        <Button color="black">Get Started</Button>
      </div>
    </CenterL>
  </nav>
  
  
  <CenterL max_inline="70rem">
    <SwitcherL>
      <div>
        <h1 class="heading">Maximize skill, minimize budget</h1>
        <p>Our modern courses across a range of in-demand skills will give you the 
        knowledge you need to live the life you want.</p>
        <Button color="orange">Get Started</Button>
      </div>
      <div>
        <img src="/image-hero-desktop.png" alt="hero" width="500" height="500">
      </div>
    </SwitcherL>
  </CenterL>

  <CenterL>
    <SwitcherL>
      <SectionCard />
      {#each courses as course}
        <CourseCard {course} />
      {/each}
    </SwitcherL>
  </CenterL>
  
  <footer>
    <CenterL max_inline="70rem">
      <div class="footer">
        <p class="logo">skilled</p>
        <Button color="purple">Get Started</Button>
      </div>
    </CenterL>
  </footer>
</div>



<style>
  .pg-layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  footer {
    margin-top: auto;
    background-color: var(--indigo-12);
  }

  .nav, .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: var(--size-3);
  }

  .footer .logo {
    color: white;
  }
</style>


<!-- 

Check out our most popular courses!

-->
