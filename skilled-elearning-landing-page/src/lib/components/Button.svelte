<script>
  export let color = "";
  export let url = "#";
</script>


<a href={url}
  class="{color}"
>
  <slot />
</a>


<style>
  /* Link-type Button */
  a {
    display: inline-block;
    color: var(--red-6);
    text-decoration: none;
  }

  a.black, a.orange, a.purple {
    color: white;
    padding-block: var(--size-3);
    padding-inline: var(--size-7);
    border-radius: var(--radius-4);
  }

  .black {
    /* background-color: hsl(233deg, 54%, 16%); */
    background-color: var(--blue-900);
  }

  .orange {
    background-image: var(--gradient-pink);
  }

  .purple {
    background-image: var(--gradient-purple);
  }

  a:hover {
     opacity: 0.6;
  }
</style>
