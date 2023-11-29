<!-- General Notes PHP  -->

<!--  Check whether a variable is empty. Also check whether the variable is set/declared: -->
<?php
$a = 0;
// True because $a is set
if (isset($a)) {
  echo "Variable 'a' is set.<br>";
}

$b = null;
// False because $b is NULL
if (isset($b)) {
  echo "Variable 'b' is set.";
}
?> 

<!-- Conditinoal to Include HTML Blocks  -->
<?php if($var == true): ?>
    <div>This going to Show up</div>
<?php else: ?>
    <div>This NOT going to Show up</div>
<?php endif; ?>

<!-- Var_Dump PHP  Please remove it when you finish the test -->   
<div style="display: none; max-width: 98vw;max-height: 80vh;position: absolute;z-index: 9;left: 0; background: white; overflow: scroll;">
    <pre>
    <?php var_dump($variableName); ?>
    </pre>
</div>

<!-- String and Substring PHP -->
<div>
    <!-- String  Functions-->
    <?php
    
        #Return the length of the string "Hello":
        echo strlen("Hello");
        
        # To Convert String into an Array
        $string_array = str_split($string);

        //To Replace 
        echo str_replace("Old","New","This is Old!");
        
        /* To convert to LowerCase a string */
        echo strtolower($string_variable);
    ?>

    <!-- Substring Functions -->
    <?php
        /* The substr() function returns a part of a string.
        substr(string,start,length)                        */
        echo substr("Hello world",0 ,6);
    ?>

    
    <!-- Compare two strings (case-sensitive): -->
    <?php
        /* If this function returns 0, the two strings are equal. */
        echo strcmp("Hello world!","Hello world!");
    ?>

    <!-- Cut String without cutting a word -->
    <?php
         $string_array = str_split($guest_review);
         $guest_review = "";
         for ($i=0; $i < count($string_array); $i++) { 

             if($i > 170 && strcmp($string_array[$i], ' ') == 0){
                 break;
             }

             $guest_review .= $string_array[$i];
         }
    ?>

    <!-- Split string by whitespace -->
    <?php
        // Example 1
        $pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
        $pieces = explode(" ", $pizza);
        echo $pieces[0]; // piece1
        echo $pieces[1]; // piece2
    ?>

</div>

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

<!-- Escaping of the Quotation Marks -->
<?php 
    /*  Example if the get a text from any source that contain quotation marks, that will 
        broke the code. Text example: 2014 CANTIERE DELLE MARCHE 89' 1" 
        for this situation use the function addslashes();
    */
    # 
    echo addslashes($text_quotation_marks);
?>
<script>
    /* Example use with PHP and JS */
    let muh_vessel_title = "<?php echo addslashes($text_quotation_marks); ?>";
</script>   


<!-- Mathematical operations-->
<?php 
    /* Get if a number is even or odd */
    $number = 20;
    if ($number % 2 == 0) {
            print "It's even";
    }

    /* Divide to numbers and get an integer*/ 
    $dividend = 10;
    $divisor = 3;
    $quotient = intval($dividend / $divisor);

    // To round up
    function divide_and_round_up($dividend, $divisor){
        $result = intval($dividend / $divisor);

        if($dividend  % 2 == 0 &&  $divisor % 2 != 0){
            $result++;
        } elseif ($dividend  % 2 != 0 &&  $divisor % 2 == 0){
            $result++;
        }

        return $result;
    }


?>

<!-- Convert string into a executable command  -->
<?php 
    /* https://www.php.net/manual/en/function.eval.php */
    /* Use the function eval()  */
    $test =  "echo 'test';";
    eval($test);

?>


