<?php

//database connection details
$servername = "0.0.0.0";
$username ="almastrutt01";
$password ="";
$database ="customer_db";
$dbport = 3306;


//making a connection to the database
$db = new mysqli($servername, $username, $password, $database, $dbport);

// check connection

if($db->connect_error)  {
    die("Connection failed: " . $db->connect_error);
}
    echo "Connected successfully (".$db->host_info.")";
    

?>