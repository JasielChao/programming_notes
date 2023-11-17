<?php /* Cookie Consent Popup */ ?>

<div id="cookieConsent" class="cookie-consent container">
    <div class="content-wrap">
        <h2 class="sub-title">Cookies Consent</h2>
        <p>By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. Visit the <a class="link-paragraph" href="/privacy-policy">Privacy Policy</a> to find out more.</p>
        <button class="link link-border-bottom">Accept</button>
    </div>
</div>


<!--- Footer Goblal Scripts --->
<script defer>
    document.addEventListener("DOMContentLoaded", () => {

        let cookieConsent = document.querySelector('#cookieConsent');
        let btn_cookieConsent = document.querySelector('#cookieConsent button');

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

        // Consulting if the user already accepted the cookies police
        let cookie_consent = getCookie("user_cookie_consent");
        if(cookie_consent != 'true'){
            setTimeout(() => {
                cookieConsent.classList.add('active');
            }, 300);
        }

        //Event User to accept the cookies police
        btn_cookieConsent.addEventListener('click', ()=>{
            cookieConsent.classList.remove('active');
            acceptCookieConsent();
        })
    });
</script>
