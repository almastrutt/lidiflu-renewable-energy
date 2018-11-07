// Student name: Alma Strutt
//this code retrieves JSON data from a file and displays it on the product page

function handleSuccess() {
    const data = JSON.parse(this.responseText);
      for (var item in data.records) {
          if (data.records.hasOwnProperty(item)) {
         var fl = document.createElement("article");
         
         var flex_item1 = document.createElement("div");
          flex_item1.className += "flex-item first-item simpleCart_shelfItem";
          
          
          var h4 = document.createElement("h4");
          h4.textContent = data.records[item]['name'];
          h4.className +="item_name";
          flex_item1.appendChild(h4);
          
          var p = document.createElement("p");
          p.textContent = data.records[item]['description'];
          flex_item1.appendChild(p);
          
          var h6 = document.createElement("h6");
          h6.textContent = "Price:  £"+ data.records[item]['price'];
          h6.className +="item_price";
          flex_item1.appendChild(h6);
          
          var span = document.createElement("a");
          span.textContent = "Add to cart";
          span.href="javascript:void(0)";
          span.style ="text-decoration:none;";
          span.className +="add-to-cart item_add";
          flex_item1.appendChild(span);
          
          var flex_item2 = document.createElement("div");
           flex_item2.className +="flex-item second-item";
           var image = document.createElement("img");
           image.src ="images/" + data.records[item]['image_path'];
           flex_item2.appendChild(image);
           
           fl.appendChild(flex_item1);
           fl.appendChild(flex_item2);
           
           
            var result =  document.getElementById("main");
            result.appendChild(fl);
     }
   }
    
}


function handleError() {
    // Function to handle the request if it fails / unsuccessful. 
      var h2 = document.createElement("h4");
     h2.style.color = "red";
      h2.innerHTML=" An Error Occurs";
      var error = document.getElementById("main");
      error.appendChild(h2);
}

// Create an XHR object 
const xhr = new XMLHttpRequest();
xhr.open('GET','https://graded-unit-almastrutt01.c9users.io/products/read.php');
xhr.onload= handleSuccess;
xhr.onerror = handleError;
xhr.send();
