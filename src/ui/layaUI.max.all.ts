
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class MainInfoUI extends View {
		public start:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":30,"x":36,"width":174,"skin":"ui/Icn84005.png","height":183}},{"type":"ProgressBar","props":{"y":113,"x":220,"width":127,"skin":"ui/progress_time.png","height":24}},{"type":"Label","props":{"y":59,"x":215,"width":135,"text":"大魔王","strokeColor":"#9f4342","stroke":3,"height":46,"fontSize":40,"color":"#f9f3f3","bold":true}},{"type":"Image","props":{"y":501,"x":839,"width":189,"var":"start","skin":"ui/2306700.png","height":179}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MainInfoUI.uiView);
        }
    }
}

module ui {
    export class PreUpgradeInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"y":71,"x":76,"skin":"ui/shadow.png"}},{"type":"Image","props":{"y":100,"x":85,"skin":"ui/point.png"}},{"type":"Image","props":{"y":100,"x":135,"skin":"ui/point.png"}},{"type":"Image","props":{"y":100,"x":185,"skin":"ui/point.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PreUpgradeInfoUI.uiView);
        }
    }
}

module ui {
    export class StageOneInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":476,"x":1749,"skin":"stage/jinbi.png"}},{"type":"Sprite","props":{"y":123,"x":-57,"width":1975,"name":"Furniture","height":377},"child":[{"type":"Image","props":{"y":93,"x":1870,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":93.00000000000003,"x":1415,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":92.00000000000006,"x":344,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":93,"x":-142,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":106.99999999999997,"x":1149.9999999999998,"skin":"stage/zhuozi2.png","scaleY":0.82,"scaleX":0.82,"name":"Desk1_R2"}},{"type":"Image","props":{"y":105.99999999999997,"x":520.9999999999998,"skin":"stage/zhuozi2.png","scaleY":0.82,"scaleX":0.82,"name":"Desk1_R2"}},{"type":"Image","props":{"y":115,"x":28,"skin":"stage/zhuozi2.png","name":"Desk1_R1"}},{"type":"Image","props":{"y":109,"x":787,"skin":"stage/zhuozi2.png","name":"Desk1_R1"}},{"type":"Image","props":{"y":129.00000000000006,"x":1579,"skin":"stage/zhuozi2.png","name":"Desk1_R1"}}]},{"type":"Sprite","props":{"y":599,"x":1228,"width":119,"pivotY":47.19008264462809,"pivotX":52.96340023612743,"name":"kitchenwareSn2_4","height":91},"child":[{"type":"Image","props":{"y":24,"x":9,"skin":"stage/xiaolongxiaguodi.png","scaleY":0.75,"scaleX":0.75}}]},{"type":"Sprite","props":{"y":674,"x":1259,"width":119,"pivotY":47.19008264462809,"pivotX":52.96340023612743,"name":"kitchenwareSn2_3","height":91},"child":[{"type":"Image","props":{"y":21,"x":10,"skin":"stage/xiaolongxiaguodi.png","scaleY":0.8,"scaleX":0.8}}]},{"type":"Sprite","props":{"y":755,"x":1302.9999999999998,"width":119,"pivotY":37.19008264462809,"pivotX":58.677685950413206,"name":"kitchenwareSn2_2","height":91},"child":[{"type":"Image","props":{"y":8,"x":7,"skin":"stage/xiaolongxiaguodi.png","scaleY":0.9,"scaleX":0.9}}]},{"type":"Sprite","props":{"y":860,"x":1345,"width":119,"pivotY":37.19008264462809,"pivotX":58.677685950413206,"name":"kitchenwareSn2_1","height":91},"child":[{"type":"Image","props":{"skin":"stage/xiaolongxiaguodi.png"}}]},{"type":"Sprite","props":{"y":585,"x":1380,"width":163,"pivotY":49.5867768595042,"pivotX":80.16528925619832,"name":"kitchenwareSn1_4","height":108},"child":[{"type":"Image","props":{"y":18,"x":13,"skin":"stage/kaolu.png","scaleY":0.75,"scaleX":0.75}}]},{"type":"Sprite","props":{"y":661,"x":1418,"width":163,"pivotY":49.5867768595042,"pivotX":80.16528925619832,"name":"kitchenwareSn1_3","height":108},"child":[{"type":"Image","props":{"y":8,"x":11,"skin":"stage/kaolu.png","scaleY":0.8,"scaleX":0.8}}]},{"type":"Sprite","props":{"y":736,"x":1465,"width":163,"pivotY":49.5867768595042,"pivotX":80.16528925619832,"name":"kitchenwareSn1_2","height":108},"child":[{"type":"Image","props":{"y":2,"x":3,"skin":"stage/kaolu.png","scaleY":0.9,"scaleX":0.9}}]},{"type":"Sprite","props":{"y":818,"x":1512,"width":165,"pivotY":49.5867768595042,"pivotX":80.16528925619832,"name":"kitchenwareSn1_1","height":142},"child":[{"type":"Image","props":{"y":-0.9999999999997726,"skin":"stage/kaolu.png"}}]},{"type":"Sprite","props":{"y":540,"x":1451,"width":145,"name":"kitchenwareSn5_3","height":100},"child":[{"type":"Image","props":{"y":12,"x":12,"skin":"stage/baowenlu.png","skewY":4,"scaleY":0.7,"scaleX":0.7}}]},{"type":"Sprite","props":{"y":600,"x":1495,"width":145,"name":"kitchenwareSn5_3","height":100},"child":[{"type":"Image","props":{"y":11,"x":9,"skin":"stage/baowenlu.png","skewY":3,"scaleY":0.75,"scaleX":0.75}}]},{"type":"Sprite","props":{"y":667,"x":1543,"width":145,"name":"kitchenwareSn5_2","height":100},"child":[{"type":"Image","props":{"y":7,"x":2,"skin":"stage/baowenlu.png","skewY":2,"scaleY":0.9,"scaleX":0.9}}]},{"type":"Sprite","props":{"y":752,"x":1599,"name":"kitchenwareSn5_1"},"child":[{"type":"Image","props":{"skin":"stage/baowenlu.png"}}]},{"type":"Sprite","props":{"y":924,"x":290,"name":"trash"},"child":[{"type":"Image","props":{"skin":"stage/lajitong.png"}}]},{"type":"Sprite","props":{"y":583,"x":1047,"name":"itemSn4"},"child":[{"type":"Image","props":{"skin":"stage/xiangcai.png"}}]},{"type":"Sprite","props":{"y":759,"x":1069,"name":"itemSn2"},"child":[{"type":"Image","props":{"skin":"stage/huasheng.png"}}]},{"type":"Sprite","props":{"y":664,"x":1052,"name":"itemSn3"},"child":[{"type":"Image","props":{"skin":"stage/maodou.png"}}]},{"type":"Sprite","props":{"y":575,"x":716,"width":152,"name":"kitchenwareSn8_3","height":61},"child":[{"type":"Image","props":{"y":-4,"x":4,"width":192,"skin":"ui/suo.png","scaleY":0.65,"scaleX":0.73,"height":95}}]},{"type":"Sprite","props":{"y":630,"x":687,"name":"kitchenwareSn8_2"},"child":[{"type":"Image","props":{"y":9,"x":4,"width":192,"skin":"ui/suo.png","scaleY":0.8,"scaleX":0.83,"height":95}}]},{"type":"Sprite","props":{"y":762,"x":754.0000000000001,"width":191,"pivotY":42.253521126760575,"pivotX":102.11267605633805,"name":"kitchenwareSn8_1","height":95},"child":[{"type":"Image","props":{"y":0.8121010566970881,"x":-1.9080620071877092,"width":192,"skin":"ui/suo.png","height":95}}]},{"type":"Sprite","props":{"y":573,"x":868,"width":124,"name":"kitchenwareSn7_3","height":58},"child":[{"type":"Image","props":{"y":-2,"x":-20,"width":192,"skin":"ui/suo.png","skewX":13,"scaleY":0.65,"scaleX":0.73,"height":95}}]},{"type":"Sprite","props":{"y":644,"x":858,"width":146,"name":"kitchenwareSn7_2","height":70},"child":[{"type":"Image","props":{"y":-2,"x":-22,"width":192,"skin":"ui/suo.png","skewX":13,"scaleY":0.8,"scaleX":0.83,"height":95}}]},{"type":"Sprite","props":{"y":763,"x":911,"width":163,"pivotY":38.15789473684208,"pivotX":81.57894736842104,"name":"kitchenwareSn7_1","height":86},"child":[{"type":"Image","props":{"y":-2,"x":-11,"width":192,"skin":"ui/suo.png","skewX":13,"height":95}}]},{"type":"Sprite","props":{"y":921,"x":930,"width":167,"pivotY":57.89473684210532,"pivotX":82.8947368421052,"name":"itemSn6","height":120},"child":[{"type":"Image","props":{"skin":"stage/kaochuanpan.png"}}]},{"type":"Sprite","props":{"y":914,"x":758,"width":172,"pivotY":60,"pivotX":86,"name":"itemSn7","height":120},"child":[{"type":"Image","props":{"skin":"stage/xiaolongxiapen.png"}}]},{"type":"Sprite","props":{"y":519,"x":148,"width":162,"name":"kitchenwareSn6_3","height":289},"child":[{"type":"Image","props":{"y":1,"x":-17.999999999999957,"skin":"stage/pijiu.png"}}]},{"type":"Sprite","props":{"y":542,"x":271,"width":116,"name":"kitchenwareSn6_2","height":287},"child":[{"type":"Image","props":{"y":-8,"x":-26,"skin":"stage/pijiu.png"}}]},{"type":"Sprite","props":{"y":520,"x":372,"width":141,"name":"kitchenwareSn6_1","height":326},"child":[{"type":"Image","props":{"y":22,"x":-14,"skin":"stage/pijiu.png"}}]},{"type":"Sprite","props":{"y":972,"x":1606,"width":189,"pivotY":58.512396694214885,"pivotX":97.85123966942137,"name":"itemSn1","height":119},"child":[{"type":"Image","props":{"skin":"stage/kucunrouchuan.png"}}]},{"type":"Sprite","props":{"y":991,"x":1408,"width":191,"pivotY":58.18181818181813,"pivotX":95.37190082644634,"name":"itemSn5","height":115},"child":[{"type":"Image","props":{"skin":"stage/kucunxia.png"}}]},{"type":"Image","props":{"y":990.0000000000001,"x":733.0000000000001,"skin":"stage/bingjilinliceng.png","name":"itemSn16_bg"}},{"type":"Sprite","props":{"y":990,"x":694,"width":71,"name":"itemSn16","height":91},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"stage/bingjilin.png"}}]},{"type":"Sprite","props":{"y":534,"x":599,"width":98,"name":"itemSn15_3","height":154},"child":[{"type":"Image","props":{"y":-23,"x":-15,"skin":"stage/suanmeitang.png","scaleY":0.8,"scaleX":0.8}}]},{"type":"Sprite","props":{"y":617,"x":561.9999999999999,"width":98,"name":"itemSn15_2","height":154},"child":[{"type":"Image","props":{"y":-35,"x":-22,"skin":"stage/suanmeitang.png","scaleY":0.9,"scaleX":0.9}}]},{"type":"Sprite","props":{"y":711,"x":517,"width":98,"name":"itemSn15_1","height":154},"child":[{"type":"Image","props":{"y":-37,"x":-25,"skin":"stage/suanmeitang.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageOneInfoUI.uiView);
        }
    }
}

module ui {
    export class UpgradeInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":4,"x":174,"skin":"ui/shadow_big.png"}},{"type":"Image","props":{"y":48,"x":193,"skin":"ui/point_big.png"}},{"type":"Image","props":{"y":48,"x":268,"skin":"ui/point_big.png"}},{"type":"Image","props":{"y":48,"x":343,"skin":"ui/point_big.png"}},{"type":"Image","props":{"y":243,"x":224,"skin":"ui/quick_finish.png"}},{"type":"Image","props":{"y":177,"x":35,"skin":"ui/upgrade.png"}},{"type":"Image","props":{"y":188,"x":413,"skin":"ui/info.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.UpgradeInfoUI.uiView);
        }
    }
}
