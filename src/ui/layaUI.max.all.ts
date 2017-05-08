
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
    export class StageOneInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1920,"name":"Level","height":1080},"child":[{"type":"Sprite","props":{"y":177,"x":320,"width":1182.9999999999998,"name":"Furniture","height":321},"child":[{"type":"Image","props":{"y":120.99999999999999,"x":-83.00000000000001,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":120.99999999999999,"x":188.00000000000003,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":122,"x":783.0000000000001,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":122,"x":1035.9999999999998,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":127.00000000000004,"x":280,"width":192,"skin":"ui/zhuozi2.png","name":"Desk1_R2","height":155}},{"type":"Image","props":{"y":127.00000000000004,"x":629.9999999999998,"width":192,"skin":"ui/zhuozi2.png","name":"Desk1_R2","height":155}},{"type":"Image","props":{"y":132,"x":9.000000000000043,"width":227,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":186}},{"type":"Image","props":{"y":112,"x":430,"width":275,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":252}},{"type":"Image","props":{"y":135,"x":865,"width":227,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":186}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageOneInfoUI.uiView);
        }
    }
}
