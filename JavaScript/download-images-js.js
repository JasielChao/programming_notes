/* Donwolad Images JS - V 1.0.0

    Useful short code to download all the desired images from a page.

    To use it:

    1 - Update the target image class in the line const images = document.querySelectorAll("img.swiper-slide-image"); to the one that applies to your case.
    2 - Copy and paste the function into your browser's console. If Chrome gives you issues, try it in Firefox.
    3 - Press Enter, and that should be all.

    -- Jasiel Chao

*/
/* For Images */
(function() {
    // Get all images with the class "swiper-slide-image"
    const images = document.querySelectorAll(".tabs-block img");

    // Iterate through each image and download it
    images.forEach((img, index) => {
        // Create a temporary link
        const link = document.createElement("a");

        // Set the href of the link to the image URL
        link.href = img.src;
        link.target = "blank";

        // Assign a name to the file (you can customize this)
        link.download = `image_${index + 1}.jpg`;

        // Append the link to the document and simulate a click to start the download
        document.body.appendChild(link);
        link.click();

        // Remove the link after the download
        document.body.removeChild(link);
    });

    console.log(`${images.length} images downloaded.`);
})();

<img alt="SLX 350 running port stern" class="scc-gallery-carousel-thumbnail" src="/content/dam/searay/2024/model-images/slx/slx-350/2024-SLX-350-SLX350-running-port-stern-03116.jpg.transform/searay-2880x2880boundedresize/image.jpg"></img>

/* For Images Links */
(function() {
    // Get all images with the class "swiper-slide-image"
    const imagesLink = document.querySelectorAll(".content-gallery-model .swiper-slide a");

    // Iterate through each image and download it
    imagesLink.forEach((imgLink, index) => {
        // Create a temporary link
        const link = document.createElement("a");

        // Set the href of the link to the image URL
        link.href = imgLink.href;

        // Assign a name to the file (you can customize this)
        link.download = `image_${index + 1}.jpg`;

        // Append the link to the document and simulate a click to start the download
        document.body.appendChild(link);
        link.click();

        // Remove the link after the download
        document.body.removeChild(link);
    });

    console.log(`${imagesLink.length} images downloaded.`);
})();
