(function($) {
    jQuery.fn.hoverBoard = function(options) {

        var strValue = $(this).text();
        var parseIt = strValue.split(' ');
        var duration = 200;
        this.empty();
        for (i = 0; i < parseIt.length; i++) {

            $(this).append("<span class='hshift'>" + parseIt[i] + "</span> ");
        }
    };
})(jQuery);

$('.hoverBoard').hoverBoard();​