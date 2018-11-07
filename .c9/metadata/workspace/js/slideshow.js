{"filter":false,"title":"slideshow.js","tooltip":"/js/slideshow.js","undoManager":{"mark":6,"position":6,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":18},"action":"remove","lines":["// JavaScript File"],"id":1},{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1} ","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\"; ","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\"; ","  dots[slideIndex-1].className += \" active\";","}"]}],[{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1} ","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\"; ","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\"; ","  dots[slideIndex-1].className += \" active\";","}"],"id":2},{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1} ","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\"; ","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\"; ","  dots[slideIndex-1].className += \" active\";","}"]}],[{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1} ","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\"; ","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\"; ","  dots[slideIndex-1].className += \" active\";","}"],"id":4},{"start":{"row":0,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["var slideIndex = 0;","showSlides();","","function showSlides() {","    var i;","    var slides = document.getElementsByClassName(\"mySlides\");","    for (i = 0; i < slides.length; i++) {","        slides[i].style.display = \"none\"; ","    }","    slideIndex++;","    if (slideIndex > slides.length) {slideIndex = 1} ","    slides[slideIndex-1].style.display = \"block\"; ","    setTimeout(showSlides, 2000); // Change image every 2 seconds","}"]}],[{"start":{"row":13,"column":1},"end":{"row":13,"column":2},"action":"insert","lines":["a"],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["var slideIndex = 0;","showSlides();","","function showSlides() {","    var i;","    var slides = document.getElementsByClassName(\"mySlides\");","    for (i = 0; i < slides.length; i++) {","        slides[i].style.display = \"none\"; ","    }","    slideIndex++;","    if (slideIndex > slides.length) {slideIndex = 1} ","    slides[slideIndex-1].style.display = \"block\"; ","    setTimeout(showSlides, 2000); // Change image every 2 seconds","}a"],"id":6},{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1} ","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\"; ","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\"; ","  dots[slideIndex-1].className += \" active\";","}"]}],[{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1} ","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\"; ","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\"; ","  dots[slideIndex-1].className += \" active\";","}"],"id":7},{"start":{"row":0,"column":0},"end":{"row":71,"column":1},"action":"insert","lines":["$(document).ready(function(){","  var width = 960;","\theight = 538;","\tvar numberOfBlinds = 20;","\tvar margin = 2;","\tvar color = '#000';","  gapHeight = 100;","","\tvar container = $('#container');","","\tcontainer.width(width).height(height);","\tvar blindWidth = width / numberOfBlinds;","","  images = new Array();","\t$('ul li', container).each(function() {","    images.push($(this)); ","  });","","  images[0].addClass('active');","  activeImage = 0;","","  for (var i = 0; i < numberOfBlinds; i++) {","    var tempEl = $(document.createElement('span'));","    var borders = calculateBorders();","","    tempEl.css({","      'left': i * blindWidth,","      border: margin + 'px solid ' + color,","      borderTop: borders.borderWidthTop + 'px solid ' + color,","      borderBottom: borders.borderWidthBottom + 'px solid ' + color,","      'height': height,","      'width': blindWidth","    });","\t\t\t\t","    container.prepend(tempEl);","  };","","  blinds = $('span', container);","  setTimeout(animateBorders, 1000);","});","","function calculateBorders() {","  var random = Math.floor((Math.random()*9)+1);","  var borderWidthTop = (random / 10) * gapHeight;","  var borderWidthBottom = gapHeight - borderWidthTop;","","  return {borderWidthTop: borderWidthTop, borderWidthBottom: borderWidthBottom};","}","","function animateBorders() {","  var changeOccuredOnce = false;","","  blinds.animate({","    borderTopWidth: height / 2,","    borderBottomWidth: height / 2","  }, 1000, function() {","    if(!changeOccuredOnce) {","      images[activeImage].removeClass('active');","      activeImage = (activeImage + 1) % images.length;","      images[activeImage].addClass('active');","      setTimeout(animateBorders, 3000);","      changeOccuredOnce = true;","    }","","    var borders = calculateBorders();","","    $(this).delay(300).animate({","      borderTopWidth: borders.borderWidthTop,","      borderBottomWidth: borders.borderWidthBottom","    }, 1000);","  });","}"]}],[{"start":{"row":0,"column":0},"end":{"row":71,"column":1},"action":"remove","lines":["$(document).ready(function(){","  var width = 960;","\theight = 538;","\tvar numberOfBlinds = 20;","\tvar margin = 2;","\tvar color = '#000';","  gapHeight = 100;","","\tvar container = $('#container');","","\tcontainer.width(width).height(height);","\tvar blindWidth = width / numberOfBlinds;","","  images = new Array();","\t$('ul li', container).each(function() {","    images.push($(this)); ","  });","","  images[0].addClass('active');","  activeImage = 0;","","  for (var i = 0; i < numberOfBlinds; i++) {","    var tempEl = $(document.createElement('span'));","    var borders = calculateBorders();","","    tempEl.css({","      'left': i * blindWidth,","      border: margin + 'px solid ' + color,","      borderTop: borders.borderWidthTop + 'px solid ' + color,","      borderBottom: borders.borderWidthBottom + 'px solid ' + color,","      'height': height,","      'width': blindWidth","    });","\t\t\t\t","    container.prepend(tempEl);","  };","","  blinds = $('span', container);","  setTimeout(animateBorders, 1000);","});","","function calculateBorders() {","  var random = Math.floor((Math.random()*9)+1);","  var borderWidthTop = (random / 10) * gapHeight;","  var borderWidthBottom = gapHeight - borderWidthTop;","","  return {borderWidthTop: borderWidthTop, borderWidthBottom: borderWidthBottom};","}","","function animateBorders() {","  var changeOccuredOnce = false;","","  blinds.animate({","    borderTopWidth: height / 2,","    borderBottomWidth: height / 2","  }, 1000, function() {","    if(!changeOccuredOnce) {","      images[activeImage].removeClass('active');","      activeImage = (activeImage + 1) % images.length;","      images[activeImage].addClass('active');","      setTimeout(animateBorders, 3000);","      changeOccuredOnce = true;","    }","","    var borders = calculateBorders();","","    $(this).delay(300).animate({","      borderTopWidth: borders.borderWidthTop,","      borderBottomWidth: borders.borderWidthBottom","    }, 1000);","  });","}"],"id":8},{"start":{"row":0,"column":0},"end":{"row":40,"column":24},"action":"insert","lines":["var main = function() {","","\tvar paused = false","","\t$('.arrowR').click(function() {","\t\tpaused = true;","\t\t$('#slideshow > div:first')","\t\t.fadeOut(1000)","\t\t.next()","\t\t.fadeIn(1000)","\t\t.end()","\t\t.appendTo('#slideshow');","\t});","\t\t","\t$('.arrowL').click(function() {","\t\tpaused = true;","\t\t$('#slideshow > div:last')","\t\t.fadeIn(1000)","\t\t.prependTo('#slideshow')","\t\t.next()","\t\t.fadeOut(1000)","\t\t.end();","\t});","","","\t","\tsetInterval(function() {","\t\tif (paused === false) { ","\t\t\t$('#slideshow > div:first')","\t\t\t.fadeOut(1000)","\t\t\t.next()","\t\t\t.fadeIn(1000)","\t\t\t.end()","\t\t\t.appendTo('#slideshow');","\t\t};","\t},  5000);","   ","\t","};","","$(document).ready(main);"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":40,"column":24},"end":{"row":40,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1525716505210,"hash":"bc803f3bf1a19991f9f76bbf30df9041a56b47d0"}