<script>
  import "../app.css";
  import CoverL from "../../../_styles/layouts/CoverL.svelte";
  import CenterL from "../../../_styles/layouts/CenterL.svelte";
  import BoxL from "../../../_styles/layouts/BoxL.svelte";
  import StackL from "../../../_styles/layouts/StackL.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<CoverL>
  <CenterL>
    <BoxL bg_c="var(--grey-800)" b_r="var(-radius-3)" t_align="center">
      <StackL s="var(--size-px-5">
        <StackL s="var(--size-px-5">
          <div>
            <img src="../../assets/avatar-jessica.jpeg" alt="avatar" width="88" height="88">
          </div>
          <StackL s="var(--size-px-1">
            <h1 class="title">Jessica Randall</h1>
            <p class="text text--bold name-location">London, United Kingdom</p>
          </StackL>
          <p class="text">"Front-end developer and avid reader."</p>
        </StackL>
        <StackL>
          <Button>GitHub</Button>
          <Button>Frontend Mentor</Button>
        </StackL>
      </StackL>
    </BoxL>
  </CenterL>
</CoverL>

<!-- <div class="container--center">
  <div class="card">
    <img src="./assets/images/avatar-jessica.jpeg" alt="avatar" width="88" height="88" id="avatar"
      class="profile-pic">
    <div class="name-location">
      <h1 class="title">Jessica Randall</h1>
      <p class="text text--bold">London, United Kingdom</p>
    </div>
    <div class="bio">
      <p class="text">"Front-end developer and avid reader."</p>
    </div>
    <ul class="links">
      <li class="btn"><span class="text text--bold">GitHub</span></li>
      <li class="btn"><span class="text text--bold">Frontend Mentor</span></li>
      <li class="btn"><span class="text text--bold">LinkedIn</span></li>
      <li class="btn"><span class="text text--bold">Twitter</span></li>
      <li class="btn"><span class="text text--bold">Instagram</span></li>
    </ul>
  </div>
</div> -->

<style>
  img {
    display: block;
    border-radius: var(--radius-round);
    margin-inline: auto;
  }
</style>