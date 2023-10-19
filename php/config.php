<?php 

    /*$conn = mysqli_connect("localhost","root","","chat");
    if(mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }*/



    $conn = mysqli_connect("localhost","root","","chat");
    if(!$conn){
        echo "Database connected ". mysqli_connect_error();
        
    }
?>