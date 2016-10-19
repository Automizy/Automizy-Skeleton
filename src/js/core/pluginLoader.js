define([
    "js/core/core"
], function () {
    var PluginLoader = function () {
        var t = this;
        t.d = {
            plugins: [],
            loadedPluginsCount: 0,
            allPluginsCount:0,
            completeFunctions: []
        };
    };

    var p = PluginLoader.prototype;


    p.addPlugin = function (plugin) {
        return this.addPlugins([plugin]);
    };

    p.plugins = p.addPlugins = function (plugins) {
        var t = this;
        if (typeof plugins !== 'undefined') {

            for (var i = 0; i < plugins.length; i++) {
                var plugin = plugins[i];
                plugin.skipCondition = plugin.skipCondition || false;
                plugin.complete = plugin.complete || function () {};
                plugin.css = plugin.css || [];
                plugin.js = plugin.js || [];

                if (typeof plugin.css === 'string') {
                    plugin.css = [plugin.css];
                }
                if (typeof plugin.js === 'string') {
                    plugin.js = [plugin.js];
                }
                t.d.plugins.push(plugin);
            }

            return t;
        }
        return t.d.plugins;
    };

    p.pluginThen = function(plugin) {
        var t = this;

        t.d.loadedPluginsCount++;
        plugin.complete.apply(this, [true]);
        console.log(t.d.loadedPluginsCount, t.d.allPluginsCount);
        if (t.d.loadedPluginsCount === t.d.allPluginsCount) {
            t.complete();
        }

        return t;
    };

    p.run = function () {
        var t = this;

        var hasActivePlugin = false;
        var noJsPlugins = [];

        for (var i = 0; i < t.d.plugins.length; i++) {
            var plugin = t.d.plugins[i];
            if (plugin.inited) {
                continue;
            }
            plugin.inited = true;

            if (!plugin.skipCondition) {
                hasActivePlugin = true;
                for (var j = 0; j < plugin.css.length; j++) {
                    var head = document.getElementsByTagName('head')[0];
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = plugin.css[j];
                    head.appendChild(link);
                }

                (function (plugin) {
                    var deferreds = [];

                    t.d.allPluginsCount++;
                    if (plugin.js.length <= 0) {
                        noJsPlugins.push(plugin);
                    } else {
                        for (var j = 0; j < plugin.js.length; j++) {
                            deferreds.push($.getScript(plugin.js[j]));
                        }
                        $.when.apply(null, deferreds).always(function(){
                            t.pluginThen(plugin);
                        });
                    }
                })(plugin);
            }else{
                plugin.complete.apply(this, [false]);
            }
        }

        for(var i = 0; i < noJsPlugins.length; i++){
            t.pluginThen(noJsPlugins[i]);
        }

        if (!hasActivePlugin) {
            t.complete();
        }

        return t;
    };
    p.complete = function (complete) {
        var t = this;

        if (typeof complete === 'function') {
            t.d.completeFunctions.push({
                inited: false,
                func: complete
            });
            return t;
        }

        for (var i = 0; i < t.d.completeFunctions.length; i++) {
            if (t.d.completeFunctions[i].inited) {
                continue;
            }
            t.d.completeFunctions[i].inited = true;
            t.d.completeFunctions[i].func.apply(t, []);
        }

        return t;
    };

    $ASP.pluginLoader = new PluginLoader();

});