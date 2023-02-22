<?php
/*function get_dbc()
{
    var_dump("made it");
    $mysqli = new mysqli("localhost", "root", "", "database");
    if (!$mysqli) die("Unable to connect to MySQL: " . mysqli_error($mysqli));
    return $mysqli;
}*/

if(isset($_POST["send_mail"])){
    
$first=$_POST['first'];
$last=$_POST['last'];
$email=$_POST['email'];
    $phone=$_POST['phone'];
    $company=$_POST['company'];
   $revenue=$_POST['revenue'];
    $wesite_url=$_POST['wesite_url'];
    $address=$_POST['address'];
    $city=$_POST['city'];
    $state=$_POST['state'];
    $zip_code=$_POST['zip_code'];
// validate the data matches an email
/*$mysqli = get_dbc();
if(filter_var($email,FILTER_VALIDATE_EMAIL)){
    var_dump("im here 1");
    
    /*$insert = $mysqli->prepare("INSERT INTO `rsv`(`user_id`, `first`, `last`, `business_email`, `phone`, `company`, `revenue`, `wesite_url`, `address`, `city`, `state`, `zip_code`) values (NULL,?,?,?,?,?,?,?,?,?,?,?)");
    
      $insert = $mysqli->prepare("INSERT INTO `rsv`( `first`, `last`) values (?,?)");
    
    var_dump("im here 02 ");

   // $insert->bind_param($first,$last,$email,$phone,$company,$revenue,$wesite_url,$address,$city,$state,$zip_code);
    
     $insert->bind_param($first,$last);
    
    
         var_dump("im here 03");           
    $insert->execute();
    
    /// double check it actually executed and didnt error out
    if($insert->affected_rows == 1){
    
   echo"succes";
    }else{
        var_dump("ohh 3");
        echo "error not a valid email";
    }
}
    
}*/
   if(filter_var($email,FILTER_VALIDATE_EMAIL)){ 
    $con = mysqli_connect("localhost","root","","database");
mysqli_select_db($con, 'database');
mysqli_set_charset($con, "utf8mb4");

$query = "INSERT INTO rsv ( first, last , business_email, phone, company, revenue, wesite_url, address, city, state, zip_code  ) values ('$first','$last', '$email', '$phone','$company', '$revenue','$wesite_url','$address', '$city', '$state','$zip_code')";
         

$result = mysqli_query($con, $query);
  exit(header("Location: /thankyou/thankyou.php")); 
     

}}
?>
    
   