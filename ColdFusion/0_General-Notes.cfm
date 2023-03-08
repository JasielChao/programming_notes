<!-- ColdFusion -->

<!--   Variables ColdFusion  -->  
<cfset variablename="value">  
<cfoutput>
    #variablename#
</cfoutput>

<!--  Var Dump ColdFusion  -->
<div style="display: none;">
    <pre>
        <cfoutput>
            <cfdump var="#request.myNews#">
        </cfoutput>
    </pre>
</div>  


<!--  Replace Subtring ColdFusion  -->       
<cfoutput> #replace(string,"subtring","newSubstring","all")# </cfoutput>

<!--  Get Current Path ColdFusion  -->        
<cfoutput> GetDirectoryFromPath(GetBaseTemplatePath())  </cfoutput>
