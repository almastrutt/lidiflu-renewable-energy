    <nav> 
    
        <ul>
            
            <li style="float:right"><a href="contact.php">CONTACT US </a></li>
           <!--Admin page to be hidden to other users <li style="float:right"><a href="admin.php">ADMINISTRATION</a></li>-->
            <li style="float:right"><a href="productspage.php">PRODUCTS</a></li> 
            <li style="float:right"><a href="register.php">REGISTER</a></li> <!--List Item with an Anchor Link -->
            <li style="float:right"><a href="login.php">SIGN IN TO ORDER</a></li>
            <li style="float:right"><a href="index.php">HOME</a></li> 
            






            <?php
                if(isset($_SESSION['ROLE']))
                {
                    if($S_SESSION['ROLE']=="Admin")
                    {
                        echo'<li><a href="admin.php">Administration</a></li>';

                    }
                }
            ?>    
            

            
            <?php
                if(isset($_SESSION['ROLE']))
                {
                    echo '<li style="float:right"><a href="logout.php">Sign Out</a></li>';
                }else 
                {
                    echo '<li style="float:right"><a href="login.php"></a></li>';
                }
                    
            ?>
            
        </ul>
        
    </nav>
