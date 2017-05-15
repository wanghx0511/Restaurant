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
    MainInfoUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 30, "x": 36, "width": 174, "skin": "ui/Icn84005.png", "height": 183 } }, { "type": "ProgressBar", "props": { "y": 113, "x": 220, "width": 127, "skin": "ui/progress_time.png", "height": 24 } }, { "type": "Label", "props": { "y": 59, "x": 215, "width": 135, "text": "大魔王", "strokeColor": "#9f4342", "stroke": 3, "height": 46, "fontSize": 40, "color": "#f9f3f3", "bold": true } }, { "type": "Image", "props": { "y": 501, "x": 839, "width": 189, "var": "start", "skin": "ui/2306700.png", "height": 179 } }] };
    ui.MainInfoUI = MainInfoUI;
})(ui || (ui = {}));
(function (ui) {
    var PreUpgradeInfoUI = (function (_super) {
        __extends(PreUpgradeInfoUI, _super);
        function PreUpgradeInfoUI() {
            return _super.call(this) || this;
        }
        PreUpgradeInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PreUpgradeInfoUI.uiView);
        };
        return PreUpgradeInfoUI;
    }(View));
    PreUpgradeInfoUI.uiView = { "type": "View", "props": { "width": 300, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 71, "x": 76, "skin": "ui/shadow.png" } }, { "type": "Image", "props": { "y": 100, "x": 85, "skin": "ui/point.png" } }, { "type": "Image", "props": { "y": 100, "x": 135, "skin": "ui/point.png" } }, { "type": "Image", "props": { "y": 100, "x": 185, "skin": "ui/point.png" } }] };
    ui.PreUpgradeInfoUI = PreUpgradeInfoUI;
})(ui || (ui = {}));
(function (ui) {
    var StageOneInfoUI = (function (_super) {
        __extends(StageOneInfoUI, _super);
        function StageOneInfoUI() {
            return _super.call(this) || this;
        }
        StageOneInfoUI.prototype.createChildren = function () {
            View.regComponent("Trash", Trash);
            _super.prototype.createChildren.call(this);
            this.createView(ui.StageOneInfoUI.uiView);
        };
        return StageOneInfoUI;
    }(View));
    StageOneInfoUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 490.99999999999994, "x": -268.00000000000006, "skin": "stage/caozuotai.png" } }, { "type": "Sprite", "props": { "y": 177, "x": 320, "width": 1182.9999999999998, "name": "Furniture", "height": 321 }, "child": [{ "type": "Image", "props": { "y": 120.99999999999999, "x": -83.00000000000001, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 120.99999999999999, "x": 188.00000000000003, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 783.0000000000001, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 1035.9999999999998, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 280, "width": 192, "skin": "ui/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 629.9999999999998, "width": 192, "skin": "ui/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 132, "x": 9.000000000000043, "width": 227, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }, { "type": "Image", "props": { "y": 112, "x": 430, "width": 275, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 252 } }, { "type": "Image", "props": { "y": 135, "x": 865, "width": 227, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }] }, { "type": "Sprite", "props": { "y": 821, "x": 1310, "name": "kitchenwareSn2_1" }, "child": [{ "type": "Image", "props": { "skin": "stage/xiaolongxiaguodi.png" } }] }, { "type": "Sprite", "props": { "y": 771, "x": 1456, "name": "kitchenwareSn1_1" }, "child": [{ "type": "Image", "props": { "y": -0.9999999999997726, "skin": "stage/kaolu.png" } }] }, { "type": "Sprite", "props": { "y": 751, "x": 1624, "name": "kitchenwareSn5_1" }, "child": [{ "type": "Image", "props": { "skin": "stage/baowenlu.png" } }] }, { "type": "Sprite", "props": { "y": 864, "x": 236, "var": "trash", "runtime": "Trash" }, "child": [{ "type": "Image", "props": { "skin": "stage/lajitong.png" } }] }, { "type": "Sprite", "props": { "y": 584, "x": 1076, "name": "itemSn4" }, "child": [{ "type": "Image", "props": { "skin": "stage/xiangcai.png" } }] }, { "type": "Sprite", "props": { "y": 775, "x": 1088, "name": "itemSn2" }, "child": [{ "type": "Image", "props": { "skin": "stage/huasheng.png" } }] }, { "type": "Sprite", "props": { "y": 673, "x": 1075, "name": "itemSn3" }, "child": [{ "type": "Image", "props": { "skin": "stage/maodou.png" } }] }, { "type": "Sprite", "props": { "y": 725, "x": 681, "name": "kitchenwareSn10_1" }, "child": [{ "type": "Image", "props": { "width": 188, "skin": "ui/suo.png", "height": 88 } }] }, { "type": "Sprite", "props": { "y": 632, "x": 713, "name": "kitchenwareSn10_2" }, "child": [{ "type": "Image", "props": { "width": 166, "skin": "ui/suo.png", "height": 88 } }] }, { "type": "Sprite", "props": { "y": 576, "x": 744, "name": "kitchenwareSn10_3" }, "child": [{ "type": "Image", "props": { "x": -0.9999999999997726, "width": 141, "skin": "ui/suo.png", "height": 58 } }] }, { "type": "Sprite", "props": { "y": 727, "x": 874, "name": "kitchenwareSn9_1" }, "child": [{ "type": "Image", "props": { "x": -1.1368683772161603e-13, "width": 155, "skin": "ui/suo.png", "height": 86 } }] }, { "type": "Sprite", "props": { "y": 638, "x": 878, "name": "kitchenwareSn9_2" }, "child": [{ "type": "Image", "props": { "width": 154, "skin": "ui/suo.png", "height": 79 } }] }, { "type": "Sprite", "props": { "y": 565, "x": 882, "name": "kitchenwareSn9_3" }, "child": [{ "type": "Image", "props": { "width": 154, "skin": "ui/suo.png", "height": 74 } }] }, { "type": "Sprite", "props": { "y": 856, "x": 715, "name": "itemSn7" }, "child": [{ "type": "Image", "props": { "skin": "stage/kaochuanpan.png" } }] }, { "type": "Sprite", "props": { "y": 860, "x": 881, "name": "itemSn6" }, "child": [{ "type": "Image", "props": { "skin": "stage/xiaolongxiapen.png" } }] }, { "type": "Sprite", "props": { "y": 557, "x": 413, "name": "kitchenwareSn6_1" }, "child": [{ "type": "Image", "props": { "width": 127, "skin": "stage/pijiutong.png", "height": 198 } }, { "type": "Image", "props": { "y": 143, "x": -21.999999999999716, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 549, "x": 305, "name": "kitchenwareSn6_2" }, "child": [{ "type": "Image", "props": { "width": 132, "skin": "stage/pijiutong.png", "height": 191 } }, { "type": "Image", "props": { "y": 140, "x": -22, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 531, "x": 204, "name": "kitchenwareSn6_3" }, "child": [{ "type": "Image", "props": { "width": 126, "skin": "stage/pijiutong.png", "height": 197 } }, { "type": "Image", "props": { "y": 142.0000000000001, "x": -23.999999999999915, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 907, "x": 1562, "name": "itemSn1" }, "child": [{ "type": "Image", "props": { "skin": "stage/rouchuan.png" } }] }, { "type": "Sprite", "props": { "y": 925, "x": 1392, "name": "itemSn5" }, "child": [{ "type": "Image", "props": { "skin": "stage/rouchuan.png" } }] }] };
    ui.StageOneInfoUI = StageOneInfoUI;
})(ui || (ui = {}));
(function (ui) {
    var UpgradeInfoUI = (function (_super) {
        __extends(UpgradeInfoUI, _super);
        function UpgradeInfoUI() {
            return _super.call(this) || this;
        }
        UpgradeInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.UpgradeInfoUI.uiView);
        };
        return UpgradeInfoUI;
    }(View));
    UpgradeInfoUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 174, "skin": "ui/shadow_big.png" } }, { "type": "Image", "props": { "y": 48, "x": 193, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 48, "x": 268, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 48, "x": 343, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 243, "x": 224, "skin": "ui/quick_finish.png" } }, { "type": "Image", "props": { "y": 177, "x": 35, "skin": "ui/upgrade.png" } }, { "type": "Image", "props": { "y": 188, "x": 413, "skin": "ui/info.png" } }] };
    ui.UpgradeInfoUI = UpgradeInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map