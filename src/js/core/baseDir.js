define([
    "js/core/core"
], function () {
    $ASP.baseDir = function(value){
        if (typeof value !== 'undefined') {
            $ASP.config.dir = value;
            return $ASP;
        }
        return $ASP.config.dir;
    };
});