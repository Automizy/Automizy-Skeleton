define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $ASP.functions.pluginsLoadedFunctions = [];
    $ASP.pluginsLoaded = function(f){
        if(typeof f === 'function'){
            $ASP.functions.pluginsLoadedFunctions.push(f);
            if($ASP.automizyPluginsLoaded){
                f.apply($ASP, []);
            }
            return $ASP;
        }
        $ASP.runTheFunctions($ASP.functions.pluginsLoadedFunctions, $ASP, []);
        $ASP.automizyPluginsLoaded = true;
        return $ASP;
    };

});