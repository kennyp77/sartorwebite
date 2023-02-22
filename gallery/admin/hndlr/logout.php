<?php
session_start();
$ownpath = str_replace($_SERVER['DOCUMENT_ROOT'], "",str_replace("\\", "/",dirname(__FILE__)).'/');

define('APP_ROOT', $_SESSION["APP_ROOT"] );

session_destroy();
header("location:".APP_ROOT);
?>