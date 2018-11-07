<!DOCTYPE html>
<html lang="en">
    
     <!-- Admin Page code -->

<head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="IE=edge">
        

        
        <title>Admin page</title>
        <meta name="description" content="Lidiflu Renewable Energy Home Page">
        <meta name="author" content="Alma Strutt">
        <meta name="date" content="May 2018">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         
        <link rel="stylesheet" href="https://use.typekit.net/hlr5wji.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        

<!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
        <script src="js/simpleCart.js"></script>
        <script src="js/currency.js"></script>
        <script src="../js/allproducts.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>


<!-- Latest compiled and minified CSS -->
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   

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
        

        <div id="app" class="container" style="font-family: jaf-bernina-sans, sans-serif">
    
        <h1 style="margin-left: 0px;
                    padding-top: 20px;
                    font-family: jaf-bernina-sans, sans-serif;
                    font-style: normal;
                    font-weight: 300;    
                    font-size: 60px;
                    color:rgb(115, 118, 126);
                    color: hsla(20, 0%, 60%, 20);
                    border-top: solid 3px rgb(96,149,187);">Admin Area</h1>
        
         <div class="row">

        <table class="table">
            <thead>
            <tr>
                <th> Name </th>
                 <th> Description </th>
                 <th> Price </th>
                <th> Image</th>
                <th>Read</th>
                <th> Update</th>
                <th> Delete</th>
            </tr>
            </thead>
            
            <tbody id="data">
                
            </tbody>
            
        </table> 
        
        
        </div>
        

        
        
             
              <div class="row">
        
        <!-- When this button is clicked, it will load the create product form -->
                <a id="create-product-button" class="btn btn-primary btn-md" style= "margin-bottom: 50px" href="products/create.php"><span class="glyphicon glyphicon-plus"></span> Add Product</a>
                 <a id="create-product-button" class="btn btn-primary btn-md" style= "margin-bottom: 50px" href="index.php"></span>Return to Home</a>
                
            </div>
    
        </div>

        

    </body>
</html>