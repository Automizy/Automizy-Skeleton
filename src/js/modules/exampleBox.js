define([
    "js/init/init"
], function () {
    $ASP.pluginsLoaded(function () {

        $ASP.modules.ExampleBox = function (obj) {
            var t = this;
            t.d = {
                $widget: $('<div class="automizy-skeleton-project-example-box"></div>'),
                html:""
            };

            t.set(obj || {});

        };


        var p = $ASP.modules.ExampleBox.prototype;

        p.widget = function () {
            return this.d.$widget;
        };
        p.show = function () {
            this.d.$widget.ashow();
            return this
        };
        p.hide = function () {
            this.d.$widget.ahide();
            return this;
        };
        p.drawTo = function (target) {
            var t = this;
            target = target || $('body');
            if (typeof target.widget === 'function') {
                target = target.widget();
            }
            t.widget().appendTo(target);
            return t;
        };
        p.reset = function () {
            var t = this;
            t.d.html = "";
            return t;
        };
        p.remove = function () {
            var t = this;
            t.widget().remove();
            return t;
        };


        p.html = function (value) {
            var t = this;
            if(typeof value !== "undefined"){
                t.d.html = value;
                t.widget().html(t.d.html);
                return t;
            }
            return t.d.html;
        };


        p.set = function (obj) {
            var t = this;

            if (typeof obj.target !== 'undefined') {
                t.drawTo(obj.target);
            }
            if (typeof obj.html !== 'undefined') {
                t.html(obj.html);
            }

            return t;
        };

    });

});
