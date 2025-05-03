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
<div style="display: none; max-width: 98vw;max-height: 80vh;position: absolute;z-index: 9;left: 0; background: white; overflow: scroll; color: black;">
    <pre>
    <?php var_dump($variableName); ?>
    </pre>
</div>

<div style="padding: 4rem; display:none;">
	<?php /* Only for test */
		include_once( ASNET_CORE_CFDUMP ); new dBug($muh_vessel);
	?>
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

        /* String contains substring */
        if (str_contains('How are you', 'are')) { 
            echo 'true';
        }

        /* String contains a least one substring of multiple options */
        $text = "Hola mundo, esto es PHP";
        $words = ["Hola", "PHP", "JavaScript"];

        $found = array_filter($words, fn($word) => str_contains($text, $word));

        if (!empty($found)) {
            echo "Se encontró al menos una palabra.";
        } else {
            echo "Ninguna coincidencia.";
        }

    ?>

    <!-- Substring Functions -->
    <?php
        /* The substr() function returns a part of a string.
        substr(string,start,length)                        */
        echo substr("Hello world",0 ,6);
    ?>

    <?php
        /* Get url parameters php */
        if (isset($_GET['link'])) {
            $url = $_GET['link'];
        } else {
            // Fallback behaviour goes here
        }

        /* remove url parameters php */
        $url = "http://www.test.com/test.html?parameter=hey&parameter2=ho";
        $url = strtok($url, "?");

        echo $url;
    ?>

    
    <!-- Compare two strings (case-sensitive): -->
    <?php
        /* If this function returns 0, the two strings are equal. */
        echo strcmp("Hello world!","Hello world!");
    ?>

    <!-- Cut String without cutting a word -->
    <?php
        $string_array = str_split($excerpt);
        $excerpt = "";
        for ($i=0; $i < count($string_array); $i++) { 

            if($i > 170 && strcmp($string_array[$i], ' ') == 0){
                break;
            }

            $excerpt .= $string_array[$i];
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

<!-- string contains character php -->
<?php
    if (str_contains('abc', '')) {
        echo "Checking the existence of the empty string will always return true";
    }
?>

<!-- string remove parameters php -->
<?php
    $string = "https://www.youtube.com/embed/5FnuAzf1TqA&t=1s";
    $string = strtok($string, "?");
    $string = strtok($string, "&");
?>

<!-- Array Functions -->
<?php
    $multyArray = array(
        array(
            "name" =>"Length" ,
            "value" => "95′ ",
        ),
        array(
            "name" => "Beam",
            "value" => "22′ 0″ ",
        ),
        array(
            "name" => "Draft",
            "value" => "7′ 9″",
        ),
        array(
            "name" => "Engines",
            "value" => "Twin CAT C32 1925 H.P."
        ),
    );

    /* 
        Para verificar si existe un elemento en el array con la clave ["name"] que tenga el valor "Length", 
        puedes usar array_search() o recorrer el array con array_filter().
    */

    /* Opción 1: Usando array_search()
        Ventajas:
        Es eficiente porque usa array_column() para extraer solo la columna name y busca el valor directamente.
    */

    $index = array_search("Length", array_column($multyArray, 'name'));
    
    if ($index !== false) {
        echo "Encontrado en el índice $index. El valor es: " . $multyArray[$index]['value'];
    } else {
        echo "No encontrado.";
    }

    /* Opción 1: Usando array_filter()
        Ventajas:
        Si hay varias coincidencias, puedes obtener todas.
    */

    $result = array_filter($multyArray, function ($item) {
        return $item['name'] === "Length";
    });
    
    if (!empty($result)) {
        $firstMatch = reset($result); // Obtener el primer resultado
        echo "Encontrado. El valor es: " . $firstMatch['value'];
    } else {
        echo "No encontrado.";
    }
    
    


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

<!--  Get File Name -->
<?php $fileName = substr(basename(__FILE__), 0, strrpos(basename(__FILE__), ".")); ?>

<!-- Sort Array -->
<?php sort($locations_distance_array);  ?>

<!--- Sort Especift index of an array --->
<?php

    $array = [
        0 => 'a', 
        1 => 'c', 
        2 => 'd', 
        3 => 'b', 
        4 => 'e',
    ];
    function moveElementArray(&$array, $a, $b) {
        $out = array_splice($array, $a, 1);
        array_splice($array, $b, 0, $out);
    }

    /* To clarify $a is $fromIndex and $b is $toIndex" */
    moveElementArray($array, 3, 1);


    // Result:
    [
        0 => 'a',
        1 => 'b',
        2 => 'c',
        3 => 'd',
        4 => 'e',
    ];
?>



<!--- Dates --->
<?php 
	# Check if date between two dates
	$date_today = date("Y/m/d");
	$date_today = date('Y-m-d', strtotime($date_today));

	$date_start = date('Y-m-d', strtotime("2024/04/18"));
	$date_end = date('Y-m-d', strtotime("2024/04/21"));

	if( ($date_start <= $date_today) && ($date_today <= $date_end) ){
        echo "is between";
    }else{
        echo "NO GO!";  
    }


?>
