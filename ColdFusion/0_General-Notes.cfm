<!-- ColdFusion -->
<!-- Link to test code fragment in live 
    https://trycf.com/
-->

<!--   Variables ColdFusion  -->  
<cfset variablename="value">  
<cfoutput>
    #variablename#
</cfoutput>


<!--- Extract each value using ListGetAt() --->
<cfset rangeParam = "0,50">
<cfset minValue = ListGetAt(rangeParam, 1)>
<cfset maxValue = ListGetAt(rangeParam, 2)>

<!--- Optional: Convert to numeric values --->
<cfset minValue = val(minValue)>
<cfset maxValue = val(maxValue)>

<!--- Output for testing --->
<cfoutput>
    Min: #minValue# <br>
    Max: #maxValue#
</cfoutput>


<!-- check if a variable exists coldfusion -->
<cfif IsDefined("customTitle")>
    <title>#customTitle#</title>
<cfelse>
    <title>#request.defaultSitePageTitle#</title>
</cfif>

<!--  Var Dump ColdFusion  Please remove it when you finish the test -->   
<div style="display: none; max-width: 98vw;max-height: 80vh;position: absolute;z-index: 9;left: 0; color: black;">
    <pre>
        <cfoutput>
            <cfdump var="#request.myNews#">
        </cfoutput>
    </pre>
</div> 

<!--- Counts List element --->
<cfoutput>
    <p>Count: #articlePhotos.recordcount# </p>
</cfoutput>


<!--- Conditionals | ColdFusion	
        Operator                            Symbol
        GT, GREATER THAN	                >
        LT, LESS THAN	                    <
        GTE, GREATER THAN OR EQUAL	        >=
        LTE, LESS THAN OR EQUAL	            <=  
        EQ, IS EQUAL                        ==
        NEQ, IS NOT EQUAL                   !=
--->

<cfif len(trim(#jobMoreDescription#)) >
    <cfoutput>#jobMoreDescription#</cfoutput>
</cfif>

<cfif structKeyExists(url, "priceMin") AND trim(url.priceMin) neq "">
    <cfset priceMin = url.priceMin />
<cfelse>
    <cfset priceMin = "0" />
</cfif>

<cfif #nameVariable# EQ 'chaparral'>
        <!-- Case 1  -->
<cfelseif  #nameVariable#EQ 'four-winns'>
        <!-- Case 2  -->
<cfelse>
        <!-- Case 3  -->
</cfif>



<!--- Checking if the URL parameter exist --->
<cfif structKeyExists(url,'filter')>
    <!--- Setting the existing URL parameter to a variable--->
    <cfset variableFilter=url.filter>  
<cfelse>
    <!--- The  URL parameter dont exist--->
    <cfset variableFilter="showAll">
</cfif>

<cfif Find(LCase(variableFilter), LCase(ARTICLE_TAG)) OR variableFilter EQ "showAll">
    <!--- The Card --->
</cfif>

<cfset myString = "Hello World">
<cfset subString = "world">

<cfif Find(LCase(variableFilter), LCase(ARTICLE_TAG))>
    <cfoutput>The string "#myString#" contains the substring "#subString#" (case-insensitive).</cfoutput>
<cfelseif  Find(LCase(subString), LCase(myString))>
        <!-- Case 2  -->
<cfelse>
    <cfoutput>The string "#myString#" does not contain the substring "#subString#" (case-insensitive).</cfoutput>
</cfif>


 <!--- Include --->
 <cfinclude template="partials/partial.file.cfm" />


<!--  Replace Subtring ColdFusion  -->       
<cfoutput> #replace(string,"subtring","newSubstring","all")# </cfoutput>

<!--  String Lower Case  -->   
<cfoutput> #LCase(string)# </cfoutput>

<!--  concatenate string coldfusion  -->   
<cfoutput> "string" & "string2" </cfoutput>

<cfset varName = "Initial String">
<cfset varName &= " Another String">
<cfoutput>#varName#</cfoutput>


<!--  Get Current Path ColdFusion  -->        
<cfoutput> #GetDirectoryFromPath(GetBaseTemplatePath())#  </cfoutput>
<!--  Get Current File Name ColdFusion  -->    
<cfoutput> #GetFileFromPath(GetBaseTemplatePath())#  </cfoutput>


<!-- Array in ColdFusion-->
<cfscript>
    // Declare an array
    myArray=["Google","Microsoft","Adobe","Facebook","Amazon"];
    myConvertedList=myArray.toList();
    WriteOutput(myConvertedList);
</cfscript>

<!-- JSON-->

<cfoutput>
    <cfset JsonData='[{"reason": "email address is unknown", "email": "abc@hotmail.comh"},
    {"reason": "email address is unknown", "email": "bbc@68gmail.com"},
    {"reason": "email address is unknown", "email": "ff@ff.com"},
    {"reason": "Known bad domain", "email": "rr@hotmai.com"},
    {"reason": "email address is unknown", "email": "ll@pp.rr.com"}]'>
    
    <cfset JsonData=REReplace(JsonData,"^\s*[[:word:]]*\s*\(\s*","")>
    <cfset JsonData=REReplace(JsonData, "\s*\)\s*$", "")>
    
    <cfset cfData=DeserializeJSON(JsonData)>
    <cfloop from="1" to="#arraylen(cfData)#" index="i">
        #cfData[i].email# -    #cfData[i].reason#<br />
    </cfloop>
</cfoutput>

<!-- JSON with cfscript-->
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

    <!-- Example Multiples Conditions-->
    <cfinvoke
        component        ="manager.modules.gallery.galleries"
        method           ="listRecords"
        sqlWhere         ="(isArchived = 0 or isArchived = NULL) and (articlePlacement = 2 or articlePlacement = 3)"
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

<!--- Check if a File Exists --->
<cfif FileExists("#urlFile")>
    <!--- If Exists --->   
</cfif>


<!--- Does a URL exist? Checks for 404 status code. --->
<cffunction name="URLExists" output="no" returntype="boolean">
    <!--- Accepts a URL --->
    <cfargument name="u" type="string" required="yes">
    <!--- Initialize result --->
    <cfset var result=true>
    <!--- Attempt to retrieve the URL --->
    <cfhttp url="#ARGUMENTS.u#" resolveurl="no" throwonerror="no" />
    <!--- Check That a Status Code is Returned --->
    <cfif isDefined('cfhttp.responseheader.status_code')>
        <cfif cfhttp.responseheader.status_code EQ "404">
        <!--- If 404, return FALSE --->
        <cfset result=false>
        </cfif>
    <cfelse>
        <!--- No Status Code Returned --->
        <cfset result=false>
    </cfif>
    <cfreturn result>
</cffunction>

Does it exist? #urlExists(urlSpecSheet)#<br />


<!--- ---------------------------- --->
<!---------- Date Functions ---------->
<!--- ---------------------------- --->

<!---------- Get Current Date ---------->
<cfoutput> #DateFormat(now(), 'MMMM DD, yyyy')# </cfoutput>

<!---------- Compare Date 

DateCompare(date1, date2 [, datePart])

Returns
    -1, if date1 is earlier than date2
    0, if date1 is equal to date2
    1, if date1 is later than date2

---------->
    <cfset currentDate= #DateFormat(now(), 'MMMM DD, yyyy')#>  
    <cfset compareDate= #DateFormat(articleDate, 'MMMM DD, yyyy')#>  

    <cfif #DateCompare(currentDate, compareDate)# EQ '-1'>
            <p>upcoming Dates</p>
    <cfelse>
            <p>Previous Dates</p>
    </cfif>


<!--- Let's update the year dynamically --->
<cfset currentYear = Year(Now())>
<cfset today = Now()>
<cfset targetMonth = 10> <!-- October -->
<cfset targetDay = 25>

<cfif Month(today) GT targetMonth OR (Month(today) EQ targetMonth AND Day(today) GT targetDay)>
  <!--- The current date is after October 25th. --->
  <cfset printYear = currentYear>
<cfelse>
  <!--- The current date is before or on October 25th. --->
  <cfset printYear = currentYear - 1>
</cfif>

<p>
	Last updated: October 25, <cfoutput>#printYear#</cfoutput>.
</p>



<!--- Get Days Difference --->
<cffunction name="daysDifference" access="public" returntype="numeric">
    <cfargument name="inputDate" type="string" required="true">
    
    <!-- Parse the input string into a valid date object -->
    <cfset local.parsedDate = ParseDateTime(arguments.inputDate)>
    
    <!-- Get the current date and time -->
    <cfset local.nowDate = Now()>

    <!-- Calculate the difference in days -->
    <cfreturn DateDiff("d", local.parsedDate, local.nowDate)>
</cffunction>

<!--- Example usage: --->
<cfset myDate = "2023-12-08 09:27:31">
<cfset days = daysDifference(myDate)>
<cfoutput>#days# days difference from #myDate#.</cfoutput>





<!--- ---------------------------- --->
<!---------- Query ---------->
<!--- ---------------------------- --->
<cfoutput query="jobPosts" startRow="1" maxRows="1">

</cfoutput>