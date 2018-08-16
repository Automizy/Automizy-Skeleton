define([
    "js/init/init"
], function () {

    /*
        Similar to the $ASP.open()
    */
    $ASP.close = function (func) {
        if(typeof func !== 'undefined'){
            $ASP.closeFunction = func;
            return $ASP;
        }
        if($ASP.isClosed){
            return $ASP;
        }
        $ASP.isClosed = true;
        $ASP.widget().ahide();
        $ASP.closeFunction.apply($ASP, []);
        return $ASP;
    };

});