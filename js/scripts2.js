 var iso_code = 'NL';
 var geodata = '{"country":"Netherlands","country_iso_code":"NL","subdivisions":"North Holland","subdivisions_iso_code":"NH","city":"Amsterdam","postal":"1098","status":"success"}';
 var basic_url = '/';
 var static_url = '/static/';
 var post_country = '';
 var post_state = '';
 var post_billing_country = '';
 var post_billing_state = '';
 var post_payment_as_shipping = '';
 var confirmation_email = "";
 var IS_ORDER_PAGE = 0;
 var IS_CONFIRMATION_PAGE = 0;
 var DISABLE_SESSION_STORAGE = 0;


 $(document).ready(function () {

   try {
     $('#form-contact-us').validate({

       submitHandler: function (form) {
         send_contact_us($('#form-contact-us'), $('input[name="lang_contact_us"]').val());
       },

       invalidHandler: function (event, validator) {
         logging($('#form-contact-us'));
         show_exit = true;
         $.each($('#form-contact-us').children('div'), function (index, elem) {
           $(elem).removeClass('has-error').addClass('accept');
           $(elem).find('input').removeClass('error');
         });
         var errors = validator.numberOfInvalids();
         if (errors) {
           $('html, body').animate({
             scrollTop: $('#form-contact-us').offset().top
           }, 1000);
         } else {
           show_exit = false;
         }
       },

       errorPlacement: function (error, element) {

         if ($(element).hasClass('error')) {
           $(element).closest('div').addClass('has-error').removeClass('accept');
           $(element).addClass('error')
         } else {
           $(element).closest('div').removeClass('has-error').addClass('accept');
           $(element).removeClass('error')
         }
       },

       success: function (label) {},

       rules: {
         contactName: {
           required: true,
         },
         contactEmail: {
           required: true,
           email: true
         },
         contactPhone: {
           required: true,
           minlength: 10,
           maxlength: 20
         },
         contactMsgTopic: {
           checkMsgTopic: 'default'
         },
         contactMessage: 'required',
         captcha: "required"
       }
     });

     $.validator.addMethod('checkMsgTopic', function (value) {
       return value != 'Message Topic';
     });
   } catch (e) {

   }
 });

 /*$(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })*/
 $(document).ready(function () {
   $(".special").delay(3000).slideDown("slow", function () {});
   $(".icon-close").on('click', function () {
     $(".special").slideUp();
   })
 });

 jQuery(window).on('scroll', function () {
   jQuery("[autofocus]").blur();
 });

 var error_scroll = false;
 var order_form_selector = '#form1';

 $(document).ready(function () {
   try {

     $(order_form_selector).submit(function () {
       show_exit = false;
     });

     $(order_form_selector).validate({

       submitHandler: function (form) {
         show_exit = false;

         $('.popup-loading-wrapper').show();
         setTimeout(function () {
           form.submit();
         }, 2000);

       },
       invalidHandler: function (event, validator) {

         error_scroll = true;
         logging($(order_form_selector));
         show_exit = true;
         var errors = validator.numberOfInvalids();
         if (errors) {

           $.each($(order_form_selector).find('.form-holder'), function (index, elem) {
             $(elem).removeClass('has-error').addClass('accept');
             $(elem).find('input').removeClass('error');
           });

         } else {
           show_exit = false;
         }
       },
       errorPlacement: function (error, element) {

         if ($(element).hasClass('error')) {
           $(element).closest('div[class^="form-holder"]').addClass('has-error').removeClass('accept');
           $(element).addClass('error');
           if (error_scroll) {
             $('html, body').animate({
               scrollTop: $(element).offset().top - 90
             }, 500);
             error_scroll = false;
           }
         } else {
           $(element).closest('div[class^="form-holder"]').removeClass('has-error').addClass('accept');
           $(element).removeClass('error');
         }
       },
       success: function (label) {},
       rules: {
         first_name: "required",
         last_name: "required",
         address1: "required",
         city: "required",
         country: "required",
         state: "required",
         zip_code: "required",
         phone: {
           required: true,
           minlength: 10,
           maxlength: 20
         },
         email: {
           required: true
         }
       }
     });

   } catch (e) {

   }
 });

 // end order bar
 // jQuery(function($){
 // 	$('.special').delay(2000).slideDown(300);
 // });
 // end order bar

 // cvv image
 // jQuery(function($){
 // 	$('.cvv-link').click(function(){
 // 		$('.cvv-image').slideToggle();
 // 	});
 // });
 // end cvv image

 // anchor
 jQuery(function ($) {
   $('a[href^="#"]').click(function (e) {
     var target = $(this).attr('href');
     $('html, body').animate({
       scrollTop: $(target).offset().top
     }, 1000);
     return false;
   });
 });
 // end anchor
 // anchor
 // jQuery(function($){
 // 	$('.ever-popup-btn').click(function(e){
 // 		e.preventDefault();
 // 		return false;
 // 	});
 // });
 // end anchor

 // popup
 // jQuery(function($){
 // 	var OpenPopupLink = $('a.open-popup-link');
 // 	var ClosePopupLink = $('a.close-popup-link');
 // 	var PopupWrapper = $('.popup-wrapper');
 // 	OpenPopupLink.click(function() {
 // 		var clickId = this.id;
 // 		$('#popup-' + clickId).fadeIn(300);
 // 		PopupWrapper.fadeIn(300);
 // 		$('body').css('overflow','hidden').css('height','100%');
 // 	});
 // 	ClosePopupLink.click(function() {
 // 		$(this).parents('.popup').fadeOut(300);
 // 		PopupWrapper.fadeOut(300);
 // 		$('body').css('overflow','auto').css('height','auto');
 // 	});
 // 	$(document).keydown(function(eventObject) {
 // 		if ($('[id^="popup-"]').is(":visible")){
 // 			if (eventObject.which == '27') {
 // 				$('[id^="popup-"]').fadeOut(300);
 // 				PopupWrapper.fadeOut(300);
 // 				$('body').css('overflow','auto').css('height','auto');
 // 			}
 // 		}
 // 	});
 // });
 // end popup

 //date
 // jQuery(function($){
 //     var mydate = new Date();
 //     var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 //     $('.date-container').text(" " + montharray[mydate.getMonth()] + " "
 //         + mydate.getDate() + ", " + mydate.getFullYear() );
 // });
 //date end


 // $('.close-massage').click(function(){
 // 	$('.fix-massage').fadeOut();
 // 	$('.ev-footer').addClass('massage-padding');
 // });
 // function addMargin (){
 // 	let header = document.querySelector('.fix-massage');
 // 	let height = header.offsetHeight;
 // 	let nav = document.querySelector('.navbar');
 // 	nav.style.marginTop = `${height}px`;
 // }
 // addMargin();
 // window.addEventListener("resize", addMargin);