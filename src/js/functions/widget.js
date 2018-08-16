define([
    "js/init/init"
], function () {

    /*
        If you are creating an element that you may use outside of the module, you want to create a function to get the element.
     */
    $ASP.widget = function () {
        return $ASP.$widget;
    };

});