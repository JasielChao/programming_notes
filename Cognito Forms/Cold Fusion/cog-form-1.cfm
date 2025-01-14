
 <!---   /* ************************************************
     * SeamLess Cognito - Custom Lazy Load V 1.0.0
     * This is dynamic template to defer the cognito forms, just adjusted the 
     * data-key, data-form and prefill values for each form and should be work for any form
     * 
     * - Let me know if you have any questions
     *                                -- Jasiel
     * 
     * Example: https://www.seattleyachts.com/yacht-sales-and-brokerage-in-san-diego
    ************************************************ */  
--->

<!--   Cognito Data  -->  
<cfset dataKey="or_12nlnoUKokQ0b0rrIVQ">
<cfset dataForm="1">    

<cfoutput>

    <div id="Cognito-#dataForm#" class="cognito-div module-up">
        <div class="cognito-form"></div>
    </div>

    <!-- Script to Lazy load the SeamLess cognito-->
    <script src="https://www.cognitoforms.com/f/seamless.js" data-key="#dataKey#"></script>
    <script defer>
        document.addEventListener('DOMContentLoaded', ()=>{

            /* Lazy Cognito Form  */
            let cognitoLoaded_#dataForm# = false;

            function lazyCognito_#dataForm# (scroll, mouse){
                /* Getting empty div to append the cognito script */
                let CognitoHere = document.querySelector('##Cognito-#dataForm#');

                if(CognitoHere && cognitoLoaded_#dataForm# == false){

                    // Calling the prefill function of this cognito form
                    Cognito.mount("#dataForm#", "##Cognito-#dataForm# .cognito-form").prefill(
                    {
                        "DataTitle": document.title,
                        "DataPage": "#request.MyURL##CANONDATA.REQUEST_ORIGINAL_URL#"
                    });

                    // Update variable
                    cognitoLoaded_#dataForm# = true;
                }

                if(scroll){
                    document.removeEventListener("scroll", lazyCognito_#dataForm#);
                }

                if(mouse){
                    document.removeEventListener("mousemove", lazyCognito_#dataForm#);
                }
            }

            setTimeout(() => {
                lazyCognito_#dataForm#();
            }, 7000);

            document.addEventListener("scroll",  lazyCognito_#dataForm#);
            document.addEventListener("mousemove",  lazyCognito_#dataForm#);
            /* Lazy Cognito Form Ends */

        });
    </script>
</cfoutput>


<style>
    .cognito input, .cognito textarea, .cognito select {
    background: transparent;
    color: #fff;
    }
    .cognito input::placeholder, .cognito textarea::placeholder {
    text-transform: uppercase;
    }
    .cognito .c-button-section {
    text-align: center;
    }
    .cognito .c-action {
    float: none;
    }
    .cognito #c-submit-button {
    text-transform: uppercase;
    background: #1e427d;
    border-color: #7d9ece;
    }
  </style>