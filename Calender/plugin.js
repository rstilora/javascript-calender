/* This plug-in Created By Rs Rathore 
   plugin created date 8/2/2017
   for Ways and Means Technology pvt. Ltd */

(function($) {
    jQuery.fn.first = function (options) {
        var settings = $.extend({
            text: "Ram Ram Ram",
            color : "#000",
            font : null,
            fontSize : null,
            fontStyle : null
        }, options);
       
    return this.each(function () {
        
        $(this).text(settings.text);

        if (settings.color) {
            $(this).css('color', settings.color);
        }
        if (settings.font) {
            $(this).css('font-family', settings.font);
        }
        if (settings.fontSize) {
            $(this).css('font-size', settings.fontSize);
        }
        if (settings.fontStyle) {
            $(this).css('font-style', settings.fontStyle);
        }
        

    });

    }

}(jQuery));