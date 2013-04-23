;(function($) {
    'use strict';
    $.fn.serializeJSON = function() {
        var json = {};
        $.each(this.serializeArray(), function() {
            var key = this.name,
                val = this.value;
            if (val !== '' && val !== undefined) {
                if (key in json) {
                    //if (Object.prototype.toString.call(json[key]) === '[object Array]') {
                    if ($.isArray(json[key])) {
                        json[key].push(val);
                    } else {
                        json[key] = [json[key], val];
                    }
                } else {
                    json[key] = val;
                }
            }
        });
        return json;
    };
})(jQuery);
