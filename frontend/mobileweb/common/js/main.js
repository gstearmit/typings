/**
 * Created by nktquan@gmail.com on 4/19/16.
 */

$(document).ready(function() {
    new WOW().init();
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('.search-box').slideUp(250);
            $('.page').addClass('scroll');
        } else {
            $('.search-box').slideDown(250);
            $('.page').removeClass('scroll');
        }
        lastScrollTop = st;
        $('.page.search .search-box').stop();
    });

    var tabCarousel = setInterval(function() {
        var tabs = $('.step-icon-box .nav-tabs > li'),
            active = tabs.filter('.active'),
            next = active.next('li'),
            toClick = next.length ? next.find('a') : tabs.eq(0).find('a');
        toClick.trigger('click');
    }, 3000);

});