$(function() {

    le
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.menu-item-has-children');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

});


document.addEventListener("DOMContentLoaded", () => {
    let links = document.querySelectorAll('.menu-item-has-children');

    links.forEach(element => {
        element.addEventListener('click', () => {
            console.log('Click!!!!!!!!');
            let subMenu = document.querySelectorAll('.sub-menu');
            subMenu.forEach(el => {
                console.log('Entro!!! - 1');
                if (element.contains(el)) {
                    el.classList.toggle('open');
                } else {
                    if (el.classList.contains('open')) {
                        el.classList.remove('open');
                    }
                }
            });
            let iconMenu = document.querySelectorAll('.icon-chevron-down');
            iconMenu.forEach(ele => {
                console.log('Entro!!! - 2');
                if (element.contains(ele)) {
                    ele.classList.toggle('eael-simple-menu-indicator-open');
                } else {
                    if (ele.classList.contains('eael-simple-menu-indicator-open')) {
                        ele.classList.remove('eael-simple-menu-indicator-open');
                    }
                }
            });
        });
    });

});