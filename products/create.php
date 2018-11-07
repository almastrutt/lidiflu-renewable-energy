<?php
// include database and object files
include_once '../conf/database.php';
include_once '../objects/products.php';
// get database connection
$database = new Database();
$db = $database->getConnection();
// pass connection to objects
$product = new Product($db);
?>


<!DOCTYPE html>
<html lang="en">
<head>
 <title> Create Product </title>
        <meta charset="UTF-8">
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
       <!-- latest Bootbox library . Must ensure that students add this library - libraries must be entered in the right order-->
         <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>
       
       <!--Script to output all products on the admin page-->
        <script src="js/adminReadAllProducts.js"></script>
        
        <!--function to make form values to JSON format -->
        <script src="js/important.js"></script>
        
        <!-- Script to read one product from the table -->
        <script src="js/read-one.js"></script>
        <!-- Script to update data in the data -->
        <script src="js/update-product.js"></script>
        
        <!-- Script to delete data from the table-->
        <script src="js/delete-product.js"></script>
    
</head>
<body>

<!-- our app will be injected here -->
<div id="app" class="container">
    <h1>Create Product</h1>
    
    <!--HTML form for creating a product -->
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" enctype="multipart/form-data">
        <table class='table table-hover table-responsive table-bordered'>
         
             <!--- name field -->
             <tr>
             <td> Name </td>
             <td><input type='text' name='name' class='form-control' required /> </td>
             </tr>
         
         
            <!--- description field -->
             <tr>
             <td> Description </td>
             <td><input type='text' name='description'  class='form-control' required /></td>
             </tr>
         
             
             <!--- price  field -->
             <tr>
             <td> Price </td>
             <td><input type='number' name='price' min='1' step='.01'  class='form-control' required /></td>
             </tr>
         
         
         
             <!--- Photo field -->
             <tr>
             <td> Photo </td>
             <td><input type='file' name='image_path' class='form-control' required /></td>
             </tr>
         
            
            <!--Submit Button-->
             <tr>
              <td></td>
              <td><button type="submit" class="btn btn-primary"><span class='glyphicon glyphicon-plus'></span> Create Product</button></td>
              </tr>
         
            
        </table>
        </form>
</body>
</html>



<?php

echo "<div class='right-button-margin'>";
    echo "<a href='https://graded-unit-almastrutt01.c9users.io/admin.php' class='btn btn-primary'> <span class='glyphicon glyphicon-list'> </span>View all Products</a>";
echo "</div>";

?>


<?php
                                        // --  this give a unique name to the uploaded image  ---//
   $image_path=!empty($_FILES["image_path"]["name"]) ? sha1_file($_FILES['image_path']['tmp_name']) . "-" . basename($_FILES["image_path"]["name"]) : "";
   $product->image_path = $image_path;
   if($_POST){
    // set product property values
    $product->name = $_POST['name'];
    $product->description = $_POST['description'];
    $product->price = $_POST['price'];
    $product->image_path = $image_path;
    $product->date_created = date('Y-m-d H:i:s');
 
          // create the product
          if($product->create()){
      
          echo "<div class='alert alert-success'>Product was created.</div>";
          // try to upload the submitted file
           // uploadPhoto() method will return an error message, if any.
          echo $product->uploadPhoto();
           }
 
         // if unable to create the product, tell the user
          else{
        echo "<div class='alert alert-danger'>Unable to create product.</div>";
          }
    }



?>