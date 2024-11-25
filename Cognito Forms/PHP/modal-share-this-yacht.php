<?php 
    /* ************************************************
     * SeamLess Cognito - Custom Lazy Load V 1.0.0
     * This is dynamic template to defer the cognito forms, just adjusted the 
     * data-key, data-form and prefill values for each form and should be work for any form
     * 
     * - Let me know if you have any questions
     *                                -- Jasiel
     * 
     * Example: https://atlanticyachtandship.com/used-yachts-for-sale/1998-devonport-chakra/2798339/
    ************************************************ */ 
    
    #Cognito Data
    $dataKey = "dA2yK_CxD0-J8d35DyePpA";
    $dataForm = "2";

    // Get Parameter
    $yachtName = isset($args['yachtName']) ? $args['yachtName'] : '';
    $yachLocation = isset($args['yachLocation']) ? $args['yachLocation'] : '';
    $yachPrice = isset($args['yachPrice']) ? $args['yachPrice'] : '';
    $yachLength = isset($args['yachLength']) ? $args['yachLength'] : '';
    $yachBeam = isset($args['yachBeam']) ? $args['yachBeam'] : '';
    $yachDraft = isset($args['yachDraft']) ? $args['yachDraft'] : '';
?>

<!-- Modal Form - Share This Yacht -->
<div class="modal-form-container">
    <script src="https://www.cognitoforms.com/f/seamless.js" data-key="<?php echo $dataKey; ?>"></script>
    <style>
        <?php
            # Include a partial file 
            include get_template_directory() . '/assets/css/partials/modal-contact-for-listings.css' 
        ?>
    </style>

    <a id="btn-open-modal-form" class="hidden" data-fancybox data-src="#open-modal-form" href="javascript:;">Open modal form</a>
	
	<div class="hidden">
		<div id="open-modal-form" class="modal-form">
            <div class="yacht-info">
                <h2 class="title-m color-white"> <?php echo $yachtName; ?> </h2>

                <div class="info-wrap">
                    <p class="btn btn-solid price">Price  <?php echo $yachPrice; ?></p>
                    <p class="location"><?php echo  $yachLocation; ?></p>
                </div>

                <div class="spec-wrap">
                    <p class="spec">Length  <b>   <?php echo $yachLength; ?> </b></p>
                    <p class="spec">Beam    <b>  <?php echo $yachBeam; ?> </b></p>
                    <p class="spec">Draft   <b> <?php echo $yachDraft; ?></b></p>
                </div>
            </div>

            <div class="cognito-div"><div class="cognito-modal"></div></div>
		</div>
	</div>

    <script defer>
        let targetModalForm = document.querySelector('#btn-open-modal-form');
        let internalNotes = "This form Inquiry was made from: " + window.location.href;

        const openModalForm = () => {
            let formData = {
                "PageTitle": "<?php echo $yachtName; ?>",
                "PageUrl": window.location.href,
            };
            Cognito.mount("<?php echo $dataForm; ?>", ".cognito-modal").prefill(formData);

            targetModalForm.click();
        }
    </script>
</div>

