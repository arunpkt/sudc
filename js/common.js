        $(document).ready(function() {
            var width = $(this).width();
            var heightcalc = Math.round(($('.banner').outerHeight() - $('.text_slideshow').height()) / 2);
            $('.text_slideshow').css('top', heightcalc + 'px');

            $('.owl-carousel.trustees_carousel').owlCarousel({
                  autoPlay: 3000, //Set AutoPlay to 3 seconds
                  items : (width >= 468 ? 4 : 1),
                  itemsDesktop : [1199,3],
                  itemsDesktopSmall : [979,3]
            });
            $('.owl-carousel.peoplesays_carousel').owlCarousel({
                 autoPlay: 3000, //Set AutoPlay to 3 seconds
                  items : (width >= 468 ? 3 : 1),
                  itemsDesktop : [1199,3],
                  itemsDesktopSmall : [979,3]
            });
            
             $('.owl-carousel.whatuget_carousel').owlCarousel({
                 autoPlay: 3000, //Set AutoPlay to 3 seconds
                  items : 1,
                  itemsDesktop : [1199,3],
                  itemsDesktopSmall : [979,3]
            });
            
            $('.search-filter-in').hide();
            $('.sayaputhiran-search-filter a').click(function(e) {
                $('.search-filter-in').stop(true).slideToggle();
            });
			
            $(document).click(function(e) {
                if (!$(e.target).closest('.sayaputhiran-search-filter a, .search-filter-in').length) {
                    $('.search-filter-in').stop(true).slideUp();
                }
            });            
            

            $(window).resize(function() {
                var heightcalc = Math.round(($('.banner').height() - $('.text_slideshow').height()) / 2);
                $('.text_slideshow').css('top', heightcalc + 'px');

                var divHeight = $('.contribution').outerHeight();
                $('.whatuget').css('min-height', divHeight + 'px');
            });

//            backtotop script
            $(".upar").hide();
			
            $(function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 700) {
                        $('.upar').fadeIn();
                    } else {
                        $('.upar').fadeOut();
                    }
                });
                $('.upar').click(function() {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 1000);    
                    return false;
                });
            });
		//Sticky header
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 100) {
			   $('header').addClass('sticky_header');
			   $('.top_header').hide();
			}
			else {
			   $('header').removeClass('sticky_header');
				$('.top_header').show();
			}
        });
        
        var height = 0;
        
        if(width >= 468){
            $(".owl-item").each(function(){
              currentHeight = $(this).find('p').height(); 
              if(height < currentHeight){
                height = currentHeight;
              }
            });
            $(".peoplesays_carousel .owl-item").find("p:first").css("height",height);

            //Setting height for home page our history pods
            $(".our_mission_home").each(function(){
                currentHeight = $(this).height(); 
                if(height < currentHeight){
                  height = currentHeight;
                }
            });
            $(".our_mission_home").css("height",height+20);
            setTimeout(function(){
                var divHeight = $('.contribution').outerHeight();
                $('.whatuget').css('min-height', divHeight + 'px');
                $('.contribution').css('min-height', divHeight + 'px');
            },2000);
        }
            
        $(".popup-gallery div").mouseenter(function(){
          $(this).find('div.links').css("display","block");
          $(this).find('div.overlay').show();
            
        });
        $(".popup-gallery div").mouseleave(function(){
          $(this).find('div.links').css("display","none");
          $(this).find('div.overlay').hide();
        });
        });

		
//Gallery slider
function galleryViewerMagnific(){
  $(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				},
                zoom: {
                    enabled: true
                }
			}
		});
	});
}