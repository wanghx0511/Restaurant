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
            _super.prototype.createChildren.call(this);
            this.createView(ui.StageOneInfoUI.uiView);
        };
        return StageOneInfoUI;
    }(View));
    StageOneInfoUI.uiView = { "type": "View", "props": { "width": 1920, "name": "Level", "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 915, "x": 1554, "var": "rouchuan", "skin": "ui/rouchuan.png", "name": "rouchuan" } }, { "type": "Sprite", "props": { "y": 544, "x": 1308, "name": "kaolu" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 10, "skin": "ui/kaolu.png" } }, { "type": "Image", "props": { "y": 81, "x": 56, "skin": "ui/kaolu.png" } }, { "type": "Image", "props": { "y": 164, "x": 107, "skin": "ui/kaolu.png" } }, { "type": "Image", "props": { "y": 240, "x": 156, "skin": "ui/kaolu.png" } }] }, { "type": "Sprite", "props": { "y": 177, "x": 320 }, "child": [{ "type": "Sprite", "props": { "width": 1182.9999999999998, "name": "Furniture", "height": 321 }, "child": [{ "type": "Image", "props": { "y": 120.99999999999999, "x": -83.00000000000001, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 120.99999999999999, "x": 188.00000000000003, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 783.0000000000001, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 1035.9999999999998, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 280, "width": 192, "skin": "ui/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 629.9999999999998, "width": 192, "skin": "ui/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 132, "x": 9.000000000000043, "width": 227, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }, { "type": "Image", "props": { "y": 112, "x": 430, "width": 275, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 252 } }, { "type": "Image", "props": { "y": 135, "x": 865, "width": 227, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }] }] }, { "type": "Sprite", "props": { "y": 538, "x": 1469, "name": "baowenlu" }, "child": [{ "type": "Image", "props": { "skin": "ui/baowenlu.png" } }, { "type": "Image", "props": { "y": 75, "x": 50, "skin": "ui/baowenlu.png" } }, { "type": "Image", "props": { "y": 147, "x": 100, "skin": "ui/baowenlu.png" } }, { "type": "Image", "props": { "y": 228, "x": 157, "skin": "ui/baowenlu.png" } }] }, { "type": "Image", "props": { "y": 775, "x": 1088, "skin": "ui/huasheng.png", "name": "huasheng" } }, { "type": "Image", "props": { "y": 673, "x": 1075, "skin": "ui/maodou.png", "name": "maodou" } }, { "type": "Image", "props": { "y": 584, "x": 1076, "skin": "ui/xiangcai.png", "name": "xiangcai" } }, { "type": "Sprite", "props": { "y": 508, "x": 193, "name": "jiutong" }, "child": [{ "type": "Image", "props": { "var": "jiutong1", "skin": "ui/pijiutong.png" } }, { "type": "Image", "props": { "y": 14, "x": 109, "var": "jiutong2", "skin": "ui/pijiutong.png" } }, { "type": "Image", "props": { "y": 30, "x": 211, "var": "jiutong3", "skin": "ui/pijiutong.png" } }] }, { "type": "Sprite", "props": { "y": 677, "x": 177, "name": "jiubei" }, "child": [{ "type": "Image", "props": { "var": "jiubei1", "skin": "ui/pijiu.png" } }, { "type": "Image", "props": { "y": 14, "x": 96, "var": "jiubei2", "skin": "ui/pijiu.png" } }, { "type": "Image", "props": { "y": 29, "x": 206, "var": "jiubei3", "skin": "ui/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 519.0000000000001, "x": 1161, "name": "guo" }, "child": [{ "type": "Sprite", "props": { "y": 46.999999999999886, "x": 45 }, "child": [{ "type": "Image", "props": { "skin": "ui/xiaolongxiaguodi.png" } }, { "type": "Image", "props": { "y": -46.999999999999886, "x": -45, "skin": "ui/xiaolongxiaguo.png" } }] }, { "type": "Sprite", "props": { "y": 137.9999999999999, "x": 89 }, "child": [{ "type": "Image", "props": { "skin": "ui/xiaolongxiaguodi.png" } }, { "type": "Image", "props": { "y": -46.999999999999886, "x": -45, "skin": "ui/xiaolongxiaguo.png" } }] }, { "type": "Sprite", "props": { "y": 220.9999999999999, "x": 115 }, "child": [{ "type": "Image", "props": { "skin": "ui/xiaolongxiaguodi.png" } }, { "type": "Image", "props": { "y": -46.999999999999886, "x": -45, "skin": "ui/xiaolongxiaguo.png" } }] }, { "type": "Sprite", "props": { "y": 297.9999999999999, "x": 156 }, "child": [{ "type": "Image", "props": { "skin": "ui/xiaolongxiaguodi.png" } }, { "type": "Image", "props": { "y": -46.999999999999886, "x": -45, "skin": "ui/xiaolongxiaguo.png" } }] }] }, { "type": "Sprite", "props": { "y": 864, "x": 694, "name": "tuopan" }, "child": [{ "type": "Image", "props": { "skin": "ui/kaochuanpan.png" } }, { "type": "Image", "props": { "y": 1, "x": 160, "skin": "ui/kaochuanpan.png" } }] }, { "type": "Image", "props": { "y": 864, "x": 236, "skin": "ui/lajitong.png", "name": "trash" } }] };
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
    UpgradeInfoUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 68, "x": 179, "skin": "ui/shadow_big.png" } }, { "type": "Image", "props": { "y": 112, "x": 198, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 112, "x": 273, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 112, "x": 348, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 243, "x": 224, "skin": "ui/quick_finish.png" } }, { "type": "Image", "props": { "y": 177, "x": 35, "skin": "ui/upgrade.png" } }, { "type": "Image", "props": { "y": 188, "x": 413, "skin": "ui/info.png" } }, { "type": "Image", "props": { "y": 198, "x": 207, "skin": "ui/diamond_bar.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Image", "props": { "y": 132, "x": 20, "skin": "ui/coin_bar.png", "scaleY": 0.5, "scaleX": 0.5 } }] };
    ui.UpgradeInfoUI = UpgradeInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map