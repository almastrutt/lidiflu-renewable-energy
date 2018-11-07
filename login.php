<?php

    include('includes/header.php');
    
?>


        
        <h1> SIGN IN</h1>
        
        <form>
            
           <label for="username"> Username:</label>
           <input type="text" name="username" id="username">
        
           <label for="userpassword"> Password:</label>   
           <input type="password" name="userpassword" id="userpassword">
        
           <input type="submit" value="SUBMIT" id="submit"/>
           
           <h2> <b>New customers</b> <a href="register.php">REGISTER</a></h2>


        </form>
    
        

<footer>

<?php
    include 'includes/footer.php';
?>
