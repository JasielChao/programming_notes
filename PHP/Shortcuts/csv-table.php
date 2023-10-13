<!----------------- -------------------  ---------------------->
<!----------------- Convert CSV table into a HTMl table  ---------------------->
<!----------------- -------------------  ---------------------->

<!DOCTYPE html>
<html>
  <head>
    <title>CSV To HTML Table</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="2-csv-table.css">
  </head>
  <body>
    <table id="demo"><?php
      // (A) OPEN CSV FILE
      $stream = fopen("1-dummy.csv", "r");

      // (B) EXTRACT ROWS & COLS
      while (($row = fgetcsv($stream)) !== false) {
        echo "<tr>";
        foreach ($row as $col) { echo "<td>$col</td>"; }
        echo "</tr>";
      }
    
      // (C) CLOSE CSV FILE
      fclose($stream);
    ?></table>
  </body>
</html>