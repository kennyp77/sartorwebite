<?php

session_start();
$ownpath = str_replace($_SERVER['DOCUMENT_ROOT'], "",str_replace("\\", "/",dirname(__FILE__)).'/');
define('APP_ROOT', $_SESSION["APP_ROOT"] );
echo var_dump($_POST);

$loggedin=isset($_SESSION['login']);
    if($loggedin){//redirected from signup or visted directly or etc 

        $target_dir =  dirname(__DIR__,2).'\img\gallery\\';
        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        echo $target_file;
        
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
          $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
          if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
          } else {
            echo "File is not an image.";
            $uploadOk = 0;
          }
        }

        // Check if file already exists
        if (file_exists($target_file)) {
          echo "Sorry, file already exists.";
          $uploadOk = 0;
        }

        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 5000000) {
          echo "Sorry, your file is too large.";
          $uploadOk = 0;
        }

        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif" ) {
          echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
          $uploadOk = 0;
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
          echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
          if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
          } else {
            echo "Sorry, there was an error uploading your file.";
          }
        }
 }else{
        echo " not allowed ";
        header("location:".APP_ROOT );

 }

    header("location:".APP_ROOT );

?> 