<!-- ColdFusion -->
<!-- Link to test code fragment in live 
    https://trycf.com/
-->

<!--   Variables ColdFusion  -->  
<cfset variablename="value">  
<cfoutput>
    #variablename#
</cfoutput>

<!-- check if a variable exists coldfusion -->
<cfif IsDefined("customTitle")>
    <title>#customTitle#</title>
<cfelse>
    <title>#request.defaultSitePageTitle#</title>
</cfif>

<!--  Var Dump ColdFusion  -->
 <div style="display: none; max-width: 98vw;max-height: 80vh;position: absolute;z-index: 9;left: 0;">
    <pre>
        <cfoutput>
            <cfdump var="#request.myNews#">
        </cfoutput>
    </pre>
</div>  


<!--- Conditionals | ColdFusion	
        Operator                            Symbol
        GT, GREATER THAN	                >
        LT, LESS THAN	                    <
        GTE, GREATER THAN OR EQUAL	        >=
        LTE, LESS THAN OR EQUAL	            <=  
--->
<cfif #nameVariable# EQ 'chaparral'>
        <!-- Case 1  -->
<cfelseif  #nameVariable#EQ 'four-winns'>
        <!-- Case 2  -->
<cfelse>
        <!-- Case 3  -->
</cfif>

 <!--- Include --->
 <cfinclude template="partials/partial.file.cfm" />


<!--  Replace Subtring ColdFusion  -->       
<cfoutput> #replace(string,"subtring","newSubstring","all")# </cfoutput>

<!--  Get Current Path ColdFusion  -->        
<cfoutput> GetDirectoryFromPath(GetBaseTemplatePath())  </cfoutput>


<!-- Array in ColdFusion-->
<cfscript>
    // Declare an array
    myArray=["Google","Microsoft","Adobe","Facebook","Amazon"];
    myConvertedList=myArray.toList();
    WriteOutput(myConvertedList);
</cfscript>

<!-- JSON-->
<cfscript>
    altImages= deserializeJSON('[
        { 
        "img": "Left Image Content Block",
        "alt": "Presents a responsive flex row with an image to the left of the content"
    },
    { 
        "img": "Left Image Content Block",
        "alt": "Presents a responsive flex row with an image to the left of the content"
    }
    ]');
</cfscript>


<!-- SQL Filter -->
<div>
<!-- For more documentation go to:
    https://www.3gpp2.org/cfdocs/htmldocs/Developing/WSc3ff6d0ea77859461172e0811cbec0e4fd-7ff0.html  -->

    <!-- Example -->
    <cfinvoke
    component        ="manager.modules.gallery.galleries"
    method           ="listRecords"
    sqlWhere         ="isArchived = 0 or isArchived = NULL and galleryDate <= '#dateLimiter#'"
    sortBy           ="galleryDate desc"
    returnVariable   ="allGalleries" 
    />

</div>


<!-- URL Parameter -->
<div>
    <!--- Checking if the URL parameter exist --->
    <cfif structKeyExists(url,'filter')>
        <!--- Setting the existing URL parameter to a variable--->
        <cfset variableFilter=url.filter>  
    <cfelse>
        <!--- The  URL parameter dont exist--->
    </cfif>
</div>
