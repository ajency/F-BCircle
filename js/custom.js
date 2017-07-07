$(function(){

	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    if($('.sticky-section').length){
		    $('.sticky-section').toggleClass('fixed',
		     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
		      scroll >= $('.update-sec').offset().top
		    );
	    }
	 //    if($('.sticky-section').hasClass('fixed')){
			
		// 	$('.enquiry-btn').show(300);
		// }
		// else{
		// 	$('.enquiry-btn').hide(300);	
		// }
	});

	if ($(window).width() >= 769) {
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			 //console.log(scroll);
			if (scroll >= 100) {
			    //console.log('a');
			    $(".trans-header").addClass("change");
			    $('.sticky-bottom').addClass('active');
			} else {
			    //console.log('a');
			    $(".trans-header").removeClass("change");
			    $('.sticky-bottom').removeClass('active');
			}
		});
	}

	if ($(window).width() < 769) {
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll >= 400) {
			    $('.sticky-bottom').addClass('active');
			} else {
			    $('.sticky-bottom').removeClass('active');
			}
			 if($(window).scrollTop() + $(window).height() > ($(document).height() - 100) ) {
       			$(".sticky-bottom").removeClass('active');
   			}
		});
		$('.tab-con').addClass('tab-content');
	}



	// Custom menu click and scroll to particular ID
	var topMenu = jQuery(".nav-info__tabs"),
        offset = 40,
        topMenuHeight = topMenu.outerHeight()+offset,
        // All list items
        menuItems =  topMenu.find('a[href*="#"]'),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var href = jQuery(this).attr("href"),
          id = href.substring(href.indexOf('#')),
          item = jQuery(id);
          //console.log(item)
          if (item.length) { return item; }
        });

    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = jQuery(this).attr("href"),
        id = href.substring(href.indexOf('#'));
          offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
      jQuery('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 1000);
      e.preventDefault();
    });

    // Bind to scroll
    jQuery(window).scroll(function(){
       // Get container scroll position
       var fromTop = jQuery(this).scrollTop()+topMenuHeight;

       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if (jQuery(this).offset().top < fromTop)
           return this;
       });

       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";               
       
       menuItems.removeClass("active");
       if(id){
            menuItems.parent().end().filter("[href*='#"+id+"']").addClass("active");
       }
       
    });

    // Form id scroll

	$(".enquiry-btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".enquiry-form").offset().top - 90
	    }, 2000);
	});


	// Go to map

	$(".map-link").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".detail-3").offset().top
	    }, 2000);
	});

	// Go to enquiry form

	$(".send-enq").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".send-enquiry-section").offset().top - 100
	    }, 2000);
	});

	// modify search click

	$(".modify-search").click(function() {
	    $('html, body').animate({
	        scrollTop: 0 
	    }, 2000);
	});


	// if($('.sticky-section').hasClass('fixed')){
	// 	alert();
	// 	$('.enquiry-btn').show(300);
	// }
	// else{
	// 	$('.enquiry-btn').hide(300);	
	// }

	$('.description').readmore({
	   speed: 25,
	   collapsedHeight: 170,
	   moreLink: '<a href="#" class="more vm text-secondary">View more</a>',
	   lessLink: '<a href="#" class="vm less text-secondary">View Less</a>'
	 });

	// Smooth scroll

	$("html").easeScroll();

	// Easing options

	// frameRate: 60,
 //  	animationTime: 1000,
 //  	stepSize: 120,
 //  	pulseAlgorithm: 1,
	// pulseScale: 8,
 //  	pulseNormalize: 1,
 //  	accelerationDelta: 20,
 //  	accelerationMax: 1,
 //  	keyboardSupport: true,
 //  	arrowScroll: 50,
 //  	touchpadSupport: true,
 //  	fixedBackground: true


	// Bootstrap Lightbox

	// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
 	//    	event.preventDefault();
	//     $(this).ekkoLightbox();
	// });
		$(document).ready(function() {
		  $('.image-link').magnificPopup({type:'image'});
		});


		$('.photo-gallery__thumbnails').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
			enabled:true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

		if ($(window).width() <= 768) {
	    	var coreCat = $('.detach-col-1').detach();
			$('.sell-re').after(coreCat);

			var detailbtn = $('.detail-move').detach();
			var detailrow = $('.detail-move');
			$(detailrow).closest('.seller-info').find('.recent-updates__content').append(detailbtn);
			// $('.recent-updates__content').append(detailbtn);

			var recentData = $('.recent-data').detach();
			$('.updates-dropDown').append(recentData);

			$(".show-info").click(function() {
			    $('html, body').animate({
			        scrollTop: '+=200px'
			    }, 1000);
			});
		}

		// mobile side-menu

		$('.sideMenu').click(function(){
			$('.m-side-bar').addClass('active');
			$('.site-overlay').addClass('active');
			$('body').addClass('blocked');
		});

		$('.form-toggle').click(function(){
			$('.fly-out').addClass('active');
		});

		$('.filter-by').click(function(){
			$('.filterBy').addClass('active');
		});

		$('.search-by').click(function(){
			$('.searchBy').addClass('active');
		});

		$('.mobile-back').click(function(){
			$('.fly-out').removeClass('active');
		});

		$(document).mouseup(function(e) {
		  var Click_todo;
		  Click_todo = jQuery('.m-side-bar');
		  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
		    jQuery('.m-side-bar,.site-overlay').removeClass('active');
		    jQuery('body').removeClass('blocked');
		  }
		});

		// toggle icon

		$('.filter-group__header').click(function(){
			$(this).find('.arrow').toggleClass('active');
		});

		$('.more-area').click(function(){
			$(this).addClass('hidden');
		});

		$(".recent-updates__text").click(function() {
		    $(this).parent('.recent-updates').siblings('.updates-dropDown').slideToggle('slow');
		    $(this).toggleClass('active');
		});


});