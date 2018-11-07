<?php

    include('includes/header.php');
    
?>

 <h1> REGISTER</h1>
        
        <form>
            <label for="username"> Username </label>
            <input type="text" name="username" required id="username">

            <label for="useremail"> Email </label>
            <input type="email" name="useremail" required  id="useremail">

            <label for="userpassword"> Password </label>
            <input type="password" name="userpassword" required id="userpassword">

            <label for="useraddress"> Address </label>
            <textarea cols="22" rows="3" id="useraddress"> </textarea>

           
           <input type="submit" value="REGISTER" id="submit"><br/>

        </form>
        
        
<footer>


<?php
    include 'includes/footer.php';
?>
