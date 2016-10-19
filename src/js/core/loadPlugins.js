define([
    "js/core/core",
    "js/core/pluginLoader",
    "js/events/pluginsLoaded"
], function () {
    $ASP.loadPlugins = function () {
        (function () {
            if (typeof window.jQuery === 'undefined') {
                var script = document.createElement("SCRIPT");
                script.src = $ASP.config.dir + "/vendor/jquery/jquery.min.js";
                script.type = 'text/javascript';
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            var checkReady = function (callback) {
                if (typeof window.jQuery === 'function') {
                    callback(jQuery);
                } else {
                    window.setTimeout(function () {
                        checkReady(callback);
                    }, 100);
                }
            };

            checkReady(function ($) {
                $ASP.pluginLoader.plugins([
                    {
                        name:'fontAwesome',
                        skipCondition:(function () {
                            var span = document.createElement('span');
                            span.className = 'fa';
                            span.style.display = 'none';
                            document.body.insertBefore(span, document.body.firstChild);
                            if (window.getComputedStyle(span, null).getPropertyValue('font-family') === 'FontAwesome') {
                                document.body.removeChild(span);
                                return true;
                            }
                            document.body.removeChild(span);
                            return false;
                        })(),
                        css:$ASP.config.dir + "/vendor/fontawesome/css/font-awesome.min.css"
                    },
                    {
                        name:'automizyJs',
                        skipCondition:typeof AutomizyJs !== 'undefined',
                        css:$ASP.config.dir + "/vendor/automizy-js/automizy.css",
                        js:[
                            $ASP.config.dir + '/vendor/automizy-js/languages/en_US.js',
                            $ASP.config.dir + "/vendor/automizy-js/automizy.js"
                        ],
                        complete:function(){
                            $A.setTranslate(window.I18N || {});
                        }
                    },
                    {
                        name:'automizyJsApi',
                        skipCondition:typeof AutomizyJsApi !== 'undefined',
                        js:$ASP.config.dir + "/vendor/automizy-js-api/automizy.api.js"
                    }
                ]).run().complete(function(){
                    $ASP.pluginsLoaded();
                });

            });

        })();
    };
});