<?php
//Alma Strutt - HND Graded Unit//
   //  PHP scripts to connect with MySQL Database customer_db.
    class Database{
 
         // specify the database credentials
         private $host = "0.0.0.0";
         private $db_name = "customer_db";
         private $username = "almastrutt01";
         private $password = "";
         public $conn;
         
         // get the database connection
         public function getConnection(){
        $this->conn = null;
                try{
                      $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                      $this->conn->exec("set names utf8");
                }
                catch(PDOException $exception){
                 echo "Connection error: " . $exception->getMessage();
                 }
                   return $this->conn;
                 }
            }
?>
