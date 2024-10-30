<script>
  import "../app.css";
	import Button from "../lib/components/Button.svelte";
</script>


<nav>
  <p class="logo">skilled</p>
  <Button color="black">Get Started</Button>
</nav>

<h1>Maximize skill, minimize budget</h1>
<p>Our modern courses across a range of in-demand skills will give you the 
knowledge you need to live the life you want.</p>
<Button color="orange">Get Started</Button>


<footer>
  <p class="logo">skilled</p>
  <Button color="purple">Get Started</Button>
</footer>


<style>
  nav, footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--size-3);
  }

  footer {
    background-color: var(--indigo-12);
  }

  footer .logo {
    color: white;
  }
</style>


<!-- 

Check out our most popular courses!

Animation
Learn the latest animation techniques to create stunning motion 
design and captivate your audience.
Get Started

Design
Create beautiful, usable interfaces to help shape the future of 
how the web looks.
Get Started

Photography
Explore critical fundamentals like lighting, composition, and focus 
to capture exceptional photos.
Get Started

Crypto
All you need to know to get started investing in crypto. Go from beginner 
to advanced with this 54 hour course.
Get Started

Business
A step-by-step playbook to help you start, scale, and sustain your business 
without outside investment.
Get Started

Get Started -->
