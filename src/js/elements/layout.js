define([
    "js/init/init"
], function () {
    $ASP.pluginsLoaded(function () {

        /*
            This is a trash element, if you want to remove an element from the DOM, just append in to the $ASP.$tmp element:
            $ASP.$someElement.appendTo($ASP.$tmp);
        */
        $ASP.$tmp = $('<div id="automizy-skeleton-project-tmp"></div>');

        /*
            The main element of the module. If the module is a viewable module (not an SDK or similar), you can use the $ASP.$widget element as a container.
            $ASP.$someElement.appendTo($ASP.$widget);
        */
        $ASP.$widget = $('<div id="automizy-skeleton-project"></div>');

        /*
            Here all functions are calling that is already added to the layoutReady event.
            How you can add functions to the layoutReady event?:
            $ASP.layoutReady(function(){
                //do something
            })
        */
        $ASP.layoutReady();

        /*
            Here all functions are calling that is already added to the ready event.
            How you can add functions to the ready event?:
            $ASP.ready(function(){
                //do something
            })

            If you have any assync functions that is required to use the module, you want to call this function after the async functions completed:
            $AA.getSmartLists().done(function(){
                $ASP.ready();
            })
        */
        $ASP.ready();

    });
});