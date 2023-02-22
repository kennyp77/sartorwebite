<?php /** @noinspection ALL */

    session_start();
    $ownpath = str_replace($_SERVER['DOCUMENT_ROOT'], "",str_replace("\\", "/",dirname(__FILE__)).'/');
    define('APP_ROOT', $_SESSION["APP_ROOT"] );
    echo var_dump($_POST);

    $loggedin=isset($_SESSION['login']);
    if($loggedin){//redirected from signup or visted directly or etc
        echo " already logged in ";
    }else{

        define('DB_SERVER','localhost');
        define('DB_USERNAME', 'root');
        define('DB_PASSWORD', '');
        define('DB_NAME', 'gallery');
        define('DB_PORT', 3306);

        $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);


        $name = $_POST["email"];
        $pass = $_POST["password"];

//        $select = " select * from datacollector.users where name ='".$name."' && password ='".$pass."'";
        $select = "  select 'orgadmin' as typeuser, email, password from orgadmin"
                ." where email ='".$name."' && password ='".$pass."'" ;
        
        
        $result = mysqli_query($connection, $select) or die(mysqli_error($connection)) ;
        //    echo var_dump($result);


        $num = mysqli_num_rows($result);
        $user = mysqli_fetch_array($result); 
        if($num >0 ){
            $_SESSION["login"] = $name;     
        }else{
            $_SESSION["error"] =  " Password or Username Not Matching ";//todo supposed to be read and collcted by approot * or forwarded , until collected 
        }
    }
//    echo ' ACCESS '.$_SESSION["access"];    echo ' INTERNAL '.$_SESSION["internal"];

    header("location:".APP_ROOT );
?>