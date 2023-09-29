
(function($) {
	"use strict";

   
    
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

      // Preloader
      $(window).on('load', function() {
        if ($('#preloader').length) {
          $('#preloader').delay(1500).fadeOut('slow', function() {
            $(this).remove();
          });
        }
      });

    //Defines variables 
    var arrow_up = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
    var arrow_down = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    var arrow_span = '<span class="menu-main-parent">' + arrow_down + '</span>';
    var close_button = '<div class="sub-menu-close"></div>';
    
    //Insert all arrow down span element
    
    $('.nav-menu > .menu-item-has-children').append(arrow_span);
    $('.nav-menu > .menu-item-has-children .sub-menu > .menu-item-has-children').append(arrow_span);
    
    //Insert all close button element
    $('.nav-menu .menu-item-has-children .sub-menu').append(close_button);
    $('.nav-menu .mega-menu .mega-menu').append(close_button);

    /*-----------------------------------------------------------------------------------*/
    /*  OPEN SUB MENU FUNCTION
    /*-----------------------------------------------------------------------------------*/
    $('span.menu-main-parent').on('click', function(e){
        e.preventDefault();
        
        var t = $(this);
        var menu = t.siblings('ul');    
        var parent = t.parent('li');
        var siblings = parent.siblings('li');
        var arrow_target = 'span.menu-main-parent';
        
        if (menu.hasClass('sub-menu')) { 
            var menu = t.siblings('ul.sub-menu'); 
        } else if(menu.hasClass('mega-menu')) {
            var menu = t.siblings('ul.mega-menu');
        }
        
        if (menu.hasClass('visible')) {
            setTimeout(function() { menu.removeClass('visible'); }, 10);    
            t.html(arrow_down);     
        } else {
            setTimeout(function() { menu.addClass('visible'); }, 10);
            t.html(arrow_up);
        }
            
        /*-------------------------------------*/
        /*  CLOSE MENUS
        /*-------------------------------------*/
            
        //Close sub menus
        parent.find('ul.visible').removeClass('visible');   
        
        //Close sub menus parents
        parent.siblings('li').children('ul').removeClass('visible');    
        
        //Close sub menus child parents 
        siblings.find('ul.visible').removeClass('visible'); 
        
        /*-------------------------------------*/
        /*  INSERT ARROW DOWN
        /*-------------------------------------*/   
        
        //Insert arrow down in sub menus
        parent.children('ul').find(arrow_target).html(arrow_down);
        
        //Insert arrow down in sub menus parents
        siblings.children(arrow_target).html(arrow_down);
        
        //Insert arrow down in sub menus child parents 
        siblings.find(arrow_target).html(arrow_down);
    }); 
    
    /*-----------------------------------------------------------------------------------*/
    /*  CLOSE BUTTON
    /*-----------------------------------------------------------------------------------*/ 
    $('ul.nav-menu div.sub-menu-close').on('click', function(e){
       e.preventDefault();
          
       var a = $(this).parent('ul');      
       a.removeClass('visible');
       a.siblings('span.menu-main-parent').html(arrow_down);
    }); 

    // Initiate venobox (lightbox feature used in portofilo)

    $(document).ready(function() {
      $('.venobox').venobox();
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  EFFECTS ON MENU TOGGLE
    /*-----------------------------------------------------------------------------------*/ 
    $('a.menu-toggle-button').on('click', function(e){
        e.preventDefault(); 
        var menu_height = $('.dec-menu ul').height();
        
        if ($(this).hasClass('menu-toggle-button-open')) {      
            $(this).removeClass('menu-toggle-button-open').addClass('menu-close');
            $('.dec-menu').animate({height:'0px'},{queue:false, duration:300}).addClass('menu-close-icon'); 
        } else {            
            $(this).removeClass('menu-close').addClass('menu-toggle-button-open');
            $('.dec-menu').animate({height:menu_height},{queue:false, duration:300}).removeClass('menu-close-icon');
        }
    }); 
    
    /*-----------------------------------------------------------------------------------*/
    /*  CLOSE MENUS ON RESIZE
    /*-----------------------------------------------------------------------------------*/ 
    var window_width = 0;
     
    $(window).on('load', function () {  
        window_width = $(window).width();
        $('.dec-menu').addClass( "menu-close-icon" );
    });
    
    $(window).resize( function(){    
        if(window_width !== $(window).width()){     
            $('.visible').removeClass('visible');   
            $('.menu-toggle-button').removeClass('menu-toggle-button-open').addClass( "menu-close" );   
            $('.dec-menu').css( "height", "0" ).addClass( "menu-close-icon" );      
        
            $('span.menu-main-parent').html( arrow_down );      
            window_width = $(window).width();   
        }
    }); 
    
 
    // collapse hidden  
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });  

     // FAQ Accordion JS
    $('.accordion').find('.accordion-title').on('click', function(){
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');       
    });

    // scrollTop init   
    
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    // Home Slider 
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        items:1,
        dots: false,
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout:5000,
        responsiveClass:true,
        smartSpeed:1000,
        navText: [
          '<i class="fa fa-long-arrow-left"></i>',
          '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
                
            },
            768:{
                items:1,
                nav:false,  
            },
            991:{
                items:1,
                nav:false,
            },
            1100:{
                items:1,
                nav:true,
            },
        }
    })

   
    $("#testimonial-slider").owlCarousel({
        dots:true,
        nav:false,
        items: 1,
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause: true,
        responsiveClass:true,
        smartSpeed:1000,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:1,
                nav:false,
            },
            1000:{
                items:2,
                nav:false,
            },
            1200:{
                items:2,
                nav:true,
            }
        }
    });

    // Service Slider

    $('.service-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass:true,
        smartSpeed:1000,
        navText: [
          "<i class='fa fa-left-arrow'></i>",
          "<i class='fa fa-right-arrow'></i>"
        ],
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })

})(jQuery);

