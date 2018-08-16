define([
    "js/init/init"
], function () {
    $ASP.pluginsLoaded(function () {

        $ASP.modules.Example = function (obj) {
            var t = this;
            t.d = {
                $widget: $('<div id="automizy-skeleton-project-example"></div>'),
                $exampleTitle: $('<div id="automizy-skeleton-project-example-title"></div>'),

                exampleVariable:false,
                exampleBoxes:[]
            };

            t.d.$exampleTitle.appendTo(t.d.$widget);

            t.set(obj || {});

        };


        var p = $ASP.modules.Example.prototype;

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
            t.d.exampleVariable = false;
            t.removeAllExampleBox();
            return t;
        };


        p.exampleVariable = function (value) {
            var t = this;
            if(typeof value !== "undefined"){
                t.d.exampleVariable = value;
                t.d.$exampleTitle.html(t.d.exampleVariable);
                return t;
            }
            return t.d.exampleVariable;
        };
        p.exampleBoxes = function (boxes) {
            var t = this;
            if(typeof boxes !== "undefined") {
                t.removeAllExampleBox();
                boxes.forEach(function (box) {
                    t.addExampleBox(box);
                });
                return t;
            }
            return t.d.exampleBoxes;
        };
        p.addExampleBox = function (box) {
            var t = this;
            box.target = t.widget();
            t.d.exampleBoxes.push(new $ASP.modules.ExampleBox(box));
            return t;
        };
        p.removeAllExampleBox = function () {
            var t = this;
            t.d.exampleBoxes.forEach(function(box){
                box.remove();
            });
            t.d.exampleBoxes = [];
            return t;
        };


        p.set = function (obj) {
            var t = this;

            if (typeof obj.target !== 'undefined') {
                t.drawTo(obj.target);
            }
            if (typeof obj.exampleVariable !== 'undefined') {
                t.exampleVariable(obj.exampleVariable);
            }
            if (typeof obj.exampleBoxes !== 'undefined') {
                t.exampleBoxes(obj.exampleBoxes);
            }

            return t;
        };

    });

});
