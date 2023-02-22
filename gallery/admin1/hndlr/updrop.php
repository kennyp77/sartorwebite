<?php

session_start();
$ownpath = str_replace($_SERVER['DOCUMENT_ROOT'], "",str_replace("\\", "/",dirname(__FILE__)).'/');
define('APP_ROOT', $_SESSION["APP_ROOT"] );
echo var_dump($_GET);

$loggedin=isset($_SESSION['login']);
    if($loggedin){//redirected from signup or visted directly or etc 

        $target_dir =  dirname(__DIR__,2).'\img\gallery\\';
        $target_file = $target_dir . basename($_GET["f"] );
     
        echo $target_file;
        
         

        // Check if file already exists
        if (!file_exists($target_file)) {
          echo "Sorry, file doesn't exist."; 
        }else{
            if (!unlink($target_file)) {  
                 echo ("$target_file cannot be deleted due to an error");  
            }  
            else {  
                echo ("$target_file has been deleted");  
            }  
        } 
 }else{
        echo " not allowed ";
        header("location:".APP_ROOT );

 }

    header("location:".APP_ROOT );

?> 