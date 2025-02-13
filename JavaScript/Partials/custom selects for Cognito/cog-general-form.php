
<?php 
    /* ************************************************
     * SeamLess Cognito - Custom Lazy Load
     * This is dynamic template to defer the cognito forms, just adjusted the 
     * data-key, data-form and prefill values for each form and should be work for any form
     * 
     * - Let me know if you have any questions
     *                                -- Jasiel
    ************************************************ */  

    #Cognito Data
    $dataKey = "ygGf3oj73EqY6E6uZ5y80Q";
    $dataForm = "6";

?>
<!-- General Form -->
<div id="Cognito-<?php echo $dataForm; ?>" class="cognito-div">
    <div class="cognito-form"></div>
</div>

<!--- Script to Lazy load the SeamLess cognito-->
<script defer>
    document.addEventListener('DOMContentLoaded', ()=>{

        /* Lazy Cognito Form  */
        let cognitoLoaded_<?php echo $dataForm; ?>= false;

        function lazyCognito_<?php echo $dataForm; ?> (scroll, mouse){
            /* Getting empty div to append the cognito script */
            let CognitoHere = document.querySelector('#Cognito-<?php echo $dataForm; ?>');

            if(CognitoHere && cognitoLoaded_<?php echo $dataForm; ?>== false){
                /* To make responsive the video and compatible with any browser */
                
                /* Creating script to load the external cognito library  */
                let scriptCognito = document.createElement("script");
                scriptCognito.setAttribute("src", "https://www.cognitoforms.com/f/seamless.js");
                scriptCognito.setAttribute("data-key", "<?php echo $dataForm; ?>");

                /* Adding to the Cognito container with the ID #lazyCognito */
                CognitoHere.appendChild(scriptCognito);

                

                setTimeout(() => {
                    // Calling the prefill function of this cognito form
                    Cognito.mount("<?php echo $dataForm; ?>", "#Cognito-<?php echo $dataForm; ?> .cognito-form")
                    .prefill({
                        "PageTitle": document.title,
                        "PageUrl": window.location.href
                    });

                    // Function to initialize the MutationObserver when the form is available
                    function waitForCognitoForm() {
                        const targetNode = document.querySelector("#Cognito-<?php echo $dataForm; ?> form");

                        if (targetNode) {
                            // Form exists, initialize MutationObserver
                            console.log("Form exists, loading the custom cognito select");
                            customCognitoSelect();

                        } else {
                            // Retry in 300ms if form is not found
                            console.log("Retry in 300ms if form is not found");
                            setTimeout(waitForCognitoForm, 300);
                        }
                    }

                    // Call function to wait for the form to be available
                    waitForCognitoForm();


                    
                }, 250);

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