document.addEventListener("DOMContentLoaded", () => {
   /* Event to detect when the user scrolled to the very bottom of the page */
    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 100) {
            document.body.classList.add("at-bottom");
        } else {
            document.body.classList.remove("at-bottom");
        }
    }

    window.addEventListener("scroll", handleScroll);
});
