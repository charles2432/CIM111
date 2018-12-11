/* ===========================================================
 * jquery-tiltedpage-scroll.js v1.2.1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create a beautiful 3D tilted effect on scroll
 * with Tilted Page Scroll plugin
 *
 * https://github.com/peachananr/tiltedpage-scroll
 *
 * License: GPL v3
 *
 * ========================================================== */

!function($){

  var defaults = {
    sectionContainer: "> section",
    angle: 50,
    opacity: true,
    scale: true,
    outAnimation: true
	};


  $.fn.tiltedpage_scroll = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this);

    el.find(settings.sectionContainer).addClass("tps-section");

    el.find('.tps-section').each(function(){
      var el2 = $(this);
      el2.wrapInner("<div class='tps-wrapper'></div>");
    });

    function isElementInViewport (el3) {
      var docViewTop = $(window).scrollTop(),
          docViewBottom = docViewTop + $(window).height(),
          elemTop = el3.offset().top,
          elemBottom = elemTop + el3.outerHeight(true);

      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) );
    }

    function elementVisibilityMayChange (el4) {

      if ( isElementInViewport(el4) ) {
        el4.addClass("tps-inview")
      } else {
        el4.removeClass("tps-inview")
      }
    }



    $(window).on('DOMContentLoaded load resize scroll', function() {
      el.find(settings.sectionContainer).each(function(){
        elementVisibilityMayChange($(this));
      });


      el.find('.tps-section.tps-inview > .tps-wrapper').each(function(index){
        var el2 = $(this),
            opacity = 0,
            st = $(window).scrollTop(),
            deg = ((el2.parent().offset().top - el2.parent().height()) - st) / $(window).height() * (settings.angle * 3),
            scale = ((st + $(window).height() - (el2.parent().offset().top - el2.parent().height())) / ($(window).height() )) ;
            if(scale > 1) scale = 1;
            if(deg < 0) deg = 0;

        if(st > el2.parent().offset().top) {

          if (settings.outAnimation == false) {
            opacity = 1;
            if(opacity < 0) opacity = 0;
            if (deg < 0) deg = 0;
          } else {
            opacity = ((el2.parent().offset().top + ($(window).height() * 1.2) - st)) / ($(window).height());
            opacity = Math.pow(opacity,25);
            deg = (el2.parent().offset().top - st) / $(window).height() * (settings.angle * 3);
            scale = ((st + $(window).height() - el2.parent().offset().top ) / ($(window).height() )) ;
          }


        } else {
        	if(index != 0) {
          	var opacity = ((st + $(window).height() - el2.parent().offset().top + (el2.height()/2))/ $(window).height());

        		if(opacity > 1) { opacity = 1; }

        	} else {
        		opacity = 1;
            deg = 0;
            scale = 1;
        	}
        }

        if (settings.scale == false) scale = 1;
        if (settings.angle == false) deg = 0;
        if (settings.opacity == false) opacity = 1;

        el2.css({
          'transform': 'rotateX(' + deg + 'deg) scale('+scale+', '+scale+')',
          opacity: opacity
        });
      });
    });

  }




!function(e){var t={sectionContainer:"> section",angle:50,opacity:true,scale:true,outAnimation:true};e.fn.tiltedpage_scroll=function(n){function s(t){var n=e(window).scrollTop(),r=n+e(window).height(),i=t.offset().top,s=i+t.outerHeight(true);return s>=n&&i<=r}function o(e){if(s(e)){e.addClass("tps-inview")}else{e.removeClass("tps-inview")}}var r=e.extend({},t,n),i=e(this);i.find(r.sectionContainer).addClass("tps-section");i.find(".tps-section").each(function(){var t=e(this);t.wrapInner("<div class='tps-wrapper'></div>")});e(window).on("DOMContentLoaded load resize scroll",function(){i.find(r.sectionContainer).each(function(){o(e(this))});i.find(".tps-section.tps-inview > .tps-wrapper").each(function(t){var n=e(this),i=0,s=e(window).scrollTop(),o=(n.parent().offset().top-n.parent().height()-s)/e(window).height()*r.angle*3,u=(s+e(window).height()-(n.parent().offset().top-n.parent().height()))/e(window).height();if(u>1)u=1;if(o<0)o=0;if(s>n.parent().offset().top){if(r.outAnimation==false){i=1;if(i<0)i=0;if(o<0)o=0}else{i=(n.parent().offset().top+e(window).height()*1.2-s)/e(window).height();i=Math.pow(i,25);o=(n.parent().offset().top-s)/e(window).height()*r.angle*3;u=(s+e(window).height()-n.parent().offset().top)/e(window).height()}}else{if(t!=0){var i=(s+e(window).height()-n.parent().offset().top+n.height()/2)/e(window).height();if(i>1){i=1}}else{i=1;o=0;u=1}}if(r.scale==false)u=1;if(r.angle==false)o=0;if(r.opacity==false)i=1;n.css({transform:"rotateX("+o+"deg) scale("+u+", "+u+")",opacity:i})})})}}(window.jQuery)






$(".main").tiltedpage_scroll({
   sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
   angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
   opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
   scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
   outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
 });
