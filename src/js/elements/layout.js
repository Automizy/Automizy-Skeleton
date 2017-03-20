define([
    "js/init/init"
], function () {
    $ASP.pluginsLoaded(function () {

        $ASP.$tmp = $('<div id="automizy-skeleton-project-tmp"></div>');

        $ASP.layoutReady();
        $ASP.ready();
    });
});