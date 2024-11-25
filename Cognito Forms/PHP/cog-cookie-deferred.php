
<?php 
    /* ************************************************
     * SeamLess Cognito - Custom Lazy Load with Cookie V 1.0.1
     * This is dynamic template to defer the cognito forms, just adjusted the 
     * data-key, data-form and prefill values for each form and should be work for any form
     * 
     * - Let me know if you have any questions
     *                                -- Jasiel
     * 
     * Example: https://alliedroofingfl.com/
    ************************************************ */  

    #Cognito Data
    $dataKey = "zqSmu7YHj0aGFnkCnk9mhQ";
    $dataForm = "2";

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
                    "PageURL": window.location.href
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

        <?php /* Conditional to defer the Cognito form based on a cookie 
                This is to be able to difference between a user and bot without getting catched
            */
        ?>

        if(getCookie("cognito_form_cookie")){// If the cookie exists, then the user is not a first-time visitor.

            // Let's load Cognito Form
            console.log("Load Cognito Form");
            lazyCognito_<?php echo $dataForm; ?>();
            
        }else{  // If the Cookie doesn't exist, then is a bot or a first-time user
            
            // Let's create the cookie 
            deleteCookie('cognito_form_cookie');
            setCookie('cognito_form_cookie', 'true', 30);

            // Let's defer the Cognito Form
            console.log("lazy Load Cognito Form");
            setTimeout(() => {
                lazyCognito_<?php echo $dataForm; ?>();
            }, 7000);
        }

        document.addEventListener("scroll",  lazyCognito_<?php echo $dataForm; ?>);
        document.addEventListener("mousemove",  lazyCognito_<?php echo $dataForm; ?>);
        /* Lazy Cognito Form Ends */

    });
</script>

<!--- Cookie Functions--->
<script defer>

        // Create cookie
        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        // Delete cookie
        function deleteCookie(cname) {
            const d = new Date();
            d.setTime(d.getTime() + (24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=;" + expires + ";path=/";
        }

        // Read cookie
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        // Set cookie consent
        function acceptCookieConsent(){
            deleteCookie('user_cookie_consent');
            setCookie('user_cookie_consent', 'true', 30);
        }
</script>
