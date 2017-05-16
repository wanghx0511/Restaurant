
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

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":490,"x":-279,"skin":"stage/caozuotai.png"}},{"type":"Sprite","props":{"y":177,"x":320,"width":1182.9999999999998,"name":"Furniture","height":321},"child":[{"type":"Image","props":{"y":120.99999999999999,"x":-83.00000000000001,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":120.99999999999999,"x":188.00000000000003,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":122,"x":783.0000000000001,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":122,"x":1035.9999999999998,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":127.00000000000004,"x":280,"width":192,"skin":"ui/zhuozi2.png","name":"Desk1_R2","height":155}},{"type":"Image","props":{"y":127.00000000000004,"x":629.9999999999998,"width":192,"skin":"ui/zhuozi2.png","name":"Desk1_R2","height":155}},{"type":"Image","props":{"y":132,"x":9.000000000000043,"width":227,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":186}},{"type":"Image","props":{"y":112,"x":430,"width":275,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":252}},{"type":"Image","props":{"y":135,"x":865,"width":227,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":186}}]},{"type":"Sprite","props":{"y":849,"x":1363,"width":119,"pivotY":37.19008264462809,"pivotX":58.677685950413206,"name":"kitchenwareSn2_1","height":91},"child":[{"type":"Image","props":{"skin":"stage/xiaolongxiaguodi.png"}}]},{"type":"Sprite","props":{"y":821,"x":1521,"width":165,"pivotY":49.5867768595042,"pivotX":80.16528925619832,"name":"kitchenwareSn1_1","height":142},"child":[{"type":"Image","props":{"y":-0.9999999999997726,"skin":"stage/kaolu.png"}}]},{"type":"Sprite","props":{"y":751,"x":1624,"name":"kitchenwareSn5_1"},"child":[{"type":"Image","props":{"skin":"stage/baowenlu.png"}}]},{"type":"Sprite","props":{"y":864,"x":236,"name":"trash"},"child":[{"type":"Image","props":{"skin":"stage/lajitong.png"}}]},{"type":"Sprite","props":{"y":584,"x":1076,"name":"itemSn4"},"child":[{"type":"Image","props":{"skin":"stage/xiangcai.png"}}]},{"type":"Sprite","props":{"y":775,"x":1088,"name":"itemSn2"},"child":[{"type":"Image","props":{"skin":"stage/huasheng.png"}}]},{"type":"Sprite","props":{"y":673,"x":1075,"name":"itemSn3"},"child":[{"type":"Image","props":{"skin":"stage/maodou.png"}}]},{"type":"Sprite","props":{"y":764,"x":771,"width":191,"pivotY":42.253521126760575,"pivotX":102.11267605633805,"name":"kitchenwareSn8_1","height":95},"child":[{"type":"Image","props":{"y":-0.1878989433029119,"x":-0.9080620071877092,"width":192,"skin":"ui/suo.png","height":95}}]},{"type":"Sprite","props":{"y":629,"x":699,"name":"kitchenwareSn8_2"},"child":[{"type":"Image","props":{"width":166,"skin":"ui/suo.png","height":88}}]},{"type":"Sprite","props":{"y":575,"x":731,"name":"kitchenwareSn8_3"},"child":[{"type":"Image","props":{"x":-0.9999999999997726,"width":141,"skin":"ui/suo.png","height":58}}]},{"type":"Sprite","props":{"y":765,"x":942,"width":163,"pivotY":38.15789473684208,"pivotX":81.57894736842104,"name":"kitchenwareSn7_1","height":86},"child":[{"type":"Image","props":{"x":-1.1368683772161603e-13,"width":155,"skin":"ui/suo.png","height":86}}]},{"type":"Sprite","props":{"y":638,"x":878,"name":"kitchenwareSn7_2"},"child":[{"type":"Image","props":{"width":154,"skin":"ui/suo.png","height":79}}]},{"type":"Sprite","props":{"y":565,"x":882,"name":"kitchenwareSn7_3"},"child":[{"type":"Image","props":{"width":154,"skin":"ui/suo.png","height":74}}]},{"type":"Sprite","props":{"y":920,"x":943,"width":167,"pivotY":57.89473684210532,"pivotX":82.8947368421052,"name":"itemSn6","height":120},"child":[{"type":"Image","props":{"skin":"stage/kaochuanpan.png"}}]},{"type":"Sprite","props":{"y":914,"x":776,"width":172,"pivotY":60,"pivotX":86,"name":"itemSn7","height":120},"child":[{"type":"Image","props":{"skin":"stage/xiaolongxiapen.png"}}]},{"type":"Sprite","props":{"y":557,"x":413,"name":"kitchenwareSn6_1"},"child":[{"type":"Image","props":{"width":127,"skin":"stage/pijiutong.png","height":198}},{"type":"Image","props":{"y":143,"x":-21.999999999999716,"skin":"stage/pijiu.png"}}]},{"type":"Sprite","props":{"y":549,"x":305,"name":"kitchenwareSn6_2"},"child":[{"type":"Image","props":{"width":132,"skin":"stage/pijiutong.png","height":191}},{"type":"Image","props":{"y":140,"x":-22,"skin":"stage/pijiu.png"}}]},{"type":"Sprite","props":{"y":531,"x":204,"name":"kitchenwareSn6_3"},"child":[{"type":"Image","props":{"width":126,"skin":"stage/pijiutong.png","height":197}},{"type":"Image","props":{"y":142.0000000000001,"x":-23.999999999999915,"skin":"stage/pijiu.png"}}]},{"type":"Sprite","props":{"y":949,"x":1592,"width":99,"pivotY":42.14876033057851,"pivotX":48.76033057851237,"name":"itemSn1","height":105},"child":[{"type":"Image","props":{"skin":"stage/rouchuan.png"}}]},{"type":"Sprite","props":{"y":976,"x":1450,"width":231,"pivotY":63.636363636363626,"pivotX":109.91735537190084,"name":"itemSn5","height":137},"child":[{"type":"Image","props":{"skin":"stage/xiaolongxiaguo2.png"}}]}]};
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
