
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
		public rouchuan:Laya.Image;
		public jiutong1:Laya.Image;
		public jiutong2:Laya.Image;
		public jiutong3:Laya.Image;
		public jiubei1:Laya.Image;
		public jiubei2:Laya.Image;
		public jiubei3:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1920,"name":"Level","height":1080},"child":[{"type":"Image","props":{"y":915,"x":1554,"var":"rouchuan","skin":"ui/rouchuan.png","name":"rouchuan"}},{"type":"Sprite","props":{"y":544,"x":1308,"name":"kaolu"},"child":[{"type":"Image","props":{"y":0,"x":10,"skin":"ui/kaolu.png"}},{"type":"Image","props":{"y":81,"x":56,"skin":"ui/kaolu.png"}},{"type":"Image","props":{"y":164,"x":107,"skin":"ui/kaolu.png"}},{"type":"Image","props":{"y":240,"x":156,"skin":"ui/kaolu.png"}}]},{"type":"Sprite","props":{"y":177,"x":320},"child":[{"type":"Sprite","props":{"width":1182.9999999999998,"name":"Furniture","height":321},"child":[{"type":"Image","props":{"y":120.99999999999999,"x":-83.00000000000001,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":120.99999999999999,"x":188.00000000000003,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":122,"x":783.0000000000001,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":122,"x":1035.9999999999998,"width":147,"skin":"ui/zhuozi2.png","name":"Desk1_R3","height":120}},{"type":"Image","props":{"y":127.00000000000004,"x":280,"width":192,"skin":"ui/zhuozi2.png","name":"Desk1_R2","height":155}},{"type":"Image","props":{"y":127.00000000000004,"x":629.9999999999998,"width":192,"skin":"ui/zhuozi2.png","name":"Desk1_R2","height":155}},{"type":"Image","props":{"y":132,"x":9.000000000000043,"width":227,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":186}},{"type":"Image","props":{"y":112,"x":430,"width":275,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":252}},{"type":"Image","props":{"y":135,"x":865,"width":227,"skin":"ui/zhuozi2.png","name":"Desk1_R1","height":186}}]}]},{"type":"Sprite","props":{"y":538,"x":1469,"name":"baowenlu"},"child":[{"type":"Image","props":{"skin":"ui/baowenlu.png"}},{"type":"Image","props":{"y":75,"x":50,"skin":"ui/baowenlu.png"}},{"type":"Image","props":{"y":147,"x":100,"skin":"ui/baowenlu.png"}},{"type":"Image","props":{"y":228,"x":157,"skin":"ui/baowenlu.png"}}]},{"type":"Image","props":{"y":775,"x":1088,"skin":"ui/huasheng.png","name":"huasheng"}},{"type":"Image","props":{"y":673,"x":1075,"skin":"ui/maodou.png","name":"maodou"}},{"type":"Image","props":{"y":584,"x":1076,"skin":"ui/xiangcai.png","name":"xiangcai"}},{"type":"Sprite","props":{"y":508,"x":193,"name":"jiutong"},"child":[{"type":"Image","props":{"var":"jiutong1","skin":"ui/pijiutong.png"}},{"type":"Image","props":{"y":14,"x":109,"var":"jiutong2","skin":"ui/pijiutong.png"}},{"type":"Image","props":{"y":30,"x":211,"var":"jiutong3","skin":"ui/pijiutong.png"}}]},{"type":"Sprite","props":{"y":677,"x":177,"name":"jiubei"},"child":[{"type":"Image","props":{"var":"jiubei1","skin":"ui/pijiu.png"}},{"type":"Image","props":{"y":14,"x":96,"var":"jiubei2","skin":"ui/pijiu.png"}},{"type":"Image","props":{"y":29,"x":206,"var":"jiubei3","skin":"ui/pijiu.png"}}]},{"type":"Sprite","props":{"y":519.0000000000001,"x":1161,"name":"guo"},"child":[{"type":"Sprite","props":{"y":46.999999999999886,"x":45},"child":[{"type":"Image","props":{"skin":"ui/xiaolongxiaguodi.png"}},{"type":"Image","props":{"y":-46.999999999999886,"x":-45,"skin":"ui/xiaolongxiaguo.png"}}]},{"type":"Sprite","props":{"y":137.9999999999999,"x":89},"child":[{"type":"Image","props":{"skin":"ui/xiaolongxiaguodi.png"}},{"type":"Image","props":{"y":-46.999999999999886,"x":-45,"skin":"ui/xiaolongxiaguo.png"}}]},{"type":"Sprite","props":{"y":220.9999999999999,"x":115},"child":[{"type":"Image","props":{"skin":"ui/xiaolongxiaguodi.png"}},{"type":"Image","props":{"y":-46.999999999999886,"x":-45,"skin":"ui/xiaolongxiaguo.png"}}]},{"type":"Sprite","props":{"y":297.9999999999999,"x":156},"child":[{"type":"Image","props":{"skin":"ui/xiaolongxiaguodi.png"}},{"type":"Image","props":{"y":-46.999999999999886,"x":-45,"skin":"ui/xiaolongxiaguo.png"}}]}]},{"type":"Sprite","props":{"y":864,"x":694,"name":"tuopan"},"child":[{"type":"Image","props":{"skin":"ui/kaochuanpan.png"}},{"type":"Image","props":{"y":1,"x":160,"skin":"ui/kaochuanpan.png"}}]},{"type":"Image","props":{"y":864,"x":236,"skin":"ui/lajitong.png","name":"trash"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageOneInfoUI.uiView);
        }
    }
}
