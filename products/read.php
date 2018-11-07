<?php

    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");


    // include database and object files
    include_once '../conf/database.php';
    include_once '../objects/products.php';


    // Creating an instance of the database object
    $database = new Database();
    $db = $database->getConnection();


    // Creating an instance of the Product object
    $product = new Product($db);

    // Calling the read function inside Product to select all products from the table products
    $result = $product->read();

    //Check if more than 0 record has been found
    if($result) {
    // products array
        $product_arr = array();
        $product_arr["records"]=array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $product_item =array("id" => $id,"name" => $name, "description" => html_entity_decode($description),
            "price" => $price,"image_path" => $image_path, "date_created" => $date_created,"date_modified"=> $date_modified );
        array_push($product_arr["records"], $product_item);}
        echo json_encode($product_arr);
    }
    else {
     echo json_encode(array("message" => "No records found.")); 
    
           }



?>