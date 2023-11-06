    //Scroll Smooth effect just for Anchors Links (<a> tags)
    document.addEventListener("DOMContentLoaded", () => {
        /* Scroll Smooth effect just for Anchors Links (<a> tags)
            Select all the links on the map and save them in a constant */
            let anchorsLinksArray = document.querySelectorAll('a');
            anchorsLinksArray.forEach(anchorsLink => {
                
                //Save Attribute href
                let link_href = anchorsLink.getAttribute("href");
                if (link_href.startsWith('#')) {
                    //Assign an event to each link
                    anchorsLink.addEventListener('click', function(e) {
                        e.preventDefault();
    
                        let sectionScroll  = e.target.getAttribute("href");
    
                        /* To prevent a null target */
                        if(sectionScroll == null){
                            let elementTarget = e.target.parentElement;
                            while(sectionScroll == null){
                                sectionScroll = elementTarget.getAttribute("href");
                                elementTarget = elementTarget.parentElement;
                            }
                        }
                        //Save the section in a constant
                        let section = document.querySelector(sectionScroll);
                        //Scroll to the section applying the smooth effect
                        section.scrollIntoView({ behavior: "smooth" });
                    });
                }
            });
            /* End Scroll Smooth effect just for Anchors Links (<a> tags) */
    });
    
    //Scroll Smooth effect for <button data-href=''> and <a href=''>
    document.addEventListener("DOMContentLoaded", () => {
        //Selecciono todos los enlaces del mapa y los guardo en una constante
        let enlaces = document.querySelectorAll('.scrollSmooth');
        //Recorro el arreglo que contiene todos los enlaces
        enlaces.forEach(element => {
            //le asigno un evento a cada enlace
            element.addEventListener('click', function(e) {
                //Prevenimos la accion por defecto de los enlaces
                e.preventDefault();

                //Obtenemos la seccion a la que debemos ir con el enlace e.target.attributes.href.value
                let seccionScroll = "";

                //If the target is a <button>
                if(this.nodeName === "BUTTON"){
                    
                    seccionScroll = e.target.getAttribute("data-href");
                    /* To prevent a null target */
                    if(seccionScroll == null){
                        let btnTarget = e.target.parentElement;
                        while(seccionScroll == null){
                            seccionScroll = btnTarget.getAttribute("data-href");
                            btnTarget = btnTarget.parentElement;
                        }
                        
                    }
                }else{
                    //If the target is a <a>
                    seccionScroll = e.target.getAttribute("href");
                }

                //Guardamos la seccion en una constante
                let seccion = document.querySelector(seccionScroll);
                //Hacemos scroll hasta la seccion aplicando el efecto smooth
                seccion.scrollIntoView({ behavior: "smooth" });
            });

        });
    });

    /* Smoth Anchors */
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

