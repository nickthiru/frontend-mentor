<script>
  import "../app.css";
  import BoxL from "../../../_style/layout/BoxL.svelte";
	import CenterL from "../../../_style/layout/CenterL.svelte";
	import CoverL from "../../../_style/layout/CoverL.svelte";
	import StackL from "../../../_style/layout/StackL.svelte";
</script>


<CoverL>
  <CenterL>
    <BoxL>
      <StackL>
        <img src="../../images/image-qr-code.png" alt="QR Code" width="300" height="300">
        <BoxL>
          <StackL>
            <h1>Improve your front-end skills by building projects</h1>
            <p class="font-size:biggish">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </StackL>
        </BoxL>
      </StackL>
    </BoxL>
  </CenterL>
</CoverL>

<!-- <BoxL --b-w="var(--size-4)" --b-s="solid" --b-c="var(--red-6)"></BoxL> -->