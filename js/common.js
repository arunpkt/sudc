$(document).ready(function() {
    var width = $(this).width();
    var heightcalc = Math.round(($('.banner').outerHeight() - $('.text_slideshow').height()) / 2);
    $('.text_slideshow').css('top', heightcalc + 'px');

    //backtotop script
    $(".upar").hide();
    var numCol = 6;

    var width = $(this).width();
    if(width <= 767) {
        numCol = 1;
    } else if(width > 767 && width <= 991 ) {
        numCol = 2;       
    } else {
        numCol = 6; 
    }

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
            $('.show_mobile').hide(); 
            $('.hide_mobile').hide();
        }
        else {
            $('header').removeClass('sticky_header');
            if(width < 768){
                $('.show_mobile').show(); 
            } else {
                $('.hide_mobile').show();
            }
        }
    });
    //modal
    $('#loginModal').on('show.bs.modal', function () {	
        $('#signUpModal').modal('hide');
    });
    $('#signUpModal').on('show.bs.modal', function () {
        $('#loginModal').modal('hide');
    });
    $('#loginModal').on('shown.bs.modal', function () {	
       $('body').addClass("modal-open").css("padding-right","17px"); 
    });
    $('#signUpModal').on('shown.bs.modal', function () {
        $('body').addClass("modal-open").css("padding-right","17px");
    });
     $('#loginModal').on('hide.bs.modal', function () {	
        $('body').removeClass("modal-open").css("padding-right","0");
    });
    $('#signUpModal').on('hide.bs.modal', function () {
        $('body').removeClass("modal-open").css("padding-right","0");
    });

    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });

});
//Toggle search terms
function toggle(id){
    $("#" + id).toggle();
}
function scrollToActiveSubmenu() {
    var width = $(this).width();
    if(width <= 776) {
        $('.submenu ul.nav').animate({scrollLeft: $('.submenu li.active').position().left}, 500);  
    }
}
function setHightForBusiness() {
    $(document).ready(function(){
        var width = $(this).width();
        if(width > 750 ) {
            var box_white = $(".box_white").innerHeight(); 
            var box_grey = $(".box_grey").innerHeight(); 
            var whiteHei = parseInt(box_white); 
            var greyHei = parseInt(box_grey); 
            if(whiteHei < greyHei) {
                $(".box_white").css("height", greyHei);
                $(".box_grey").css("height", greyHei);
            } else {
                $(".box_white").css("height", whiteHei);
                $(".box_grey").css("height", whiteHei);
            }
        }
    });
}

//Forgot password
function openForgotPassword() {
    $("#forgetModel").show();
    $("#loginModel").hide();
}
function openLogin() {
    $("#forgetModel").hide();
    $("#loginModel").show();
}
//Function to load images for Ipad 
function loadIpadImages() {
    $('img.ipad').each(function(i, element) {
        var width = $(this).width();
        if(width > 767 && width <= 991 ) {
            $(this).attr("src", $(this).attr("data-tablet-src"))
        }
    });
} 
//Open filetr
function openFilter() {
    $("#accordionExample").show();
}
if (typeof jQuery === "undefined") {
    throw new Error("jQuery required");
}

+(function($) {
    "use strict";

    // SEARCHBAR CLASS DEFINITION
    // =========================

    var backdrop = ".searchbar-backdrop";
    var toggle = '[data-toggle="searchbar"]';
    var Searchbar = function(element) {
        $(element).on("click.mr.searchbar", this.toggle);
    };

    Searchbar.VERSION = "1.0.0";

    Searchbar.prototype.toggle = function(e) {
        var $this = $(this);

        if ($this.is(".disabled, :disabled")) return;

        var $parent = getParent($this);
        var isActive =
            $parent.hasClass("open") || (typeof isXS == "function" && isXS());

        if (!isActive) {
            clearMenus();
            if (
                "ontouchstart" in document.documentElement &&
                !$parent.closest(".navbar-nav").length
            ) {
                // if mobile we use a backdrop because click events don't delegate
                $('<div class="searchbar-backdrop"/>')
                    .insertAfter($(this))
                    .on("click", clearMenus);
            }

            var relatedTarget = { relatedTarget: this };
            $parent.trigger((e = $.Event("show.mr.searchbar", relatedTarget)));

            if (e.isDefaultPrevented()) return;
            e.preventDefault();

            $parent.find("input").trigger("focus");

            $parent.toggleClass("open").trigger("shown.mr.searchbar", relatedTarget);

            return false;
        }
    };

    function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function() {
            var $parent = getParent($(this));
            var relatedTarget = { relatedTarget: this };
            if (!$parent.hasClass("open")) return;
            $parent.trigger((e = $.Event("hide.mr.searchbar", relatedTarget)));
            if (e.isDefaultPrevented()) return;
            $parent.removeClass("open").trigger("hidden.mr.searchbar", relatedTarget);
        });
    }

    function getParent($this) {
        var selector = $this.attr("data-target");

        if (!selector) {
            return $this.parents("form");
        }

        var $parent = selector && $(selector);

        return $parent && $parent.length ? $parent : $this.parent();
    }

    // SEARCHBAR PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("mr.searchbar");

            if (!data) $this.data("mr.searchbar", (data = new Searchbar(this)));
            if (typeof option == "string") data[option].call($this);
        });
    }

    var old = $.fn.searchbar;

    $.fn.searchbar = Plugin;
    $.fn.searchbar.Constructor = Searchbar;

    // SEARCHBAR NO CONFLICT
    // ====================

    $.fn.searchbar.noConflict = function() {
        $.fn.searchbar = old;
        return this;
    };

    // APPLY TO STANDARD SEARCHBAR ELEMENTS
    // ===================================

    $(document)
        .on("click.mr.searchbar.data-api", clearMenus)
        .on("click.mr.searchbar.data-api", ".searchbar", function(e) {
        e.stopPropagation();
    })
    //.on('focus.mr.searchbar.data-api', toggle, Searchbar.prototype.toggle) // this causes the focus event to trigger twice
        .on("click.mr.searchbar.data-api", toggle, Searchbar.prototype.toggle);
})(jQuery);


