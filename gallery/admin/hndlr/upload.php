<?php


session_start();
$ownpath = str_replace($_SERVER['DOCUMENT_ROOT'], "", str_replace("\\", "/", dirname(__FILE__)) . '/');
define('APP_ROOT', $_SESSION["APP_ROOT"]);
echo var_dump($_POST);



require   $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;

?>

<?php

$loggedin = isset($_SESSION['login']);
if ($loggedin) {

  $s3mode = true;
  $bucketName = 'sartorgallery';
  $IAM_KEY = 'AKIAZZQ7KLIBRRAKCTAY';
  $IAM_SECRET = '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';


  $target_dir =  dirname(__DIR__, 2) . '\img\gallery\\';
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

  echo $target_file;


  if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if ($check !== false) {
      echo "File is an image - " . $check["mime"] . ".";
      $uploadOk = 1;
    } else {
      echo "File is not an image.";
      $uploadOk = 0;
    }
  }

  ///check if exist in s3 
  if ($s3mode) {
    // 2. Check to see if the object was deleted.
    try {
      try { 
        $s3 =
          new S3Client([
            'version' => 'latest',
            'scheme' => 'http',
            'region'  => 'us-east-2',
            'credentials' => [
              'key' => $IAM_KEY,
              'secret' => $IAM_SECRET
            ],
          ]);
      } catch (Exception $e) {
        die(" CX Error: " . $e->getMessage());
      }
      
      $keyName = 'gallery/' . basename($_FILES["fileToUpload"]['name']);
      $pathInS3 = 'https://s3.us-east-2.amazonaws.com/' . $bucketName . '/' . $keyName;
      
      $result = $s3->getObject([
        'Bucket' => $bucketName,
        'Key'    => $keyName
      ]);

      echo 'DK Error: ' . $keyName . ' exists.';
    } catch (S3Exception $e) {
      echo "OK Info ".$e->getAwsErrorMessage(); 
    }
  } else {
    if (file_exists($target_file)) {
      echo "Sorry, file already exists.";
      $uploadOk = 0;
    }
  }

  if ($_FILES["fileToUpload"]["size"] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
  }


  if (
    $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif"
  ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
  }


  if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
  } else {

    echo "uplaoding on s3 " . $s3mode;

    if ($s3mode) {
      echo "uplaoding on s3 ";


      try {


        $s3 =
          new S3Client([
            'version' => 'latest',
            'scheme' => 'http',
            'region'  => 'us-east-2',
            'credentials' => [
              'key' => $IAM_KEY,
              'secret' => $IAM_SECRET
            ],
          ]);
      } catch (Exception $e) {


        die(" CX Error: " . $e->getMessage());
      }





      $keyName = 'gallery/' . basename($_FILES["fileToUpload"]['name']);
      $pathInS3 = 'https://s3.us-east-2.amazonaws.com/' . $bucketName . '/' . $keyName;


      //check existence 




      ///upload 
      try {

        $file = $_FILES["fileToUpload"]['tmp_name'];

        $s3->putObject(
          array(
            'Bucket' => $bucketName,
            'Key' =>  $keyName,
            'SourceFile' => $file,
            'StorageClass' => 'REDUCED_REDUNDANCY'
          )
        );
      } catch (S3Exception $e) {
        die(' BC Error:' . $e->getMessage());
      } catch (Exception $e) {
        die(' XY Error:' . $e->getMessage());
      }


      echo 'Upload Successful ';
    } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";
      } else {
        echo "Sorry, there was an error uploading your file.";
      }
    }
  }
} else {
  echo "user not logged in: not allowed ";
  // header("location:".APP_ROOT );

}

// header("location:".APP_ROOT );

?> 