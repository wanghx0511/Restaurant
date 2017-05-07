var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var MainInfoUI = (function (_super) {
        __extends(MainInfoUI, _super);
        function MainInfoUI() {
            return _super.call(this) || this;
        }
        MainInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MainInfoUI.uiView);
        };
        return MainInfoUI;
    }(View));
    MainInfoUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1920, "skin": "comp/ui/MapBG01_1.jpg", "height": 1080 } }, { "type": "Image", "props": { "y": 30, "x": 36, "width": 174, "skin": "comp/ui/Icn84005.png", "height": 183 } }, { "type": "ProgressBar", "props": { "y": 113, "x": 220, "width": 127, "skin": "comp/ui/progress_time.png", "height": 24 } }, { "type": "Label", "props": { "y": 59, "x": 215, "width": 135, "text": "大魔王", "strokeColor": "#9f4342", "stroke": 3, "height": 46, "fontSize": 40, "color": "#f9f3f3", "bold": true } }, { "type": "Image", "props": { "y": 501, "x": 839, "width": 189, "var": "start", "skin": "comp/ui/2306700.png", "height": 179 } }] };
    ui.MainInfoUI = MainInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map