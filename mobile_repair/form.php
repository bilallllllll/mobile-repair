<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="mobilerepair2.css">
</head>
<body>
    
<?php
$time = "";

$d=strtotime("8:00");
$openingtime= date("Hi", $d);
$w=strtotime("18:00");
$closingtime= date("Hi", $w);




$name=$email=$date=$time2="";
$errorname=$erroremail=$errordate=$errortime="";
$go_ahead = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$a = strtotime($_POST["time"]);
$time = date("Hi",strtotime($_POST["time"]));

    if (empty($_POST["name"])) {
        $errorname = "*Please enter name";
        $go_ahead = false;
    }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$_POST["name"])){
        $errorname = "*Only Letters are allowed";
        $go_ahead = false;
    }else{
        $name = $_POST["name"];
        $go_ahead = true;
    }
    
    if (empty($_POST["email"])) {
        $erroremail = "*Please enter email";
        $go_ahead = false;
    }
    elseif(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
        $erroremail = "*Invalid email format.";
        $go_ahead = false;
    }else{
        $email = $_POST['email'];
        $go_ahead = true;
    }
    if (empty($_POST["date"])) {
        $errordate = "*Date is required.";
        $go_ahead = false;
    }elseif ($_POST["date"] < date("m/d/Y") ) {
        echo $_POST["date"];
        $errordate = "*Date is invalid.";
        $go_ahead = false;
    }else {
        $date = $_POST["date"];
        $go_ahead = true;
    }
    if (empty($_POST["time"])) {
        $errortime = "*Time is Required";
        $go_ahead = false;
    }elseif ($time <= $openingtime || $time > $closingtime){
        $errortime = "*Timing is between (08:00-06:00).";
        $go_ahead = false;

     }else {
        $time = $_POST["time"];
        $go_ahead = true;
    if ($errorname != "" || $errordate != "" || $erroremail != "") {
        $go_ahead = false;
    }
    }

}
?>






<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <fieldset>
        <legend><span class="number">1</span>Your basic details</legend>
        <label for="name">Name*:</label>
        <input type="text" id="name" name="name" placeholder="John (only first names)" value="<?php echo (isset($_POST["name"])? $_POST["name"] : ""); ?>">
        <div class="user"><?php echo $errorname; ?></div>
        <label for="mail">Email*:</label>
        <input type="email" id="email" name="email" placeholder="abc@xyz.com" value="<?php echo (isset($_POST["email"])? $_POST["email"] : ""); ?>">
        <div class="user"><?php echo $erroremail; ?></div>
        
        
    </fieldset>
    
    <fieldset>
            <legend><span class="number">2</span>Appointment Details</legend>
            <label for="date">Date*:</label>
            <input type="date" name="date" id="date" value="<?php echo (isset($_POST["date"])? $_POST["date"] : ""); ?>" >
            <div class="user"><?php echo $errordate; ?></div>
            <br>
            <label for="time">Time*:</label>
            <input type="time" name="time" id="time" value="<?php echo (isset($_POST["time"])? $_POST["time"] : ""); ?>">
            <div class="user"><?php echo $errortime; ?></div>
            <br>
            
            <label for="appointment_description">Appointment Description:</label>
            <textarea id="appointment_description" name="appointment_description" placeholder="I would like to get an Appointment for...(optional)"></textarea>
            <label for="duration">Would you like to meet us in Person?</label>
            <input type="radio" name="duration" value=""> Yes
            <input type="radio" name="duration" checked> No
            
        </fieldset>
        <button type="submit" id="submit" >Request For Appointment</button>
    </form>
</div>
</div>
</div>


<?php
if ($go_ahead == true) {
    $_SESSION["name"] = $name;
    $_SESSION["email"] = $email;
    $_SESSION["date"] = $date;
    $_SESSION["time"] = $time;
    // echo '<script> setTimeout(() => {alert("hi");},1500);</script>';
header("location:http://localhost/bilal/mobile_repair/mobilerepair2.php");   
}
?>


<script>
    var bilal = document.getElementsByClassName("user");
    for (let index = 0; index < bilal.length; index++) {
        const element = bilal[index]; 
       var use = element.innerHTML;  


        if (use != "") {
            document.getElementById("name").style.margin=0;
            document.getElementById("email").style.margin=0;
            document.getElementById("date").style.margin=0;
            document.getElementById("time").style.margin=0;
            }
    }
   
    </script>
</body>
</html>