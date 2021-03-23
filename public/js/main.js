  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyA3VKmwjV34YtxdzEFYZ3Q2qZ60wZicvc0",
    authDomain: "diamond-ridge-professionals.firebaseapp.com",
    databaseURL: "https://diamond-ridge-professionals.firebaseio.com",
    projectId: "diamond-ridge-professionals",
    storageBucket: "",
    messagingSenderId: "529180140216",
    appId: "1:529180140216:web:ec9198c19936a590"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();



(function ($) {
"use strict";

$(window).on('load', function () {
    $("#sticky-header").addClass("sticky");
    $(".sticky").css("position", "fixed");
    $(".sticky").css("width", "100%");
    $(".sticky").css("top", "0");
    $(".sticky").css("z-index", "99999");
    $(".sticky").css("background", "#fff");
    $(".slider-area").css("margin-top", "75px");
})

// TOP Menu Sticky
// $(window).on('scroll', function () {
// 	var scroll = $(window).scrollTop();
// 	if (scroll < 50) {
//         $("#sticky-header").removeClass("sticky");
         
// 	} else {
//         $("#sticky-header").addClass("sticky");
//         $(".sticky").css("position", "fixed");
//         $(".sticky").css("width", "100%");
//         $(".sticky").css("top", "0");
//         $(".sticky").css("z-index", "99999");
//         $(".sticky").css("background", "#fff");
//         $(".slider-area").css("margin-top", "75px");
        



       
        
// 	}
// });



$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});






/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

$('.slider-active').owlCarousel({
    loop:false,
    margin:0,
    items:1,
   
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
});







})(jQuery);	




//   database.ref('/Views').once('value').then(function(snapshot) {
//     currentViews = snapshot.val().views;
//     console.log(currentViews)

//     database.ref("/Views").set({
//       views: currentViews + 1
//     });

//   });




// database.ref('/Reviews').once('value').then(function(snapshot) {
//     console.log(snapshot.val().user.name)
//     name = snapshot.val().user.name;
// })

// testimonials = [
//     {
//         name: name,
//         city: 'Herriman, UT',
//         stars: "5 stars",
//         message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
//     },
//     {
//         name: 'John Anderson',
//         city: 'West Valley, UT',
//         stars: "5 stars",
//         message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
//     },
//     {
//         name: 'Adam Turner',
//         city: 'Salt Lake City, UT',
//         stars: "4 stars",
//         message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
//     }
// ]



// function renderCards () {
//     for (var i = 0, n = testimonials.length; i < n; i++) {
//         var col = $("<div class='col'>")
//         var card = $("<div class='testimonial'>")
//         var name = $("<div class='name'>")
//         name.text(testimonials[i].name)
//         var city = $("<div class='city'>")
//         city.text(testimonials[i].city)
//         var stars = $("<div class='stars'>")
//         stars.text(testimonials[i].stars)
//         var text = $("<div class='p'>")
//         text.text(testimonials[i].message)
//         name.appendTo(card)
//         city.appendTo(card)
//         stars.appendTo(card)
//         text.appendTo(card)
//         card.appendTo(col)
       
//         $('#testimonial-cards').append(col)



//     }
// }

// renderCards();

$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  });