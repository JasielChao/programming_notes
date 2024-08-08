document.addEventListener("DOMContentLoaded", ()=>{
        
    /* Custom Dropdown Logic */
    let customDropdowns = document.querySelectorAll(".custom-dropdown")
    for (let i = 0; i < customDropdowns.length; i++) {
        customDropdowns[i].addEventListener('click', ()=>{
            customDropdowns[i].classList.toggle("active")
        })
    }

    let customDropdowns_options = document.querySelectorAll(".custom-dropdown .options div")
    for (let i = 0; i < customDropdowns_options.length; i++) {
        customDropdowns_options[i].addEventListener('click', ()=>{

            // Get custom dropdown parent elemnt
            let customDropdown = customDropdowns_options[i].parentElement;
            customDropdown = customDropdown.parentElement;

            // Get custom dropdown the input child elemnt
            customDropdown_input = customDropdown.getElementsByClassName("text-box");

            // Update input value with option select
            customDropdown_input[0].value = customDropdowns_options[i].innerText;
        })
    }

});