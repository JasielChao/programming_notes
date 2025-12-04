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
    // Get all images with the class
    const images = document.querySelectorAll(".slick-list .slick-slide img");

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
    const imagesLink = document.querySelectorAll("#box2 a");

    // Iterate through each image and download it
    imagesLink.forEach((imgLink, index) => {

         // 1. Get the full URL with parameters
        const fullUrl = imgLink.href;
        // 2. Create a URL object to easily parse it
        const urlObj = new URL(fullUrl);
        // 3. Get the path without the query string or parameters
        const cleanUrl = urlObj.origin + urlObj.pathname;


        // Create a temporary link
        const link = document.createElement("a");

        // Set the href of the link to the image URL
        link.href = cleanUrl

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

/* For Images Links (V2)*/
(async function() {
    const imagesLink = document.querySelectorAll(".gallery-block a");

    for (let [index, imgLink] of imagesLink.entries()) {
        try {
            const fullUrl = imgLink.href;
            const cleanUrl = new URL(fullUrl).origin + new URL(fullUrl).pathname;

            const response = await fetch(cleanUrl, { mode: "cors" }); // Needs CORS enabled
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const blob = await response.blob();

            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = `image_${index + 1}.jpg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Download failed for", imgLink.href, err);
        }
    }
})();

(async function () {
    // Get all images inside the carousel
    const images = document.querySelectorAll("a.image-slide-anchor");

    // Helper: derive a safe filename from a URL or fallback to index
    function filenameFromUrl(url, index) {
        try {
        const u = new URL(url);
        const pathname = u.pathname.split("/").filter(Boolean).pop() || `image_${index+1}`;
        // keep extension if exists
        return pathname.includes(".") ? pathname : `${pathname}.jpg`;
        } catch (e) {
        return `image_${index+1}.jpg`;
        }
    }

    for (const [index, img] of Array.from(images).entries()) {
        const src = img.href

        // optionally remove query string if you want a "clean" URL:
        let cleanUrl;
        try {
        const u = new URL(src);
        cleanUrl = u.origin + u.pathname;
        } catch (e) {
        cleanUrl = src;
        }

        const filename = filenameFromUrl(cleanUrl, index);

        try {
        // Try to fetch the image as a blob (requires CORS on the remote server)
        const response = await fetch(cleanUrl, { mode: "cors" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const blob = await response.blob();

        // Create object URL and force download
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);

        console.log(`Downloaded: ${filename}`);
        } catch (err) {
        // Fallback: open the image in a new tab (browser will handle it)
        console.warn(`Could not download ${cleanUrl} via fetch (CORS?), opening in new tab.`, err);
        const a = document.createElement("a");
        a.href = src;           // use original src in case cleaning removed needed params
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        }

        // small delay to avoid overwhelming the browser/network
        await new Promise(r => setTimeout(r, 200));
    }

    console.log(`${images.length} images processed.`);
})();
        



/* For Images (V2) */
(async function () {
  // Get all images inside the carousel
  const images = document.querySelectorAll(".carousel img");

  // Helper: derive a safe filename from a URL or fallback to index
  function filenameFromUrl(url, index) {
    try {
      const u = new URL(url);
      const pathname = u.pathname.split("/").filter(Boolean).pop() || `image_${index+1}`;
      // keep extension if exists
      return pathname.includes(".") ? pathname : `${pathname}.jpg`;
    } catch (e) {
      return `image_${index+1}.jpg`;
    }
  }

  for (const [index, img] of Array.from(images).entries()) {
    const src = img.src;

    // optionally remove query string if you want a "clean" URL:
    let cleanUrl;
    try {
      const u = new URL(src);
      cleanUrl = u.origin + u.pathname;
    } catch (e) {
      cleanUrl = src;
    }

    const filename = filenameFromUrl(cleanUrl, index);

    try {
      // Try to fetch the image as a blob (requires CORS on the remote server)
      const response = await fetch(cleanUrl, { mode: "cors" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();

      // Create object URL and force download
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);

      console.log(`Downloaded: ${filename}`);
    } catch (err) {
      // Fallback: open the image in a new tab (browser will handle it)
      console.warn(`Could not download ${cleanUrl} via fetch (CORS?), opening in new tab.`, err);
      const a = document.createElement("a");
      a.href = src;           // use original src in case cleaning removed needed params
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    // small delay to avoid overwhelming the browser/network (optional)
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`${images.length} images processed.`);
})();
