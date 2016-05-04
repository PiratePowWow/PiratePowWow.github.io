$(function() {
    var contact = $('#contact');
    var projects = $('#projects');
    var projectsY = projects.offset().top;
    var isHidden = true;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeHidden = scrollTop < projectsY;
        if (shouldBeHidden && !isHidden) {
            contact.css({
            	visibility: 'hidden'
            });
            isHidden = true;
        }
        else if (!shouldBeHidden && isHidden)
        {
            contact.css({
                position: 'fixed',
                float: 'right',
                bottom: 0,
                right: 0,
                visibility: 'visible'
            });
            isHidden = false;
        }
    });
});
function scrollToElement(e, t, n) {
    t = typeof t != "undefined" ? t : 1e3;
    n = typeof n != "undefined" ? n : 0;
    element = $(e);
    offset = element.offset();
    offsetTop = offset.top + n;
    $("html, body").animate({
        scrollTop: offsetTop
    }, t)
}
$(document).ready(function() {
    $("a.toprojects").click(function() {
        scrollToElement("#projects")
    });
    $("a.toservices").click(function() {
        scrollToElement("#skills")
    });
    $("a.tocontact").click(function() {
        scrollToElement("#contactInfo")
    });
});