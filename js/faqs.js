// faqs.js

/*-----------------------------------------------------------------------------*/
/* Ben Code */

//Show and hide answer when FAQ question clicked
 $(document).ready(function() {
    $('.faq_question').click(function() {
        //If answer is open, hide
        if ($(this).parent().is('.open')){
            $(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},250);
            $(this).closest('.faq').removeClass('open');
        }
        //If answer is closed, show
        else{
            var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
            $(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},250);
            $(this).closest('.faq').addClass('open');
        }
    });
});
/* Ben Code END */
/*-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------*/
/* Joseph Code */

/* Joseph Code END */
/*-----------------------------------------------------------------------------*/
