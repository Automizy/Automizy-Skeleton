define([
    "js/init/init"
], function () {

    /*
        Sometimes you have to use an open and a close function to show or hide the module. For example: full screen modules (Automation Editor, Email Editor, Import Wizard, etc...)
        With this formation you have been able to add a function that will be applying after the $ASP.open() function is calling.

        How you can set the function that will be run after the open function will be calling?:
        $ASP.open(function(){
            alert("The module opened");
        })

        How you can call the open function?:
        $ASP.open();
    */
    $ASP.open = function (func) {
        if(typeof func !== 'undefined'){
            $ASP.openFunction = func;
            return $ASP;
        }
        if(!$ASP.isClosed){
            return $ASP;
        }
        $ASP.isClosed = false;
        $ASP.widget().appendTo("body").ashow();
        $ASP.closeFunction.apply($ASP, []);
        return $ASP;
    };

});