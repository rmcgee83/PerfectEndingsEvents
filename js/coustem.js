
"use strict";
/************************************************
------- General 
*************************************************/
// modal middle 
function centerModals($element) {
	var $modals;
	if ($element.length) {
		$modals = $element;
	} else {
		$modals = $('.modal-vcenter:visible');
	}
	$modals.each( function(i) {
		var $clone = $(this).clone().css('display', 'block').appendTo('body');
		var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
		top = top > 0 ? top : 0;
		$clone.remove();
		$(this).find('.modal-content').css("margin-top", top);
	});
}
$('.modal-vcenter').on('show.bs.modal', function(e) {
	centerModals($(this));
});
$(window).on('resize', centerModals);
if ($("#datepicker1").length) {
	$('#datepicker1').datepicker();
}
if ($("#datepicker2").length) {
	$('#datepicker2').datepicker();
}
if ($("#datepicker3").length) {
	$('#datepicker3').datepicker();
}
$.validate({
		'scrollToTopOnError' : false
});

// header top fiexd 
$(window).on('scroll', function(){
	if ($(window).width() > 767)
	{
		if($(window).scrollTop() > 0)
		{
			$("#header").addClass("fiexd");
		}
		else
		{
			$("#header").removeClass("fiexd");
		}
	}
	
});
$(function($) {
	if ($(window).width() > 767)
	{
		if($(window).scrollTop() > 0)
		{
			$("#header").addClass("fiexd");
		}
		else
		{
			$("#header").removeClass("fiexd");
		}
	}
	// courent year get
	var full_Date = new Date();
	var full_Year = full_Date.getFullYear();
	$(".footer-bottom p span").text(full_Year);
});

// search box 
$(".navbar-collapse .search-box .search-icon").on('click', function(event){
	$(".search-view").slideDown();	
	event.stopPropagation();
});
$(".search-view").on('click',function(event){
	event.stopPropagation();
});
$("body").on('click',function(){
	if ($(window).width()> 767)
	{
		$(".search-view").slideUp();
	}
});
// Sub Links 
$(".sub-links a").on('click',function(){
	$(this).next("ul").slideToggle();	
});

// login popup

$(".signUp-link a").on('click',function(){
	$(".login-popup .close-icon").click();
	setTimeout(function(){
	$(".registration a").click();
	},500);
});


// radio btn and check box js 
function setupLabel() {
	if ($('.label_check input').length) {
		$('.label_check').each(function(){ 
			$(this).removeClass('c_on');
		});
		$('.label_check input:checked').each(function(){ 
			$(this).parent('label').addClass('c_on');
		});                
	};
	if ($('.label_radio input').length) {
		$('.label_radio').each(function(){ 
			$(this).removeClass('r_on');
		});
		$('.label_radio input:checked').each(function(){ 
			$(this).parent('label').addClass('r_on');
		});
	};
};
$(function($) {
	$('.label_check, .label_radio').on('click',function(){
		setupLabel();
	});
	setupLabel(); 
});

/************************************************
------- Home Page 
*************************************************/

// main banner
if ($("#mainBnner").length) {
	var banner = $("#mainBnner")
	banner.owlCarousel({
		slideSpeed : 600,
		paginationSpeed : 400,
		items: 1,
		autoplay: true,
		navText: [ '<span class="icon icon-arrow-left"></span>', '<span class="icon icon-arrow-right"></span>' ],
	});
	setTimeout(function(){
		var top_value = $("#mainBnner").height();
		$(".banner-nav .prev").css("top",top_value / 2 + "px");
		$(".banner-nav .next").css("top",top_value / 2 + "px");
	},500);
	$(window).on('resize',function() {
		setTimeout(function(){
			var top_value = $("#mainBnner").height();
			$(".banner-nav .prev").css("top",top_value / 2 + "px");
			$(".banner-nav .next").css("top",top_value / 2 + "px");
		},500);
	});
	$(".next").on('click',function(){
		banner.trigger('next.owl.carousel');
	});
	$(".prev").on('click', function(){
		banner.trigger('prev.owl.carousel');
	});
}
// Friend Slider
if ($("#friend_slider").length) {
	$("#friend_slider").owlCarousel({
		slideSpeed : 600,
		paginationSpeed : 400,
		items: 1,
		navText: [ '<span class="icon icon-arrow-left"></span>', '<span class="icon icon-arrow-right"></span>' ],
	});
}
// Event Slider
if ($(".event-slider").length) {
	$(".event-slider").owlCarousel({
		navText: [ '<span class="icon icon-arrow-left"></span>', '<span class="icon icon-arrow-right"></span>' ],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			991:{
				items:3
			}
		}
	});
}
// Sponsor Slider 
if ($(".sponsor-slider").length) {
	$(".sponsor-slider").owlCarousel({
		navText: [ '<span class="icon icon-arrow-left"></span>', '<span class="icon icon-arrow-right"></span>' ],
		responsive:{
			0:{
				items:1
			},
			479:{
				items:2
			},
			991:{
				items:3
			},
			1200:{
				items:4
			}
		}
	 });
}

/************************************************
------- About Us 
*************************************************/
if ($(".ourImg").length) {
	var imgPath = $(".ourImg img").attr("src");
	var ImgName = imgPath.split("/")[2];
	$(".ourImg").css({"background":"url('images/about-us/"+ ImgName +"')no-repeat center top"});
}

/************************************************
------- Faq
*************************************************/

$(".faq-slide .backTo-top a").on('click',function(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

/************************************************
------- Career
*************************************************/
if ($(".job-viewBox").length) {
	$('.job-viewBox').slimScroll({
	  height: 'auto'
	});
}

/************************************************
------- Booking Payment
*************************************************/

// payment detail tab js start
$(".payment-opction ul li a").each(function() {
	 $(this).on('click',function(){
		var open_id = $(this).attr("id");
		if($("."+ open_id + "-info").is(":visible"))
		{
			
		}
		else
		{
			$(".payment-opction ul li").removeClass("active");
			$(this).parents("li").addClass("active");
			$(".payment-detail .payment-type").slideUp();
			$("."+ open_id + "-info").slideDown();	
		}
	});    
});
// seclet box call 
$("#month_select").selectbox();
$("#month_select2").selectbox();
$("#year_select").selectbox();
$("#year_select2").selectbox();

/************************************************
------- Search Result
*************************************************/
// venues View
$(".venues-slide .btn.gray").on('click',function(){
	if($(this).parent(".button").parent(".text").next(".amenities-view").is(":visible"))
	{
		$(this).children(".icon").addClass("icon-arrow-down");
		$(this).children(".icon").removeClass("icon-arrow-up");
		$(this).parent(".button").parent(".text").next(".amenities-view").slideUp();
	}
	else
	{
		$(this).children(".icon").addClass("icon-arrow-up");
		$(this).children(".icon").removeClass("icon-arrow-down");
		$(this).parent(".button").parent(".text").next(".amenities-view").slideDown();

	}
});
$("#setUp_select").selectbox();

// Search Bar Fiexd 
$(window).on('scroll', function(){
	if($(window).scrollTop() > 30)	
	{
		$(".searchFormTop").addClass("fiexd");
	}
	else
	{
		$(".searchFormTop").removeClass("fiexd");
	}
});

/************************************************
------- Search Details
*************************************************/

$(".price-table .label_radio").on('click',function(){
	if($(this).parent("td").parent("tr").hasClass("active"))
	{
	}
	else
	{
		$(".price-table tr").removeClass("active");
		$(this).parent("td").parent("tr").addClass("active");
	}
});

$(".seating-popup .facility-box").on('click',function(){
	$(".seating-popup .facility-box").removeClass("active");
	$(this).addClass("active");
});
// Meal tabe menu js start
$(".meal-tab ul li a").each(function() {
    $(this).on('click',function(){
		var open_id = $(this).attr("id");
		if($("."+ open_id + "-view").is(":visible"))
		{
			
		}
		else
		{
			$(".meal-tab ul li").removeClass("active");
			$(this).parents("li").addClass("active");
			$(".meal-view .meal-details").slideUp();
			$("."+ open_id + "-view").slideDown();	
		}
	});
});
// Meal tabe menu js end
$(".select-btn a").on('click',function(){
	 var text_view = $(".facility-view .facility-box.active").children(".inner-box").children(".name").text();
	 $(".select-seating .select-value").text(text_view);
	 $('.close-icon').click();	
});
$(".booking-btnTop").on('click',function(){
	var body_scrollV = $(".booking-formMain").offset().top;	
	if($(window).width() > 767 )
	{
		body_scrollV = body_scrollV - $("#header").height() - $(".fiexd-nav").height()
	}
	else
	{
		body_scrollV = body_scrollV ;
	}
	$("html, body").animate({ scrollTop: body_scrollV + "px" }, "slow");
});

/************************************************
------- Register
*************************************************/

$("#country_select").selectbox();
$("#services_select").selectbox();

/************************************************
------- My Account
*************************************************/

$(".account-tab ul li a").each(function() {
    $(this).on('click',function(){
		var open_id = $(this).attr("id");
		if($("."+ open_id + "-con").is(":visible"))
		{
			
		}
		else
		{
			$(".account-tab ul li").removeClass("active");
			$(this).parents("li").addClass("active");
			$(".my-account .tab-content").slideUp();
			$("."+ open_id + "-con").slideDown();	
		}
	});
});
