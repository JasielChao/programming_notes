<!-- General Notes PHP  -->

<!-- Conditinoal to Include HTML Blocks  -->
<?php if($var == true): ?>
    <div>This going to Show up</div>
<?php else: ?>
    <div>This NOT going to Show up</div>
<?php endif; ?>

<!-- Var_Dump PHP  Please -->   
<div style="display: none;">
    <pre>
    <?php var_dump($variableName); ?>
    </pre>
</div>

<!-- Substring PHP -->
<?php 
   /* The substr() function returns a part of a string.
      substr(string,start,length)                        */
      echo substr("Hello world",0 ,6);
?>

<!-- Convert String into an Array PHP -->
<?php 
    $string_array = str_split($string);
    //To Replace
    echo str_replace("world","Peter","Hello world!");
?>



<!-- Foreach -->
<?php 
    foreach ($arr as &$value) {
        $value = $value * 2;
    }
?>

