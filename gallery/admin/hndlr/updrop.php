<?php

session_start();
$ownpath = str_replace($_SERVER['DOCUMENT_ROOT'], "", str_replace("\\", "/", dirname(__FILE__)) . '/');
define('APP_ROOT', $_SESSION["APP_ROOT"]);
echo var_dump($_GET);


require   $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;


$loggedin = isset($_SESSION['login']);
if ($loggedin) { //redirected from signup or visted directly or etc 

    $s3mode = true;
    $bucket = 'sartorgallery';
    $IAM_KEY = 'AKIAZZQ7KLIBRRAKCTAY';
    $IAM_SECRET = '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';
    if ($s3mode) {
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

        // 1. Delete the object from the bucket.
        try {

            $keyName = 'gallery/' . basename($_GET["f"]);
            echo 'Attempting to delete ' . $keyName . '   ' . PHP_EOL;

            $result = $s3->deleteObject([
                'Bucket' => $bucket,
                'Key'    => $keyName
            ]);

            if ($result['DeleteMarker']) {
                echo $keyName . ' was deleted or does not exist.' . PHP_EOL;
            } else {
                exit('Error: ' . $keyName . ' was not deleted.' . PHP_EOL);
            }
        } catch (S3Exception $e) {
            exit('Error: ' . $e->getAwsErrorMessage() . PHP_EOL);
        }

        // 2. Check to see if the object was deleted.
        try {
            echo 'Checking to see if ' . $keyName . ' still exists...' . PHP_EOL;

            $result = $s3->getObject([
                'Bucket' => $bucket,
                'Key'    => $keyName
            ]);

            echo 'RK Error: ' . $keyName . ' still exists.';
        } catch (S3Exception $e) {
            exit("OK Info ".$e->getAwsErrorMessage());
        }
    } else {



        $target_dir =  dirname(__DIR__, 2) . '\img\gallery\\';
        $target_file = $target_dir . basename($_GET["f"]);

        echo $target_file;



        // Check if file already exists
        if (!file_exists($target_file)) {
            echo "Sorry, file doesn't exist.";
        } else {
            if (!unlink($target_file)) {
                echo ("$target_file cannot be deleted due to an error");
            } else {
                echo ("$target_file has been deleted");
            }
        }
    }
} else {
    echo " not allowed ";
    header("location:" . APP_ROOT);
}

header("location:" . APP_ROOT);
