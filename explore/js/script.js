(function ($) {
    "use strict";

    var queryString = window.location.search;
    var queryObject = new Object();
    if(queryString){
        queryString = queryString.substring(1);
        var parameters = queryString.split('&');

        for (var i = 0; i < parameters.length; i++) {
            var element = parameters[i].split('=');

            var paramName = decodeURIComponent(element[0]);
            var paramValue = decodeURIComponent(element[1]);

            queryObject[paramName] = paramValue;
        }
    }

    if (queryObject.q && queryObject.q.length > 0) {
        document.title = queryObject.q+" - BDWebs.com";
    }

})(jQuery);
