
<?php
/*include_once 'db.php';
$email=$_POST['email'];
$insert="insert into em(business_email)values('$email')";
$query=mysqli_query($con,$insert);
header("Location: /career/company/jobs.php?success=true");*/



function get_dbc()
{
    $mysqli = new mysqli("localhost", "root", "", "database");
    if (!$mysqli) die("Unable to connect to MySQL: " . mysqli_error($mysqli));
    return $mysqli;
}


$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
// validate the data matches an email
$mysqli = get_dbc();
if(filter_var($email,FILTER_VALIDATE_EMAIL)){
    $insert = $mysqli->prepare("insert into contactus (name,email,message) values (?,?,?)");
    $insert->bind_param('sss',$name,$email,$message);
    $insert->execute();
    /// double check it actually executed and didnt error out
    if($insert->affected_rows == 1){
    
   echo"succes";
    }else{
        echo "error not a valid email";
    }
}