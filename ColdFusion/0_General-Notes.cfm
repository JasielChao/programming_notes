<!-- ColdFusion -->

<!--   Variables ColdFusion  -->  
<cfset variablename="value">  
<cfoutput>
    #variablename#
</cfoutput>

<!--  Var Dump ColdFusion  -->
 <div style="display: none; max-width: 98vw;max-height: 80vh;position: absolute;z-index: 9;left: 0;">
    <pre>
        <cfoutput>
            <cfdump var="#request.myNews#">
        </cfoutput>
    </pre>
</div>  


<!--- Conditionals --->
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
