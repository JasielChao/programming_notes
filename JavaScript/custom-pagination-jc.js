/**
 * Custom Pagination JC v1.0.1
 * Custom Pagination with Native JS -- Jasiel Chao
 **/

document.addEventListener("DOMContentLoaded", ()=>{

    const itemsPerPageDefault = 12; //Customizable
    const paginationDivClass = "custom-pagination-jc";

    const customPaginationJC = document.querySelectorAll("." + paginationDivClass);

    if(customPaginationJC){
        console.log("Loading Custom Pagination JC v1.0.0");

        for (let i = 0; i < customPaginationJC.length; i++) {
            let cPaginationJC = customPaginationJC[i];

            // Let's get the target container for each pagination
            let targetPaginationJC = document.getElementById(cPaginationJC.getAttribute('data-target'));
            // and the maximum items per page for each pagination
            let itemsPerPage = cPaginationJC.getAttribute('data-items-per-page');
            console.log("data-items-per-page: " + itemsPerPage );
            if(!itemsPerPage) { itemsPerPage = itemsPerPageDefault;}
            
            if(targetPaginationJC){

                // Let's get all the pagination items 
                let cPaginationItems = document.querySelectorAll("#" + cPaginationJC.getAttribute('data-target') + " .pagination-item");
                console.log("total items found: " + cPaginationItems.length );
                // Set the total items
                cPaginationJC.setAttribute("data-total", cPaginationItems.length);
                cPaginationJC.setAttribute("data-page", "1");
                

                if(cPaginationItems.length > itemsPerPage){
                    // Let's hide all the not desired pagination items 
                    for (let j = 0; j < cPaginationItems.length; j++) {

                        if(j >= itemsPerPage){
                            cPaginationItems[j].style.display = "none";
                        }
                    }

                    // Creating DOM elements for pagination
                    let pageCount = Math.ceil(cPaginationItems.length / itemsPerPage);
                    cPaginationJC.innerHTML = "";
                    createAndAppendPaginationButtons(cPaginationJC, pageCount, 1, itemsPerPage);
                }else {
                    // Pagination will not necessary
                    cPaginationJC.remove();
                    console.log("Removing unnecessary Pagination");
                }

            }

            
        }


    }

    //  Update Items Visibility
    function updateVisibility(paginationItems = "", newPage = 1, itemsPerPage) {

        console.log("itemsPerPage 2: " + itemsPerPage);

        //Defaults Items Range for the Firs page
        let itemsRageStarts = 0, itemsRageEnds = itemsPerPage;

        // If is not the first page
        if(newPage > 1){
            itemsRageStarts = itemsPerPage *  (newPage - 1);
            itemsRageEnds = itemsPerPage * newPage;
        }

        // Update Items Visibility
        for (let i = 0; i < paginationItems.length; i++) {
            if( i >= itemsRageStarts  &&  i < itemsRageEnds ){
                paginationItems[i].style.display = "block";
            }else{
                paginationItems[i].style.display = "none";
            }
            
        }
    }

    // Update the pagination
    function updatePagination(paginationElement, newPage, itemsPerPage) {

        console.log("itemsPerPage: " + itemsPerPage);

        // Update data page
        paginationElement.setAttribute("data-page", newPage);

        // Re-creating DOM elements for pagination
        let pageCount = Math.ceil(paginationElement.getAttribute('data-total') / itemsPerPage);
        paginationElement.innerHTML = "";
        createAndAppendPaginationButtons(paginationElement, pageCount, newPage, itemsPerPage);
    }

    // Create and append pagination buttons
    function createAndAppendPaginationButtons(pagination, pageCount, currentPage = 1, itemsPerPage) {
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(pageCount, currentPage + 2);

        const firstButton = createFirstButton(startPage, itemsPerPage);
        const previousButton = createPreviousButton(itemsPerPage);
        const nextButton = createNextButton(itemsPerPage);
        const lastButton = createLastButton(pageCount, itemsPerPage);

        firstButton.style.visibility = currentPage > 1 ? "visible" : "hidden"; // or "block" : "none"
        nextButton.style.visibility = currentPage < pageCount ? "visible" : "hidden"; // or "block" : "none"
        previousButton.style.visibility = currentPage > 1 ? "visible" : "hidden"; // or "block" : "none"
        lastButton.style.visibility = currentPage < pageCount ? "visible" : "hidden"; // or "block" : "none"
        
        pagination.appendChild(firstButton);
        pagination.appendChild(previousButton);

        for (let i = startPage; i <= endPage; i++) {
            const button = createPageButton(i, currentPage, itemsPerPage);
            pagination.appendChild(button);
        }

        pagination.appendChild(nextButton);
        pagination.appendChild(lastButton);
    }

     // Create the first button
    function createFirstButton(startPage, itemsPerPage) {
        const firstButton = document.createElement("button");
        firstButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>';
        firstButton.classList.add('page-numbers');
        firstButton.classList.add('btn-arrow');
        firstButton.classList.add('page-first');
        firstButton.addEventListener("click", (e) => {
            
            let paginationElement = e.target.parentElement;
                
            // Get the paginations items
            let paginationItems = document.querySelectorAll("#" + paginationElement.getAttribute('data-target') + " .pagination-item");

            // Update Pagination
            updatePagination(paginationElement, startPage, itemsPerPage);
            // Update Pagination Items
            updateVisibility(paginationItems, startPage, itemsPerPage);

        });
        return firstButton;
    }

    // Create the previous button
    function createPreviousButton(itemsPerPage) {
        const previousButton = document.createElement("button");
        previousButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>';
        previousButton.classList.add('page-numbers');
        previousButton.classList.add('btn-arrow');
        previousButton.classList.add('page-prev');
        previousButton.addEventListener("click", (e) => {
                
                // Get Current pagination element
                let paginationElement = e.target.parentElement;

                // Get newt page
                let newPage = paginationElement.getAttribute('data-page');
                newPage--;

                // Get the paginations items
                let paginationItems = document.querySelectorAll("#" + paginationElement.getAttribute('data-target') + " .pagination-item");

                // Update Pagination
                updatePagination(paginationElement, newPage, itemsPerPage);
                // Update Pagination Items
                updateVisibility(paginationItems, newPage, itemsPerPage);
        });
        return previousButton;
    }

    // Create the next button
    function createNextButton(itemsPerPage) {
        const nextButton = document.createElement("button");
        nextButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>';
        nextButton.classList.add('page-numbers');
        nextButton.classList.add('btn-arrow');
        nextButton.classList.add('page-next');
        nextButton.addEventListener("click", (e) => {

                // Get Current pagination element
                let paginationElement = e.target.parentElement;
                
                // Get newt page
                let newPage = paginationElement.getAttribute('data-page');
                newPage++;

                // Get the paginations items
                let paginationItems = document.querySelectorAll("#" + paginationElement.getAttribute('data-target') + " .pagination-item");

                // Update Pagination
                updatePagination(paginationElement, newPage, itemsPerPage);
                // Update Pagination Items
                updateVisibility(paginationItems, newPage, itemsPerPage);

        });
        return nextButton;
    }

    // Create the last button
    function createLastButton(endPage, itemsPerPage) {
        const lastButton = document.createElement("button");
        lastButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>';
        lastButton.classList.add('page-numbers');
        lastButton.classList.add('btn-arrow');
        lastButton.classList.add('page-last');
        lastButton.addEventListener("click", (e) => {
            
            // Get Current pagination element
            let paginationElement = e.target.parentElement;
                
            // Get the paginations items
            let paginationItems = document.querySelectorAll("#" + paginationElement.getAttribute('data-target') + " .pagination-item");

            // Update Pagination
            updatePagination(paginationElement, endPage, itemsPerPage);
            // Update Pagination Items
            updateVisibility(paginationItems, endPage, itemsPerPage);
        });
        return lastButton;
    }

    // Create a page button
    function createPageButton(i, currentPage, itemsPerPage) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.add('page-numbers');
        button.addEventListener("click", (e) => {
            currentPage = i;

             // Get Current pagination element
             let paginationElement = e.target.parentElement;
             
             // Get the paginations items
             let paginationItems = document.querySelectorAll("#" + paginationElement.getAttribute('data-target') + " .pagination-item");
 
             // Update Pagination
             updatePagination(paginationElement, currentPage, itemsPerPage);
             // Update Pagination Items
             updateVisibility(paginationItems, currentPage, itemsPerPage);
        });

        if (i === currentPage) {
            const span = document.createElement("span");
            span.innerText = i;
            span.classList.add('page-numbers');
            span.classList.add("active-page");
            return span;
        }
        return button;
    }
});



