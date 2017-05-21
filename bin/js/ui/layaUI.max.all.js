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
    var StageChooseInfoUI = (function (_super) {
        __extends(StageChooseInfoUI, _super);
        function StageChooseInfoUI() {
            return _super.call(this) || this;
        }
        StageChooseInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.StageChooseInfoUI.uiView);
        };
        return StageChooseInfoUI;
    }(View));
    StageChooseInfoUI.uiView = { "type": "View", "props": { "width": 1315, "height": 928 }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 1315, "name": "Window", "height": 928 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 9, "width": 1302, "skin": "ui/StageChoose/Bg_Window.png", "name": "Bg_Window", "height": 896 } }, { "type": "Image", "props": { "y": 50, "x": 1207.0000000000002, "var": "close", "skin": "ui/StageChoose/BT_Close.png" } }, { "type": "Image", "props": { "y": 41, "x": 555, "skin": "ui/StageChoose/Lable_Title.png", "name": "Title" } }] }, { "type": "Sprite", "props": { "y": 132, "x": 30, "width": 233, "name": "Stage_Open", "height": 224 }, "child": [{ "type": "Image", "props": { "y": 5.000000000000057, "x": 12, "skin": "ui/StageChoose/Bg_Blue.png", "name": "Bg" } }, { "type": "Image", "props": { "y": 129, "x": 14.000000000000114, "skin": "ui/StageChoose/BT_Green.png", "name": "Stage" } }, { "type": "Image", "props": { "y": 148, "x": 65.99999999999994, "skin": "ui/StageChoose/Lable_Day_Green.png", "name": "Day_Green" } }, { "type": "Image", "props": { "y": 48, "x": 11, "skin": "ui/StageChoose/Star_Bg_left.png", "name": "bg_left" } }, { "type": "Image", "props": { "y": 48, "x": 11, "skin": "ui/StageChoose/Star_left.png", "name": "Star_left" } }, { "type": "Image", "props": { "y": 16, "x": 69, "skin": "ui/StageChoose/Star_Bg_mid.png", "name": "bg_mid" } }, { "type": "Image", "props": { "y": 14, "x": 70, "skin": "ui/StageChoose/Star_mid.png", "name": "Star_mid" } }, { "type": "Image", "props": { "y": 48, "x": 153, "skin": "ui/StageChoose/Star_Bg_right.png", "name": "bg_right" } }, { "type": "Image", "props": { "y": 48, "x": 154, "skin": "ui/StageChoose/Star_right.png", "name": "Star_right" } }] }, { "type": "Sprite", "props": { "y": 132, "x": 30, "width": 233, "name": "Stage_Close", "height": 224 }, "child": [{ "type": "Image", "props": { "y": 5.000000000000057, "x": 12, "skin": "ui/StageChoose/Bg_Grey.png", "name": "Bg" } }, { "type": "Image", "props": { "y": 129, "x": 14.000000000000114, "skin": "ui/StageChoose/BT_Grey.png", "name": "Stage" } }, { "type": "Image", "props": { "y": 149, "x": 65.99999999999994, "skin": "ui/StageChoose/Lable_Day_Grey.png", "name": "Day_Grey" } }, { "type": "Image", "props": { "y": 40, "x": 83, "skin": "ui/StageChoose/Lock.png", "name": "Lock" } }] }] };
    ui.StageChooseInfoUI = StageChooseInfoUI;
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
    StageOneInfoUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 476, "x": 1749, "skin": "stage/jinbi.png" } }, { "type": "Sprite", "props": { "y": 123, "x": -57, "width": 1975, "name": "Furniture", "height": 377 }, "child": [{ "type": "Image", "props": { "y": 93, "x": 1870, "skin": "stage/zhuozi2.png", "scaleY": 0.67, "scaleX": 0.67, "name": "Desk1_R3" } }, { "type": "Image", "props": { "y": 93.00000000000003, "x": 1415, "skin": "stage/zhuozi2.png", "scaleY": 0.67, "scaleX": 0.67, "name": "Desk1_R3" } }, { "type": "Image", "props": { "y": 92.00000000000006, "x": 344, "skin": "stage/zhuozi2.png", "scaleY": 0.67, "scaleX": 0.67, "name": "Desk1_R3" } }, { "type": "Image", "props": { "y": 93, "x": -142, "skin": "stage/zhuozi2.png", "scaleY": 0.67, "scaleX": 0.67, "name": "Desk1_R3" } }, { "type": "Image", "props": { "y": 106.99999999999997, "x": 1149.9999999999998, "skin": "stage/zhuozi2.png", "scaleY": 0.82, "scaleX": 0.82, "name": "Desk1_R2" } }, { "type": "Image", "props": { "y": 105.99999999999997, "x": 520.9999999999998, "skin": "stage/zhuozi2.png", "scaleY": 0.82, "scaleX": 0.82, "name": "Desk1_R2" } }, { "type": "Image", "props": { "y": 115, "x": 28, "skin": "stage/zhuozi2.png", "name": "Desk1_R1" } }, { "type": "Image", "props": { "y": 109, "x": 787, "skin": "stage/zhuozi2.png", "name": "Desk1_R1" } }, { "type": "Image", "props": { "y": 129.00000000000006, "x": 1579, "skin": "stage/zhuozi2.png", "name": "Desk1_R1" } }] }, { "type": "Sprite", "props": { "y": 599, "x": 1228, "width": 119, "pivotY": 47.19008264462809, "pivotX": 52.96340023612743, "name": "kitchenwareSn2_4", "height": 91 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 9, "skin": "stage/xiaolongxiaguodi.png", "scaleY": 0.75, "scaleX": 0.75 } }] }, { "type": "Sprite", "props": { "y": 674, "x": 1259, "width": 119, "pivotY": 47.19008264462809, "pivotX": 52.96340023612743, "name": "kitchenwareSn2_3", "height": 91 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 10, "skin": "stage/xiaolongxiaguodi.png", "scaleY": 0.8, "scaleX": 0.8 } }] }, { "type": "Sprite", "props": { "y": 755, "x": 1302.9999999999998, "width": 119, "pivotY": 37.19008264462809, "pivotX": 58.677685950413206, "name": "kitchenwareSn2_2", "height": 91 }, "child": [{ "type": "Image", "props": { "y": 8, "x": 7, "skin": "stage/xiaolongxiaguodi.png", "scaleY": 0.9, "scaleX": 0.9 } }] }, { "type": "Sprite", "props": { "y": 860, "x": 1345, "width": 119, "pivotY": 37.19008264462809, "pivotX": 58.677685950413206, "name": "kitchenwareSn2_1", "height": 91 }, "child": [{ "type": "Image", "props": { "skin": "stage/xiaolongxiaguodi.png" } }] }, { "type": "Sprite", "props": { "y": 585, "x": 1380, "width": 163, "pivotY": 49.5867768595042, "pivotX": 80.16528925619832, "name": "kitchenwareSn1_4", "height": 108 }, "child": [{ "type": "Image", "props": { "y": 18, "x": 13, "skin": "stage/kaolu.png", "scaleY": 0.75, "scaleX": 0.75 } }] }, { "type": "Sprite", "props": { "y": 661, "x": 1418, "width": 163, "pivotY": 49.5867768595042, "pivotX": 80.16528925619832, "name": "kitchenwareSn1_3", "height": 108 }, "child": [{ "type": "Image", "props": { "y": 8, "x": 11, "skin": "stage/kaolu.png", "scaleY": 0.8, "scaleX": 0.8 } }] }, { "type": "Sprite", "props": { "y": 736, "x": 1465, "width": 163, "pivotY": 49.5867768595042, "pivotX": 80.16528925619832, "name": "kitchenwareSn1_2", "height": 108 }, "child": [{ "type": "Image", "props": { "y": 2, "x": 3, "skin": "stage/kaolu.png", "scaleY": 0.9, "scaleX": 0.9 } }] }, { "type": "Sprite", "props": { "y": 818, "x": 1512, "width": 165, "pivotY": 49.5867768595042, "pivotX": 80.16528925619832, "name": "kitchenwareSn1_1", "height": 142 }, "child": [{ "type": "Image", "props": { "y": -0.9999999999997726, "skin": "stage/kaolu.png" } }] }, { "type": "Sprite", "props": { "y": 540, "x": 1451, "width": 145, "name": "kitchenwareSn5_3", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 12, "x": 12, "skin": "stage/baowenlu.png", "skewY": 4, "scaleY": 0.7, "scaleX": 0.7 } }] }, { "type": "Sprite", "props": { "y": 600, "x": 1495, "width": 145, "name": "kitchenwareSn5_3", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 11, "x": 9, "skin": "stage/baowenlu.png", "skewY": 3, "scaleY": 0.75, "scaleX": 0.75 } }] }, { "type": "Sprite", "props": { "y": 667, "x": 1543, "width": 145, "name": "kitchenwareSn5_2", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 7, "x": 2, "skin": "stage/baowenlu.png", "skewY": 2, "scaleY": 0.9, "scaleX": 0.9 } }] }, { "type": "Sprite", "props": { "y": 752, "x": 1599, "name": "kitchenwareSn5_1" }, "child": [{ "type": "Image", "props": { "skin": "stage/baowenlu.png" } }] }, { "type": "Sprite", "props": { "y": 924, "x": 290, "name": "kitchenwareSn9_1" }, "child": [{ "type": "Image", "props": { "skin": "stage/lajitong.png" } }] }, { "type": "Sprite", "props": { "y": 583, "x": 1047, "name": "itemSn4" }, "child": [{ "type": "Image", "props": { "skin": "stage/xiangcai.png" } }] }, { "type": "Sprite", "props": { "y": 759, "x": 1069, "name": "itemSn2" }, "child": [{ "type": "Image", "props": { "skin": "stage/huasheng.png" } }] }, { "type": "Sprite", "props": { "y": 664, "x": 1052, "name": "itemSn3" }, "child": [{ "type": "Image", "props": { "skin": "stage/maodou.png" } }] }, { "type": "Sprite", "props": { "y": 575, "x": 716, "width": 152, "name": "kitchenwareSn8_3", "height": 61 }, "child": [{ "type": "Image", "props": { "y": -4, "x": 4, "width": 192, "skin": "ui/suo.png", "scaleY": 0.65, "scaleX": 0.73, "height": 95 } }] }, { "type": "Sprite", "props": { "y": 630, "x": 687, "name": "kitchenwareSn8_2" }, "child": [{ "type": "Image", "props": { "y": 9, "x": 4, "width": 192, "skin": "ui/suo.png", "scaleY": 0.8, "scaleX": 0.83, "height": 95 } }] }, { "type": "Sprite", "props": { "y": 762, "x": 754.0000000000001, "width": 191, "pivotY": 42.253521126760575, "pivotX": 102.11267605633805, "name": "kitchenwareSn8_1", "height": 95 }, "child": [{ "type": "Image", "props": { "y": 0.8121010566970881, "x": -1.9080620071877092, "width": 192, "skin": "ui/suo.png", "height": 95 } }] }, { "type": "Sprite", "props": { "y": 573, "x": 868, "width": 124, "name": "kitchenwareSn7_3", "height": 58 }, "child": [{ "type": "Image", "props": { "y": -2, "x": -20, "width": 192, "skin": "ui/suo.png", "skewX": 13, "scaleY": 0.65, "scaleX": 0.73, "height": 95 } }] }, { "type": "Sprite", "props": { "y": 644, "x": 858, "width": 146, "name": "kitchenwareSn7_2", "height": 70 }, "child": [{ "type": "Image", "props": { "y": -2, "x": -22, "width": 192, "skin": "ui/suo.png", "skewX": 13, "scaleY": 0.8, "scaleX": 0.83, "height": 95 } }] }, { "type": "Sprite", "props": { "y": 763, "x": 911, "width": 163, "pivotY": 38.15789473684208, "pivotX": 81.57894736842104, "name": "kitchenwareSn7_1", "height": 86 }, "child": [{ "type": "Image", "props": { "y": -2, "x": -11, "width": 192, "skin": "ui/suo.png", "skewX": 13, "height": 95 } }] }, { "type": "Sprite", "props": { "y": 921, "x": 930, "width": 167, "pivotY": 57.89473684210532, "pivotX": 82.8947368421052, "name": "itemSn6", "height": 120 }, "child": [{ "type": "Image", "props": { "skin": "stage/kaochuanpan.png" } }] }, { "type": "Sprite", "props": { "y": 914, "x": 758, "width": 172, "pivotY": 60, "pivotX": 86, "name": "itemSn7", "height": 120 }, "child": [{ "type": "Image", "props": { "skin": "stage/xiaolongxiapen.png" } }] }, { "type": "Sprite", "props": { "y": 519, "x": 148, "width": 162, "name": "kitchenwareSn6_3", "height": 289 }, "child": [{ "type": "Image", "props": { "y": 1, "x": -17.999999999999957, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 542, "x": 271, "width": 116, "name": "kitchenwareSn6_2", "height": 287 }, "child": [{ "type": "Image", "props": { "y": -8, "x": -26, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 520, "x": 372, "width": 141, "name": "kitchenwareSn6_1", "height": 326 }, "child": [{ "type": "Image", "props": { "y": 22, "x": -14, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 972, "x": 1606, "width": 189, "pivotY": 58.512396694214885, "pivotX": 97.85123966942137, "name": "itemSn1", "height": 119 }, "child": [{ "type": "Image", "props": { "skin": "stage/kucunrouchuan.png" } }] }, { "type": "Sprite", "props": { "y": 991, "x": 1408, "width": 191, "pivotY": 58.18181818181813, "pivotX": 95.37190082644634, "name": "itemSn5", "height": 115 }, "child": [{ "type": "Image", "props": { "skin": "stage/kucunxia.png" } }] }, { "type": "Image", "props": { "y": 990.0000000000001, "x": 733.0000000000001, "skin": "stage/bingjilinliceng.png", "name": "itemSn16_bg" } }, { "type": "Sprite", "props": { "y": 990, "x": 694, "width": 71, "name": "itemSn16", "height": 91 }, "child": [{ "type": "Image", "props": { "y": 2, "x": 4, "skin": "stage/bingjilin.png" } }] }, { "type": "Sprite", "props": { "y": 534, "x": 599, "width": 98, "name": "itemSn15_3", "height": 154 }, "child": [{ "type": "Image", "props": { "y": -23, "x": -15, "skin": "stage/suanmeitang.png", "scaleY": 0.8, "scaleX": 0.8 } }] }, { "type": "Sprite", "props": { "y": 617, "x": 561.9999999999999, "width": 98, "name": "itemSn15_2", "height": 154 }, "child": [{ "type": "Image", "props": { "y": -35, "x": -22, "skin": "stage/suanmeitang.png", "scaleY": 0.9, "scaleX": 0.9 } }] }, { "type": "Sprite", "props": { "y": 711, "x": 517, "width": 98, "name": "itemSn15_1", "height": 154 }, "child": [{ "type": "Image", "props": { "y": -37, "x": -25, "skin": "stage/suanmeitang.png" } }] }] };
    ui.StageOneInfoUI = StageOneInfoUI;
})(ui || (ui = {}));
(function (ui) {
    var StageOneUpgradeUI = (function (_super) {
        __extends(StageOneUpgradeUI, _super);
        function StageOneUpgradeUI() {
            return _super.call(this) || this;
        }
        StageOneUpgradeUI.prototype.createChildren = function () {
            View.regComponent("ui.PreUpgradeInfoUI", ui.PreUpgradeInfoUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.StageOneUpgradeUI.uiView);
        };
        return StageOneUpgradeUI;
    }(View));
    StageOneUpgradeUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Sprite", "props": { "y": 177, "x": 320, "width": 1182.9999999999998, "name": "Furniture", "height": 321 }, "child": [{ "type": "Image", "props": { "y": 120.99999999999999, "x": -83.00000000000001, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 120.99999999999999, "x": 188.00000000000003, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 783.0000000000001, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 1035.9999999999998, "width": 147, "skin": "ui/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 280, "width": 192, "skin": "ui/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 629.9999999999998, "width": 192, "skin": "ui/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 132, "x": 9.000000000000043, "width": 227, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }, { "type": "Image", "props": { "y": 112, "x": 430, "width": 275, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 252 } }, { "type": "Image", "props": { "y": 135, "x": 865, "width": 227, "skin": "ui/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }] }, { "type": "Sprite", "props": { "y": 849, "x": 1363, "width": 119, "pivotY": 37.19008264462809, "pivotX": 58.677685950413206, "name": "kitchenwareSn2_1", "height": 91 }, "child": [{ "type": "Image", "props": { "skin": "stage/xiaolongxiaguodi.png" } }] }, { "type": "Sprite", "props": { "y": 821, "x": 1521, "width": 165, "pivotY": 49.5867768595042, "pivotX": 80.16528925619832, "name": "kitchenwareSn1_1", "height": 142 }, "child": [{ "type": "Image", "props": { "y": -0.9999999999997726, "skin": "stage/kaolu.png" } }] }, { "type": "Sprite", "props": { "y": 751, "x": 1624, "name": "kitchenwareSn5_1" }, "child": [{ "type": "Image", "props": { "skin": "stage/baowenlu.png" } }] }, { "type": "Sprite", "props": { "y": 864, "x": 236, "name": "trash" }, "child": [{ "type": "Image", "props": { "skin": "stage/lajitong.png" } }] }, { "type": "Sprite", "props": { "y": 584, "x": 1076, "name": "itemSn4" }, "child": [{ "type": "Image", "props": { "skin": "stage/xiangcai.png" } }] }, { "type": "Sprite", "props": { "y": 775, "x": 1088, "name": "itemSn2" }, "child": [{ "type": "Image", "props": { "skin": "stage/huasheng.png" } }] }, { "type": "Sprite", "props": { "y": 673, "x": 1075, "name": "itemSn3" }, "child": [{ "type": "Image", "props": { "skin": "stage/maodou.png" } }] }, { "type": "Sprite", "props": { "y": 764, "x": 771, "width": 191, "pivotY": 42.253521126760575, "pivotX": 102.11267605633805, "name": "kitchenwareSn8_1", "height": 95 }, "child": [{ "type": "Image", "props": { "y": -0.1878989433029119, "x": -0.9080620071877092, "width": 192, "skin": "ui/suo.png", "height": 95 } }] }, { "type": "Sprite", "props": { "y": 629, "x": 699, "name": "kitchenwareSn8_2" }, "child": [{ "type": "Image", "props": { "width": 166, "skin": "ui/suo.png", "height": 88 } }] }, { "type": "Sprite", "props": { "y": 575, "x": 731, "name": "kitchenwareSn8_3" }, "child": [{ "type": "Image", "props": { "x": -0.9999999999997726, "width": 141, "skin": "ui/suo.png", "height": 58 } }] }, { "type": "Sprite", "props": { "y": 765, "x": 942, "width": 163, "pivotY": 38.15789473684208, "pivotX": 81.57894736842104, "name": "kitchenwareSn7_1", "height": 86 }, "child": [{ "type": "Image", "props": { "x": -1.1368683772161603e-13, "width": 155, "skin": "ui/suo.png", "height": 86 } }] }, { "type": "Sprite", "props": { "y": 638, "x": 878, "name": "kitchenwareSn7_2" }, "child": [{ "type": "Image", "props": { "width": 154, "skin": "ui/suo.png", "height": 79 } }] }, { "type": "Sprite", "props": { "y": 565, "x": 882, "name": "kitchenwareSn7_3" }, "child": [{ "type": "Image", "props": { "width": 154, "skin": "ui/suo.png", "height": 74 } }] }, { "type": "Sprite", "props": { "y": 920, "x": 943, "width": 167, "pivotY": 57.89473684210532, "pivotX": 82.8947368421052, "name": "itemSn6", "height": 120 }, "child": [{ "type": "Image", "props": { "skin": "stage/kaochuanpan.png" } }] }, { "type": "Sprite", "props": { "y": 914, "x": 776, "width": 172, "pivotY": 60, "pivotX": 86, "name": "itemSn7", "height": 120 }, "child": [{ "type": "Image", "props": { "skin": "stage/xiaolongxiapen.png" } }] }, { "type": "Sprite", "props": { "y": 557, "x": 413, "name": "kitchenwareSn6_1" }, "child": [{ "type": "Image", "props": { "width": 127, "skin": "stage/pijiutong.png", "height": 198 } }, { "type": "Image", "props": { "y": 143, "x": -21.999999999999716, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 549, "x": 305, "name": "kitchenwareSn6_2" }, "child": [{ "type": "Image", "props": { "width": 132, "skin": "stage/pijiutong.png", "height": 191 } }, { "type": "Image", "props": { "y": 140, "x": -22, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 531, "x": 204, "name": "kitchenwareSn6_3" }, "child": [{ "type": "Image", "props": { "width": 126, "skin": "stage/pijiutong.png", "height": 197 } }, { "type": "Image", "props": { "y": 142.0000000000001, "x": -23.999999999999915, "skin": "stage/pijiu.png" } }] }, { "type": "Sprite", "props": { "y": 949, "x": 1592, "width": 99, "pivotY": 42.14876033057851, "pivotX": 48.76033057851237, "name": "itemSn1", "height": 105 }, "child": [{ "type": "Image", "props": { "skin": "stage/rouchuan.png" } }] }, { "type": "Sprite", "props": { "y": 976, "x": 1450, "width": 231, "pivotY": 63.636363636363626, "pivotX": 109.91735537190084, "name": "itemSn5", "height": 137 }, "child": [{ "type": "Image", "props": { "skin": "stage/xiaolongxiaguo2.png" } }] }, { "type": "PreUpgradeInfo", "props": { "y": 639, "x": 1188, "visible": false, "name": "kitchenwareSn2_1_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 616, "x": 1341, "visible": false, "name": "kitchenwareSn1_1_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 551, "x": 624, "visible": false, "name": "kitchenwareSn8_1_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 558, "x": 804, "visible": false, "name": "kitchenwareSn7_1_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 791, "x": 1500, "visible": false, "name": "itemSn1_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 867, "x": 1274, "visible": false, "name": "itemSn5_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 556, "x": 1159, "visible": false, "name": "kitchenwareSn2_2_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 449, "x": 1133, "visible": false, "name": "kitchenwareSn2_3_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 530, "x": 1312, "visible": false, "name": "kitchenwareSn1_2_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 436, "x": 1286, "visible": false, "name": "kitchenwareSn1_3_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 468, "x": 643, "visible": false, "name": "kitchenwareSn8_2_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 397, "x": 665, "visible": false, "name": "kitchenwareSn8_3_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 478, "x": 814, "visible": false, "name": "kitchenwareSn7_2_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "PreUpgradeInfo", "props": { "y": 404, "x": 824, "visible": false, "name": "kitchenwareSn7_3_ui", "runtime": "ui.PreUpgradeInfoUI" } }, { "type": "Image", "props": { "y": 62, "x": 85, "var": "startGame", "skin": "ui/info.png", "name": "kaidian" } }] };
    ui.StageOneUpgradeUI = StageOneUpgradeUI;
})(ui || (ui = {}));
(function (ui) {
    var UpgradeInfoUI = (function (_super) {
        __extends(UpgradeInfoUI, _super);
        function UpgradeInfoUI() {
            return _super.call(this) || this;
        }
        UpgradeInfoUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.UpgradeInfoUI.uiView);
        };
        return UpgradeInfoUI;
    }(View));
    UpgradeInfoUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 174, "skin": "ui/shadow_big.png" } }, { "type": "Image", "props": { "y": 48, "x": 193, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 48, "x": 268, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 48, "x": 343, "skin": "ui/point_big.png" } }, { "type": "Image", "props": { "y": 243, "x": 224, "var": "strength", "skin": "ui/quick_finish.png" } }, { "type": "Image", "props": { "y": 177, "x": 35, "var": "upgrade", "skin": "ui/upgrade.png" } }, { "type": "Image", "props": { "y": 188, "x": 413, "var": "info", "skin": "ui/info.png" } }, { "type": "Text", "props": { "y": 113, "x": 244, "var": "name", "fontSize": 60, "color": "#fbf8f8" } }] };
    ui.UpgradeInfoUI = UpgradeInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map