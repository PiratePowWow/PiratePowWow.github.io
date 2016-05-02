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