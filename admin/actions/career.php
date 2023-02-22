


<?php




   $FName=$_POST['FName'];
    $LName=$_POST['LName'];
    $Phone=$_POST['Phone'];
    $Email=$_POST['Email'];
    $Position=$_POST['Position'];
    $Message=$_POST['message'];
    $File = $_FILES['file']['name'];

// validate the data matches an email


   if(filter_var($Email,FILTER_VALIDATE_EMAIL)){ 
    $con = mysqli_connect("localhost","root","","database");
mysqli_select_db($con, 'database');
mysqli_set_charset($con, "utf8mb4");

$query = "INSERT INTO career ( firstname,lastname,phone,email,position,message,file) values ('$FName', '$LName','$Phone','$Email','$Position','$Message','$File')";
         

$result = mysqli_query($con, $query);
  exit(header("Location: /thankyou/application.php")); 
     

}
?>