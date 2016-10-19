define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $ASP.functions.layoutReadyFunctions = [];
    $ASP.layoutReady = function(f){
        if(typeof f === 'function') {
            $ASP.functions.layoutReadyFunctions.push(f);
            if($ASP.automizyLayoutReady){
                f.apply($ASP, []);
            }
            return $ASP;
        }
        $ASP.runTheFunctions($ASP.functions.layoutReadyFunctions);
        $ASP.automizyLayoutReady = true;
        return $ASP;
    };

});