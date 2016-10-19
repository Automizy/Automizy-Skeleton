define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $ASP.functions.readyFunctions = [];
    $ASP.ready = function(f){
        if(typeof f === 'function') {
            $ASP.functions.readyFunctions.push(f);
            if($ASP.automizyReady){
                f.apply($ASP, []);
            }
            return $ASP;
        }
        $ASP.runTheFunctions($ASP.functions.readyFunctions);
        $ASP.automizyReady = true;
        return $ASP;
    };

});