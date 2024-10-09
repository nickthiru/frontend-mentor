<script>
  import "../app.css";
  import BoxL from "../../../_styles/layouts/BoxL.svelte";
	import CenterL from "../../../_styles/layouts/CenterL.svelte";
	import CoverL from "../../../_styles/layouts/CoverL.svelte";
	import StackL from "../../../_styles/layouts/StackL.svelte";
</script>


<CoverL>
  <CenterL>
    <BoxL max_w="23rem" b_r="var(--radius-3" shadow="var(--shadow-4)">
      <StackL s="var(--size-fluid-3)">
        <img src="../../assets/image-qr-code.png" alt="QR Code" width="336" height="336">
        <BoxL w="fit-content" p="none" t_align="center">
          <StackL s="var(--size-fluid-2)">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </StackL>
        </BoxL>
      </StackL>
    </BoxL>
  </CenterL>
</CoverL>

<!-- <BoxL --b-w="var(--size-4)" --b-s="solid" --b-c="var(--red-6)"></BoxL> -->

<style>
  img {
    display: block;
    margin-inline: auto;
    border-radius: var(--radius-3);
    width: 100%;
    height: auto;
  }

  h1 {
    color: var(--dark-navy);
    font-size: var(--size-fluid-3);
  }

  p {
    color: var(--grey);
    font-size: var(--size-fluid-2);
    margin-bottom: 2rem;
  }
</style>