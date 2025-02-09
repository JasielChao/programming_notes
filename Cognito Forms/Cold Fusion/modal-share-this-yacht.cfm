<!---
    /* ************************************************
     * SeamLess Cognito - Custom Lazy Load V 1.0.0
     * This is dynamic template to defer the cognito forms, just adjusted the 
     * data-key, data-form and prefill values for each form and should be work for any form
     * 
     * - Let me know if you have any questions
     *                                -- Jasiel
     * 
     * Example: https://www.intermarineboats.com/yacht-brokerage/2017-amer-94/2824770-2
    ************************************************ */ 
--->
    
    <!--- Cognito Data --->
    <cfset dataKey="fOoiytLJ0UevV6XkyONV6A">  
    <cfset dataForm="9">

    <cfoutput>#dataKey#</cfoutput>

<!-- Modal Form - Share This Yacht -->
<div class="modal-form-container">
    <script src="https://www.cognitoforms.com/f/seamless.js" data-key="<cfoutput>#dataKey#</cfoutput>"></script>

    <a id="btn-open-modal-form" class="hidden" data-fancybox data-src="#open-modal-form" href="javascript:;">Open modal form</a>

    <div class="cognito-div"><div class="cognito-modal"></div></div>

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

