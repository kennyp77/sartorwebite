<?php
$ownpath1 = str_replace($_SERVER['DOCUMENT_ROOT'], "", str_replace("\\", "/", dirname(__FILE__)) . '/');

?>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>DASHBOARD</title>
      <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo $ownpath1; ?>css/w3.css">
    <link rel="stylesheet" href="<?php echo $ownpath1; ?>css/css">
    <link rel="stylesheet" href="<?php echo $ownpath1; ?>css/font-awesome.min.css">
    <style>
        body,
        h1 {
            font-family: "Montserrat", apexmk2
        }

        img {
            margin-bottom: -7px
        }

        .w3-row-padding img {
            margin-bottom: 12px
        }
    </style>
</head>

<body>
    <div id="i4c-draggable-container" style="position: fixed; z-index: 1499; width: 0px; height: 0px;">
        <div data-reactroot="" class="resolved" style="all: initial;"></div>
    </div>


    <!-- !PAGE CONTENT! -->
    <div class="w3-content" style="max-width:1500px">

        <!-- Header -->
        <div class="w3-opacity">

            <span class="w3-button w3-xxlarge w3-white w3-left">Admin</span>
            <a class="w3-button w3-xxlarge w3-white w3-right" href="<?php echo $ownpath1; ?>hndlr/logout.php">LOG OUT <i class="fa fa-times"></i></a>
            <div class="w3-clear"></div>
            <header class="w3-center w3-margin-bottom">
                <?php
                ///some stuff here later
                ?>

                <form action="<?php echo $ownpath1; ?>hndlr/upload.php" method="post" enctype="multipart/form-data">
                    Select image to upload:
                    <input type="file" name="fileToUpload" id="fileToUpload">
                    <p class="w3-padding-16"> <input class="w3-button w3-black" type="submit" value="UPLOAD" name="submit"></p>
                </form>
            </header>
        </div>

        <!-- Photo Grid -->
        <div class="w3-row-padding" id="myGrid" style="margin-bottom:128px">

            <?php
            require   $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

            use Aws\S3\S3Client;
            use Aws\S3\Exception\S3Exception;

            $s3mode = true;
            $bucketName = 'sartorgallery';
            $IAM_KEY = 'AKIAZZQ7KLIBRRAKCTAY';
            $IAM_SECRET = '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';

            $gallery = null;
            ?>
            <?php

            if ($s3mode) {
                ///todo later may sore to db so we check db first before chckign online for now we do direct

                // Use the high-level iterators (returns ALL of your objects).
                try {
                    function scanS3dated($bucketName, $IAM_KEY, $IAM_SECRET)
                    {
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

                        $folder = "gallery/";
                        $results = $s3->getPaginator('ListObjects', [
                            'Bucket' => $bucketName,
                            "Prefix" => $folder
                        ]);

                        $files = [];

                        foreach ($results as $result) {
                            foreach ($result['Contents'] as $object) {
                                // //echo "OBJECT: ".json_encode($object) . PHP_EOL;

                                if ($object['Key'] == $folder) {
                                    //echo "container ";
                                } else {
                                    //echo "OBJECT: "  . basename($object['Key']) . " " . strtotime($object['LastModified']) . PHP_EOL;
                                    // array_push($files, basename($object['Key']));
                                    $files[basename($object['Key'])] = basename($object['LastModified']);
                                }
                            }
                        }


                        arsort($files);
                        $files = array_keys($files);
                        //      print_r($files);

                        return ($files) ? $files : false;
                    }
                    $files = scanS3dated($bucketName, $IAM_KEY, $IAM_SECRET);
                } catch (S3Exception $e) {
                    echo $e->getMessage() . PHP_EOL;
                }

                // Use the plain API (returns ONLY up to 1000 of your objects).
                // try {
                //     $objects = $s3->listObjects([
                //         'Bucket' => $bucketName
                //     ]);
                //     foreach ($objects['Contents']  as $object) {
                //         echo $object['Key'] . PHP_EOL;
                //     }
                // } catch (S3Exception $e) {
                //     echo $e->getMessage() . PHP_EOL;
                // }
            } else {
                $gallery = dirname(__DIR__) . '/img/gallery';
                function scandirdated($dir)
                {
                    $ignored = array('.', '..', '.svn', '.htaccess');
                    $files = array_diff(scandir($dir), $ignored);;
                    foreach (scandir($dir) as $file) {
                        if (is_file($dir . "/" . $file)) {
                            $files[$file] = filemtime($dir . '/' . $file);
                        } else {
                            //            echo "\n not file ";
                        }
                    }

                    arsort($files);
                    $files = array_keys($files);
                    //      print_r($files);

                    return ($files) ? $files : false;
                }
                $files = scandirdated($gallery);
            }
            ?>
            <div class="w3-quarter">

                <?php
                if ($s3mode) {
                    //echo " s3 mode ";
                    $s3 = new S3Client(
                        [
                            'credentials' => array(
                                'key' => $IAM_KEY,
                                'secret' => $IAM_SECRET
                            ),
                            'version' => 'latest',
                            'region'  => 'us-east-2'
                        ]
                    );

                    for ($x = 0; $x < count($files); $x += 4) {

                        $file = $files[$x];
                        $keyName = 'gallery/' . $file;
                        // $pathInS3 = 'https://s3.us-east-2.amazonaws.com/' . $bucketName . '/' . url_encode($keyName); wont work as i rather need withth + nt %20 at spaces
                        //echo "Keyname " . $keyName;

                        ///are already files bcz of base name * TODO 11111  LATER HUH WCH MAY MEAN OT FILTER IN ABOVE FRM GALLERY TO  NT JST TAKE BASENAME BT RATHE RONLY THOSE AT TH BASE FOLDE RITSLF NOT DEEPER 
                        $result = $s3->getObject(array( //seems to jst test existnce
                            'Bucket' => $bucketName,
                            'Key'    => $keyName
                        )); //confirming existnce 
                        $pathInS3 = $s3->getObjectUrl($bucketName, $keyName);

                ?>
                        <div class="imghldr">
                            <a href="<?php echo $ownpath1; ?>hndlr/updrop?f=<?php echo $file; ?>" class="  w3-xxlarge w3-white w3-right delete"><i class="fa fa-times"></i></a>
                            <img src="<?php echo $pathInS3; ?>" style="width:100%">
                        </div>
                    <?php

                    }
                    ?>
                    <?php
                } else {
                    for ($x = 0; $x < count($files); $x += 4) {

                        $file = $files[$x];
                        if (is_file($gallery . "/" . $file)) {
                    ?>
                            <!-- <div class="imghldr">
                                <a href="<?php echo $ownpath1; ?>hndlr/updrop?f=<?php echo $file; ?>" class="  w3-xxlarge w3-white w3-right delete"><i class="fa fa-times"></i></a>
                                <img src="<?php echo $ownpath1; ?>../img/gallery/<?php echo $file; ?>" style="width:100%">
                            </div> -->
                <?php
                        } else {
                            //            echo "\n not file ";
                        }
                    }
                }
                ?>
            </div>

            <div class="w3-quarter">
                <?php
                if ($s3mode) {
                    //echo s3 mode ";
                    $s3 = new S3Client(
                        [
                            'credentials' => array(
                                'key' => $IAM_KEY,
                                'secret' => $IAM_SECRET
                            ),
                            'version' => 'latest',
                            'region'  => 'us-east-2'
                        ]
                    );

                    for ($x = 1; $x < count($files); $x += 4) {

                        $file = $files[$x];
                        $keyName = 'gallery/' . $file;
                        // $pathInS3 = 'https://s3.us-east-2.amazonaws.com/' . $bucketName . '/' . url_encode($keyName); wont work as i rather need withth + nt %20 at spaces
                        //echoKeyname " . $keyName;

                        ///are already files bcz of base name * TODO 11111  LATER HUH WCH MAY MEAN OT FILTER IN ABOVE FRM GALLERY TO  NT JST TAKE BASENAME BT RATHE RONLY THOSE AT TH BASE FOLDE RITSLF NOT DEEPER 
                        $result = $s3->getObject(array( //seems to jst test existnce
                            'Bucket' => $bucketName,
                            'Key'    => $keyName
                        )); //confirming existnce 
                        $pathInS3 = $s3->getObjectUrl($bucketName, $keyName);

                ?>
                        <div class="imghldr">
                            <a href="<?php echo $ownpath1; ?>hndlr/updrop?f=<?php echo $file; ?>" class="  w3-xxlarge w3-white w3-right delete"><i class="fa fa-times"></i></a>
                            <img src="<?php echo $pathInS3; ?>" style="width:100%">
                        </div>
                    <?php

                    }
                    ?>
                    <?php
                } else {
                    for ($x = 1; $x < count($files); $x += 4) {

                        $file = $files[$x];
                        if (is_file($gallery . "/" . $file)) {
                    ?>
                            <div class="imghldr">
                                <a href="<?php echo $ownpath1; ?>hndlr/updrop?f=<?php echo $file; ?>" class="  w3-xxlarge w3-white w3-right delete"><i class="fa fa-times"></i></a>
                                <img src="<?php echo $ownpath1; ?>../img/gallery/<?php echo $file; ?>" style="width:100%">
                            </div>
                <?php
                        } else {
                            //            echo "\n not file ";
                        }
                    }
                }
                ?>
            </div>

            <div class="w3-quarter">
                <?php
                if ($s3mode) {
                    //echo s3 mode ";
                    $s3 = new S3Client(
                        [
                            'credentials' => array(
                                'key' => $IAM_KEY,
                                'secret' => $IAM_SECRET
                            ),
                            'version' => 'latest',
                            'region'  => 'us-east-2'
                        ]
                    );

                    for ($x = 2; $x < count($files); $x += 4) {

                        $file = $files[$x];
                        $keyName = 'gallery/' . $file;
                        // $pathInS3 = 'https://s3.us-east-2.amazonaws.com/' . $bucketName . '/' . url_encode($keyName); wont work as i rather need withth + nt %20 at spaces
                        //echoKeyname " . $keyName;

                        ///are already files bcz of base name * TODO 11111  LATER HUH WCH MAY MEAN OT FILTER IN ABOVE FRM GALLERY TO  NT JST TAKE BASENAME BT RATHE RONLY THOSE AT TH BASE FOLDE RITSLF NOT DEEPER 
                        $result = $s3->getObject(array( //seems to jst test existnce
                            'Bucket' => $bucketName,
                            'Key'    => $keyName
                        )); //confirming existnce 
                        $pathInS3 = $s3->getObjectUrl($bucketName, $keyName);

                ?>
                        <div class="imghldr">
                            <a href="<?php echo $ownpath1; ?>hndlr/updrop?f=<?php echo $file; ?>" class="  w3-xxlarge w3-white w3-right delete"><i class="fa fa-times"></i></a>
                            <img src="<?php echo $pathInS3; ?>" style="width:100%">
                        </div>
                    <?php

                    }
                    ?>
                    <?php
                } else {
                    for ($x = 2; $x < count($files); $x += 4) {

                        $file = $files[$x];
                        if (is_file($gallery . "/" . $file)) {
                    ?>
                            <div class="imghldr">
                                <a href="<?php echo $ownpath1; ?>hndlr/updrop?f=<?php echo $file; ?>" class="  w3-xxlarge w3-white w3-right delete"><i class="fa fa-times"></i></a>
                                <img src="<?php echo $ownpath1; ?>../img/gallery/<?php echo $file; ?>" style="width:100%">
                            </div>
                <?php
                        } else {
                            //            echo "\n not file ";
                        }
                    }
                }
                ?>
            </div>
        </div>



        <!-- End Page Content -->
    </div>

    <style>
        .delete {
            color: grey;
            line-height: 50px;
            font-size: 80%;
            position: absolute;
            right: 0;
            text-align: center;
            top: 0;
            width: 50px;
            text-decoration: none;
            opacity: .7;
        }

        .delete:hover {
            opacity: .9;
            color: #e00f0f !important;
        }

        .imghldr:hover {
            opacity: 1;
        }

        .imghldr {
            opacity: .65;
        }

        /*    .delete{
        display: none;
    }*/

        .imghldr:hover~.delete {
            display: block;
        }

        .imghldr {
            position: relative;

        }
    </style>


    <div id="i4c-dialogs-container"></div>
</body>

</html>