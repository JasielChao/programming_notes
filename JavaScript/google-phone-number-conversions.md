## AUTHOR: 
Jasiel Chao

## NOTES: 


## LINKS: 
https://support.google.com/google-ads/answer/6331304?hl=en#zippy=%2Cset-up-conversion-tracking-using-the-google-tag


```
<script defer>
    document.addEventListener('DOMContentLoaded', ()=>{
        
        /* Getting all the <a> tags on the page */
        let phoneLinkArray = document.querySelectorAll('a')

        phoneLinkArray.forEach(phoneLink => {
            /* Selecting just the <a> tags for phone calls */
            if (phoneLink.href.startsWith('tel:')) {
                /* Setting onclick attribute */
                phoneLink.setAttribute("onclick", "return gtag_report_conversion('" + phoneLink.href + "');");
            }
        })
    })
</script>
```