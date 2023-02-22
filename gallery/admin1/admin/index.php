<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

?>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">   
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <title>Search</title>
    </head>
    <body> 
        <form id="msform" method="post" action="hndlr/login">
                <fieldset>
                <h1>Login</h1>
          <div class="input-group input-group-lg">
            <span class="input-group-addon"><span class="glyphicon glyphicon-user"> </span></span>
          <input type="text" class="form-control" placeholder="Email" name="email">
        </div><br>
           <div class="input-group input-group-lg">
            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"> </span></span>
          <input type="password" class="form-control" placeholder="•••••••••••" name="password" >
        </div>
          <br>
              <input type="submit" class="btn btn-success"> 
                </fieldset>
        </form>
        <style>
              body{
                background-color: #f4c355 !important;
              }
              #msform {
                      width: 400px;
                      margin: 50px auto;
                      text-align: center;
                      position: relative;
              }
              #msform fieldset {
                      background: white;
                      border: 0 none;
                      border-radius: 3px;
                      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
                      padding: 20px 30px;

                      box-sizing: border-box;
                      width: 80%;
                      margin: 0 10%;
                      position: absolute;
              }
              #msform fieldset:not(:first-of-type) {
                      display: none;
              }


        </style>
    </body>
</html>