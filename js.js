//  <script>
document.addEventListener("DOMContentLoaded", () => {
    /*Para agregar distinguir entre el contact form 1 y el 2*/
    const info_message = document.querySelectorAll('.info_message');
    const icon_info = document.querySelectorAll('.info_preferred_lang');
    if (icon_info != null) {
        for (i = 0; i < icon_info.length; i++) {
            icon_info[i].classList.add('my_icon_' + i);
            info_message[i].classList.add('my_message_' + i)
        }
    }

    /*Para agregar el evento clic al Icon Info */
    /* Form 1 */
    const my_icon_0 = document.querySelector('.my_icon_0');
    const my_message_0 = document.querySelector('.my_message_0');
    my_icon_0.onclick = function() {
            if (my_message_0.classList.contains("my_first_hide")) {
                my_message_0.classList.remove('my_first_hide');
                my_message_0.classList.add('show_info_preferred');
            } else {
                my_message_0.classList.toggle('hide_info_preferred');
                my_message_0.classList.toggle('show_info_preferred');
            }
        }
        /* Form 2 */
    const my_icon_1 = document.querySelector('.my_icon_1');
    const my_message_1 = document.querySelector('.my_message_1');
    my_icon_1.onclick = function() {
        if (my_message_1.classList.contains("my_first_hide")) {
            my_message_1.classList.remove('my_first_hide');
            my_message_1.classList.add('show_info_preferred');
        } else {
            my_message_1.classList.toggle('hide_info_preferred');
            my_message_1.classList.toggle('show_info_preferred');
        }
    }
});

// </script>