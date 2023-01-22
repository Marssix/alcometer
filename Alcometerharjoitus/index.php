<!DOCTYPE html>
<head>
</head>
<?php
$Weight = $_POST['Weight'];
$Bottles = $_POST['Bottles'];
$Time = $_POST['Time'];
$operator = $_POST['submit'];
$Gender = $_POST["Gender"];
$CalculatorResult = '';
if (is_numeric($Weight) && is_numeric($Bottles) && is_numeric($Time)) {
switch ($operator) {
case "Submit":
    $Weight = $_POST['Weight'];
    $Bottles = $_POST['Bottles'];
    $Time = $_POST['Time'];
    $Litres = $Bottles * 0.33;
    $Grams = $Litres * 8 * 4.5;
    $Burning = $Weight / 10;
    $Grams = $Grams - ($Burning * $Time);
    if($Gender == "M"){
        $CalculatorResult = $Grams / ($Weight * 0.7);
        if($CalculatorResult <= 0){
            $CalculatorResult = 0;
        }
    } elseif($Gender == "F"){
        $CalculatorResult = $Grams / ($Weight * 0.6);
        if($CalculatorResult <= 0){
            $CalculatorResult = 0;
        }
    }
}
}
?>

<body>
<div id="page-wrap">
<h1>Calculating alcohol blood level</h1>
<form action="" method="post" id="quiz-form">
<p>
<input type="number" name="Weight" id="Weight" required="required" value="<?php echo $Weight; ?>" /> <b>Weight</b>
</p>
<p>
Bottles: 
<select name="Bottles">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
</select>
</p>
<p>
Time: 
<select name="Time">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
</p>
<p>
Gender
<br>
<select name="Gender">
  <option value="">Select...</option>
  <option value="M">Male</option>
  <option value="F">Female</option>
</select>
</p>
<input type="submit" name="submit" value="Submit" />
<p>
<b>Your blood alcohol level: </b> <input readonly="readonly" name="CalculatorResult" value="<?php echo(round($CalculatorResult, 2)); ?>">
</p>
</form>
</div>
</body>
</html>