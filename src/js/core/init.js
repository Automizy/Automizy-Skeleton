define([
    "js/core/core",
    "js/core/loadPlugins"
], function () {
    $ASP.init = function () {
        if(typeof $ASP.automizyInited === 'undefined'){
            $ASP.automizyInited = false;
        }

        if(!$ASP.automizyInited){
            $ASP.automizyInited = true;
            $ASP.loadPlugins();
        }

        return $ASP;
    };
});