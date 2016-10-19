define([
    "js/core/core",
    "js/events/pluginsLoaded",
    "js/events/layoutReady"
], function () {
    $ASP.pluginsLoaded(function () {

        $ASP.$tmp = $('<div id="automizy-skeleton-project-tmp"></div>');

        $ASP.layoutReady();
        $ASP.ready();
    });
});