<script>
  export let color = "";
  // export let type = "";
</script>


<a href="#"
  class="{color}"
>
  <slot />
</a>


<style>
  a {
    display: inline-block;
    color: var(--red-6);
    padding-block: var(--size-3);
    padding-inline: var(--size-8);
    border-radius: var(--radius-4);
    text-decoration: none;
  }

  a.black, a.orange, a.purple {
    color: white;
  }

  .black {
    background-color: hsl(233deg, 54%, 16%);
  }

  .orange {
    background-image: linear-gradient(hsl(322deg, 87%, 55%), hsl(13deg, 100%, 64%));
  }

  .purple {
    background-image: linear-gradient(hsl(237deg, 100%, 64%), hsl(322deg, 87%, 55%)); 
  }

  a:hover {
     /* background-color: hsl(234deg, 25%, 52%); */
     opacity: 0.6;
  }
</style>
