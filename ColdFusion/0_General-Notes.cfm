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


<!--  Replace Subtring ColdFusion  -->       
<cfoutput> #replace(string,"subtring","newSubstring","all")# </cfoutput>

<!--  Get Current Path ColdFusion  -->        
<cfoutput> GetDirectoryFromPath(GetBaseTemplatePath())  </cfoutput>
