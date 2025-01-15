
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
    $dataForm = "6";

    // Get Parameter
    $sendTo = isset($args['sendTo']) ? $args['sendTo'] : '';

?>

<div id="Cognito-<?php echo $dataForm; ?>" class="cognito-div module-up">
    <div class="cognito-form"></div>
</div>

<!--- Script to Lazy load the SeamLess cognito-->
<script src="https://www.cognitoforms.com/f/seamless.js" data-key="<?php echo $dataKey; ?>"></script>
<script defer>
    document.addEventListener('DOMContentLoaded', ()=>{

        /* Lazy Cognito Form  */
        let cognitoLoaded_<?php echo $dataForm; ?>= false;

        function lazyCognito_<?php echo $dataForm; ?> (scroll, mouse){
            /* Getting empty div to append the cognito script */
            let CognitoHere = document.querySelector('#Cognito-<?php echo $dataForm; ?>');

            if(CognitoHere && cognitoLoaded_<?php echo $dataForm; ?>== false){

                // Calling the prefill function of this cognito form
                Cognito.mount("<?php echo $dataForm; ?>", "#Cognito-<?php echo $dataForm; ?> .cognito-form").prefill(
                {
                    "PageTitle": document.title, 
                    "PageUrl": window.location.href,
                    "SendTo":  "<?php echo $sendTo; ?>"
                });

                // Update variable
                cognitoLoaded_<?php echo $dataForm; ?>= true;
            }

            if(scroll){
                document.removeEventListener("scroll", lazyCognito_<?php echo $dataForm; ?>);
            }

            if(mouse){
                document.removeEventListener("mousemove", lazyCognito_<?php echo $dataForm; ?>);
            }
        }

        setTimeout(() => {
            lazyCognito_<?php echo $dataForm; ?>();
        }, 7000);

        document.addEventListener("scroll",  lazyCognito_<?php echo $dataForm; ?>);
        document.addEventListener("mousemove",  lazyCognito_<?php echo $dataForm; ?>);
        /* Lazy Cognito Form Ends */

    });
</script>