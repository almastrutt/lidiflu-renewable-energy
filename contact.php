<?php

    include('includes/header.php');
    
?>

        
        <h1> CONTACT US</h1>
        
        <form>
            <label for="username"> Name </label>
            <input type="text" name="username" required id="username"> 

            <label for="useremail"> Email </label>
            <input type="email" name="useremail" required id="useremail">

            <label for="useraddress"> Address </label>
            <textarea cols="22" rows="3" id="useraddress"> </textarea>
           
           <input type="submit" value="CONTACT US" id="submit"/>

        </form>
        
        <h3>Find us</h3>

        <div id="map">
        
            <script>

                function initMap() {
                    
                    var mapCanvas = document.getElementById("map");
                    var mapOptions = {
                        center: new google.maps.LatLng(55.832631, -4.541711),
                        zoom: 10
                    };
                    var map = new google.maps.Map(mapCanvas, mapOptions);
                }
            </script>
            
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAp8GqXUTgjhRpzfyrnyGcJVIChHHlr8Mw&callback=initMap"></script>
            
        </div>
        

        


<footer>


<?php
    include 'includes/footer.php';
?>
