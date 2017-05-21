
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class FurniturePromoteUI extends View {
		public close:Laya.Image;
		public item:Laya.Image;
		public btn_upgrade:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1316,"height":919},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/FurniturePromote/Bg_Window.png","name":"BG"}},{"type":"Image","props":{"y":42,"x":1213,"var":"close","skin":"ui/FurniturePromote/BT_Close.png","name":"Close"}},{"type":"Image","props":{"y":32,"x":579,"skin":"ui/FurniturePromote/Lable_Table.png","name":"Title"}},{"type":"Sprite","props":{"y":125,"x":39,"width":1243,"name":"Details","height":515},"child":[{"type":"Image","props":{"y":18.000000000000057,"x":24.999999999999886,"width":1186,"skin":"ui/FurniturePromote/Bg_01.png","sizeGrid":"46,0,51,0","name":"Bg","height":456}},{"type":"Sprite","props":{"y":389,"x":174.9999999999999,"width":213,"name":"Level","height":68},"child":[{"type":"Image","props":{"y":4,"x":33,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg1"},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":85,"width":46,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":132,"width":46,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":8,"x":35,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg1"},"child":[{"type":"Image","props":{"y":7.000000000000114,"x":4.999999999999886,"skin":"ui/FurniturePromote/Round.png","name":"round1"}}]},{"type":"Image","props":{"y":8,"x":86.00000000000011,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg2"},"child":[{"type":"Image","props":{"y":6.000000000000114,"x":4.999999999999773,"skin":"ui/FurniturePromote/Round.png","name":"round2"}}]},{"type":"Image","props":{"y":8,"x":135,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg3"},"child":[{"type":"Image","props":{"y":6,"x":4.999999999999886,"skin":"ui/FurniturePromote/Round.png","name":"round3"}}]}]},{"type":"Image","props":{"y":245,"x":284,"width":409,"var":"item","skin":"ui/zhuozi2.png","pivotY":177,"pivotX":212,"name":"Furniture","height":335}},{"type":"Label","props":{"y":108,"x":567.0000000000002,"width":191,"text":"制作时间","name":"Des1","height":55,"fontSize":40,"font":"SimHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":176,"x":555,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":180,"width":117,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":184,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":104.00000000000006,"x":1117.9999999999998,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}},{"type":"Label","props":{"y":290,"x":567.9999999999998,"width":191,"text":"顾客耐心","name":"Des2","height":55,"fontSize":40,"font":"Microsoft YaHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":366,"x":554,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":146,"width":151,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":154,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":294.9999999999999,"x":1119.0000000000002,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}}]},{"type":"Sprite","props":{"y":662,"x":446,"width":419,"name":"Promote","height":234},"child":[{"type":"Image","props":{"y":20.000000000000114,"x":-4,"var":"btn_upgrade","skin":"ui/FurniturePromote/BT_Green.png","name":"Promote"},"child":[{"type":"Image","props":{"y":35.999999999999886,"x":142.00000000000045,"skin":"ui/FurniturePromote/Lable_Promote.png"}}]},{"type":"Image","props":{"y":165,"x":109.99999999999977,"skin":"ui/FurniturePromote/JB_little.png","name":"JB"}},{"type":"Label","props":{"y":169.0000000000001,"x":191,"width":108,"text":"3000","name":"Price","height":59,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff"}}]},{"type":"Sprite","props":{"y":755.9999999999999,"x":744,"width":430,"name":"Finish","height":282},"child":[{"type":"Image","props":{"y":62.000000000000114,"x":2.999999999999943,"skin":"ui/FurniturePromote/BT_Blue.png","name":"Finish"},"child":[{"type":"Image","props":{"y":34.999999999999886,"x":97.00000000000011,"skin":"ui/FurniturePromote/Lable_Finish.png"}}]},{"type":"Label","props":{"y":6,"x":95,"width":257,"text":"强化02:14后完成","name":"FinishTime","height":65,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":211.0000000000001,"x":152,"skin":"ui/diamond_icon.png","name":"Diamond"}},{"type":"Label","props":{"y":211.0000000000001,"x":220,"width":70,"text":"10","name":"Price","height":59,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.FurniturePromoteUI.uiView);
        }
    }
}

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
    export class StageChooseInfoUI extends View {
		public close:Laya.Image;
		public stageOpen:Laya.Sprite;
		public stageClose:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":1315,"height":928},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":1315,"name":"Window","height":928},"child":[{"type":"Image","props":{"y":9,"x":9,"width":1302,"skin":"ui/StageChoose/Bg_Window.png","name":"Bg_Window","height":896}},{"type":"Image","props":{"y":50,"x":1207.0000000000002,"var":"close","skin":"ui/StageChoose/BT_Close.png"}},{"type":"Image","props":{"y":41,"x":555,"skin":"ui/StageChoose/Lable_Title.png","name":"Title"}}]},{"type":"Sprite","props":{"y":130,"x":33,"width":233,"visible":false,"var":"stageOpen","height":224},"child":[{"type":"Image","props":{"y":5.000000000000057,"x":12,"skin":"ui/StageChoose/Bg_Blue.png","name":"Bg"}},{"type":"Image","props":{"y":129,"x":14.000000000000114,"skin":"ui/StageChoose/BT_Green.png","name":"Stage"}},{"type":"Image","props":{"y":148,"x":65.99999999999994,"skin":"ui/StageChoose/Lable_Day_Green.png","name":"Day_Green"}},{"type":"Image","props":{"y":48,"x":11,"skin":"ui/StageChoose/Star_Bg_left.png","name":"bg_left"}},{"type":"Image","props":{"y":48,"x":11,"visible":false,"skin":"ui/StageChoose/Star_left.png","name":"Star_left"}},{"type":"Image","props":{"y":16,"x":69,"skin":"ui/StageChoose/Star_Bg_mid.png","name":"bg_mid"}},{"type":"Image","props":{"y":14,"x":70,"visible":false,"skin":"ui/StageChoose/Star_mid.png","name":"Star_mid"}},{"type":"Image","props":{"y":48,"x":153,"skin":"ui/StageChoose/Star_Bg_right.png","name":"bg_right"}},{"type":"Image","props":{"y":48,"x":154,"visible":false,"skin":"ui/StageChoose/Star_right.png","name":"Star_right"}}]},{"type":"Sprite","props":{"y":132,"x":30,"width":233,"visible":false,"var":"stageClose","height":224},"child":[{"type":"Image","props":{"y":5.000000000000057,"x":12,"skin":"ui/StageChoose/Bg_Grey.png","name":"Bg"}},{"type":"Image","props":{"y":129,"x":14.000000000000114,"skin":"ui/StageChoose/BT_Grey.png","name":"Stage"}},{"type":"Image","props":{"y":149,"x":65.99999999999994,"skin":"ui/StageChoose/Lable_Day_Grey.png","name":"Day_Grey"}},{"type":"Image","props":{"y":40,"x":83,"skin":"ui/StageChoose/Lock.png","name":"Lock"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageChooseInfoUI.uiView);
        }
    }
}

module ui {
    export class StageInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":206,"height":206},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/StageChoose/Bg_Blue.png"}},{"type":"Image","props":{"y":124,"x":2,"skin":"ui/StageChoose/BT_Green.png"}},{"type":"Image","props":{"y":144,"x":31,"skin":"ui/StageChoose/Lable_Day_Green.png"}},{"type":"Image","props":{"y":36,"x":5,"skin":"ui/StageChoose/Star_Bg_left.png"}},{"type":"Image","props":{"y":0,"x":58,"skin":"ui/StageChoose/Star_Bg_mid.png"}},{"type":"Image","props":{"y":39,"x":131,"skin":"ui/StageChoose/Star_Bg_right.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageInfoUI.uiView);
        }
    }
}

module ui {
    export class StageOneInfoUI extends View {
		public start:Laya.Image;
		public k2:ui.PreUpgradeInfoUI;
		public k1:ui.PreUpgradeInfoUI;
		public k3:ui.PreUpgradeInfoUI;
		public i5:ui.PreUpgradeInfoUI;
		public i1:ui.PreUpgradeInfoUI;
		public i2:ui.PreUpgradeInfoUI;
		public i3:ui.PreUpgradeInfoUI;
		public i4:ui.PreUpgradeInfoUI;
		public k6:ui.PreUpgradeInfoUI;
		public k7:ui.PreUpgradeInfoUI;
		public i7:ui.PreUpgradeInfoUI;
		public i6:ui.PreUpgradeInfoUI;
		public k4:ui.PreUpgradeInfoUI;
		public k5:ui.PreUpgradeInfoUI;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Sprite","props":{"y":123,"x":-57,"width":1975,"name":"Furniture","height":377},"child":[{"type":"Image","props":{"y":93,"x":1870,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":93.00000000000003,"x":1415,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":92.00000000000006,"x":344,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":93,"x":-142,"skin":"stage/zhuozi2.png","scaleY":0.67,"scaleX":0.67,"name":"Desk1_R3"}},{"type":"Image","props":{"y":106.99999999999997,"x":1149.9999999999998,"skin":"stage/zhuozi2.png","scaleY":0.82,"scaleX":0.82,"name":"Desk1_R2"}},{"type":"Image","props":{"y":105.99999999999997,"x":520.9999999999998,"skin":"stage/zhuozi2.png","scaleY":0.82,"scaleX":0.82,"name":"Desk1_R2"}},{"type":"Image","props":{"y":115,"x":28,"skin":"stage/zhuozi2.png","name":"Desk1_R1"}},{"type":"Image","props":{"y":109,"x":787,"skin":"stage/zhuozi2.png","name":"Desk1_R1"}},{"type":"Image","props":{"y":129.00000000000006,"x":1579,"skin":"stage/zhuozi2.png","name":"Desk1_R1"}}]},{"type":"List","props":{"width":100,"name":"k2","height":100},"child":[{"type":"Image","props":{"y":575.8099173553719,"x":1184.0365997638726,"skin":"stage/xiaolongxiaguodi.png","scaleY":0.75,"scaleX":0.75}},{"type":"Image","props":{"y":647.8099173553719,"x":1216.0365997638726,"skin":"stage/xiaolongxiaguodi.png","scaleY":0.8,"scaleX":0.8}},{"type":"Image","props":{"y":725.8099173553719,"x":1251.3223140495866,"skin":"stage/xiaolongxiaguodi.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":822.8099173553719,"x":1286.3223140495868,"skin":"stage/xiaolongxiaguodi.png"}}]},{"type":"List","props":{"width":100,"name":"k1","height":100},"child":[{"type":"Image","props":{"y":553.4132231404958,"x":1312.8347107438017,"skin":"stage/kaolu.png","scaleY":0.75,"scaleX":0.75}},{"type":"Image","props":{"y":619.4132231404958,"x":1348.8347107438017,"skin":"stage/kaolu.png","scaleY":0.8,"scaleX":0.8}},{"type":"Image","props":{"y":688.4132231404958,"x":1387.8347107438017,"skin":"stage/kaolu.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":767.413223140496,"x":1431.8347107438017,"skin":"stage/kaolu.png"}}]},{"type":"List","props":{"width":100,"name":"k3","height":100},"child":[{"type":"Image","props":{"y":552,"x":1463,"skin":"stage/baowenlu.png","skewY":4,"scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":611,"x":1504,"skin":"stage/baowenlu.png","skewY":3,"scaleY":0.75,"scaleX":0.75}},{"type":"Image","props":{"y":674,"x":1545,"skin":"stage/baowenlu.png","skewY":2,"scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":752,"x":1599,"skin":"stage/baowenlu.png"}}]},{"type":"Image","props":{"y":913.4876033057849,"x":1508.1487603305786,"skin":"stage/kucunrouchuan.png","name":"item1"}},{"type":"Image","props":{"y":923.9999999999999,"x":289.9999999999999,"skin":"stage/lajitong.png"}},{"type":"Image","props":{"y":582.9999999999999,"x":1047,"skin":"stage/xiangcai.png","name":"item4"}},{"type":"Image","props":{"y":762,"x":1069,"skin":"stage/huasheng.png","name":"item2"}},{"type":"Image","props":{"y":663.9999999999999,"x":1052,"skin":"stage/maodou.png","name":"item3"}},{"type":"List","props":{"width":100,"name":"k6","height":100},"child":[{"type":"Image","props":{"y":570.9999999999998,"x":719.9999999999998,"width":192,"skin":"ui/suo.png","scaleY":0.65,"scaleX":0.73,"height":95}},{"type":"Image","props":{"y":638.9999999999999,"x":691.0000000000001,"width":192,"skin":"ui/suo.png","scaleY":0.8,"scaleX":0.83,"height":95}},{"type":"Image","props":{"y":720.5585799299366,"x":649.9792619364745,"width":192,"skin":"ui/suo.png","height":95}}]},{"type":"List","props":{"width":100,"name":"k7","height":100},"child":[{"type":"Image","props":{"y":570.9999999999998,"x":847.9999999999999,"width":192,"skin":"ui/suo.png","skewX":13,"scaleY":0.65,"scaleX":0.73,"height":95}},{"type":"Image","props":{"y":642.0000000000001,"x":835.9999999999999,"width":192,"skin":"ui/suo.png","skewX":13,"scaleY":0.8,"scaleX":0.83,"height":95}},{"type":"Image","props":{"y":722.8421052631579,"x":818.421052631579,"width":192,"skin":"ui/suo.png","skewX":13,"height":95}}]},{"type":"Image","props":{"y":863.1052631578946,"x":847.1052631578947,"skin":"stage/kaochuanpan.png","name":"item6"}},{"type":"Image","props":{"y":854,"x":672.0000000000001,"skin":"stage/xiaolongxiapen.png","name":"item7"}},{"type":"List","props":{"width":100,"name":"k4","height":100},"child":[{"type":"Image","props":{"y":519.9999999999999,"x":130.00000000000003,"skin":"stage/pijiu.png"}},{"type":"Image","props":{"y":534,"x":244.99999999999994,"skin":"stage/pijiu.png"}},{"type":"Image","props":{"y":542.0000000000001,"x":358.00000000000006,"skin":"stage/pijiu.png"}}]},{"type":"Image","props":{"y":932.8181818181818,"x":1312.6280991735534,"skin":"stage/kucunxia.png","name":"item5"}},{"type":"Image","props":{"y":990.0000000000001,"x":733.0000000000001,"skin":"stage/bingjilinliceng.png","name":"itemSn16_bg"}},{"type":"Image","props":{"y":991.9999999999999,"x":697.9999999999999,"skin":"stage/bingjilin.png","name":"dangao"}},{"type":"List","props":{"width":100,"name":"k5","height":100},"child":[{"type":"Image","props":{"y":511.00000000000006,"x":583.9999999999999,"skin":"stage/suanmeitang.png","scaleY":0.8,"scaleX":0.8}},{"type":"Image","props":{"y":582,"x":539.9999999999999,"skin":"stage/suanmeitang.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":674,"x":491.9999999999999,"skin":"stage/suanmeitang.png"}}]},{"type":"Image","props":{"y":50,"x":90,"var":"start","skin":"ui/start.png"}},{"type":"PreUpgradeInfo","props":{"y":652,"x":1185,"width":300,"var":"k2","name":"k_2","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":601,"x":1336.9999999999995,"width":300,"var":"k1","name":"k_1","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":582,"x":1501,"width":300,"var":"k3","name":"k_3","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":780,"x":1264,"width":300,"var":"i5","name":"i_5","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":761.9999999999999,"x":1437,"width":300,"var":"i1","name":"i_1","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":617.9999999999999,"x":989,"width":300,"var":"i2","name":"i_2","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":510,"x":950,"width":300,"var":"i3","name":"i_3","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":422,"x":922,"width":300,"var":"i4","name":"i_4","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":556,"x":609,"width":300,"var":"k6","name":"k_6","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":557,"x":790,"width":300,"var":"k7","name":"k_7","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":704,"x":620,"width":300,"var":"i7","name":"i7","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":703,"x":812,"width":300,"var":"i6","name":"i6","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":380,"x":54,"width":300,"var":"k4","name":"k_4","height":200,"runtime":"ui.PreUpgradeInfoUI"}},{"type":"PreUpgradeInfo","props":{"y":400,"x":450,"width":300,"var":"k5","name":"k_5","height":200,"runtime":"ui.PreUpgradeInfoUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.PreUpgradeInfoUI",ui.PreUpgradeInfoUI);

            super.createChildren();
            this.createView(ui.StageOneInfoUI.uiView);
        }
    }
}

module ui {
    export class StageSettlementUI extends View {
		public back:Laya.Image;
		public defeat:Laya.Sprite;
		public retry:Laya.Image;
		public victory:Laya.Sprite;
		public next:Laya.Image;
		public again:Laya.Image;
		public progress:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":10,"x":1790,"var":"back","skin":"ui/StageSettlement/BT_Back.png"}},{"type":"Sprite","props":{"y":108.00000000000003,"x":274,"width":1395,"visible":false,"var":"defeat","height":168},"child":[{"type":"Image","props":{"y":64,"x":-274,"skin":"ui/StageSettlement/Bg_Defeat.png","name":"BG"}},{"type":"Image","props":{"y":19,"x":17,"skin":"ui/StageSettlement/Title_Defeat.png","name":"Title_bg"}},{"type":"Image","props":{"y":-7.000000000000071,"x":477.9999999999999,"skin":"ui/StageSettlement/Defeat.png","name":"Defeat"}},{"type":"Sprite","props":{"y":160.99999999999991,"x":360.0000000000001,"width":667,"name":"Star","height":197},"child":[{"type":"Image","props":{"y":27.999999999999943,"x":26,"skin":"ui/StageSettlement/Star_Bg_left.png","name":"bg_star_left"}},{"type":"Image","props":{"y":-26,"x":215,"skin":"ui/StageSettlement/Star_Bg_mid.png","name":"bg_star_mid"}},{"type":"Image","props":{"y":26,"x":450,"skin":"ui/StageSettlement/Star_Bg_right.png","name":"bg_star_right"}}]},{"type":"Image","props":{"y":750,"x":455,"var":"retry","skin":"ui/StageSettlement/BT_Green.png"},"child":[{"type":"Image","props":{"y":40,"x":161.99999999999977,"skin":"ui/StageSettlement/Lable_retry.png"}}]}]},{"type":"Sprite","props":{"y":0,"x":0,"visible":false,"var":"victory"},"child":[{"type":"Image","props":{"y":173,"x":0,"skin":"ui/StageSettlement/Bg_Victory.png","name":"BG"}},{"type":"Image","props":{"y":127.00000000000003,"x":287.99999999999994,"skin":"ui/StageSettlement/Title_Victory.png","name":"Title_bg"}},{"type":"Image","props":{"y":101.00000000000007,"x":751.9999999999999,"skin":"ui/StageSettlement/Lable_Victory.png","name":"victory"}},{"type":"Image","props":{"y":858,"x":560,"var":"next","skin":"ui/StageSettlement/BT_Green.png"},"child":[{"type":"Image","props":{"y":40,"x":139,"skin":"ui/StageSettlement/Lable_Next.png"}}]},{"type":"Image","props":{"y":856,"x":1035,"var":"again","skin":"ui/StageSettlement/BT_Blue.png"},"child":[{"type":"Image","props":{"y":43.999999999999886,"x":70.99999999999977,"skin":"ui/StageSettlement/Lable_Again.png"}}]},{"type":"Image","props":{"y":307,"x":670.0000000000001,"skin":"ui/StageSettlement/Star_Bg_left.png","name":"bg_star_left"}},{"type":"Image","props":{"y":306.00000000000006,"x":669.0000000000001,"visible":false,"skin":"ui/StageSettlement/Star_left.png","name":"starLeft"}},{"type":"Image","props":{"y":253.00000000000003,"x":859,"skin":"ui/StageSettlement/Star_Bg_mid.png","name":"bg_star_mid"}},{"type":"Image","props":{"y":251.00000000000009,"x":858,"visible":false,"skin":"ui/StageSettlement/Star_mid.png","name":"starMid"}},{"type":"Image","props":{"y":305,"x":1094.0000000000002,"skin":"ui/StageSettlement/Star_Bg_right.png","name":"bg_star_right"}},{"type":"Image","props":{"y":305,"x":1094.9999999999998,"visible":false,"skin":"ui/StageSettlement/Star_right.png","name":"starRight"}}]},{"type":"Sprite","props":{"y":453.99999999999983,"x":385.9999999999999,"width":1141,"name":"Detail","height":256},"child":[{"type":"Image","props":{"y":15.999999999999886,"x":29.000000000000057,"skin":"ui/StageSettlement/bg_01.png","name":"bg"}},{"type":"Image","props":{"y":60.000000000000114,"x":333.9999999999999,"skin":"ui/StageSettlement/xian.png","name":"line01"}},{"type":"Image","props":{"y":60.000000000000114,"x":636.0000000000002,"skin":"ui/StageSettlement/xian.png","name":"line02"}},{"type":"Image","props":{"y":147,"x":96,"skin":"ui/StageSettlement/JB_little.png","name":"JB"}},{"type":"Label","props":{"y":47.00000000000006,"x":140.00000000000006,"width":88,"text":"盈利","name":"Interest","height":61,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":147,"x":412,"skin":"ui/StageSettlement/Free_little.png","name":"Free"}},{"type":"Label","props":{"y":47.00000000000006,"x":446.00000000000017,"width":91,"text":"小费","name":"Free","height":66,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":148,"x":699.9999999999995,"skin":"ui/StageSettlement/Satisfied.png","name":"Satisfied"}},{"type":"Image","props":{"y":148,"x":918.0000000000002,"skin":"ui/StageSettlement/Unsatisfied.png","name":"Unsatisfied"}},{"type":"Label","props":{"y":48.00000000000006,"x":744,"width":265,"text":"顾客满意情况","name":"CustomerDes","height":66,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}}]},{"type":"ProgressBar","props":{"y":749,"x":699,"var":"progress","skin":"ui/StageSettlement/Progress.png","height":50}},{"type":"Image","props":{"y":733.9999999999998,"x":673.9999999999999,"skin":"ui/StageSettlement/JB.png","name":"JB"}},{"type":"Label","props":{"y":746.9999999999998,"x":465.0000000000002,"width":186,"text":"关卡目标","name":"Interest","height":61,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":731.9999999999998,"x":1007,"skin":"ui/StageSettlement/Star_little_yellow.png","name":"Star_JB"}},{"type":"Image","props":{"y":731.9999999999998,"x":1208,"skin":"ui/StageSettlement/Star_little_yellow.png","name":"Star_JB"}},{"type":"Image","props":{"y":730.9999999999998,"x":1382,"skin":"ui/StageSettlement/Star_little_yellow.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageSettlementUI.uiView);
        }
    }
}

module ui {
    export class UpgradeInfoUI extends View {
		public strength:Laya.Image;
		public upgrade:Laya.Image;
		public info:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":4,"x":174,"skin":"ui/shadow_big.png"}},{"type":"Image","props":{"y":48,"x":193,"skin":"ui/point_big.png"}},{"type":"Image","props":{"y":48,"x":268,"skin":"ui/point_big.png"}},{"type":"Image","props":{"y":48,"x":343,"skin":"ui/point_big.png"}},{"type":"Image","props":{"y":243,"x":224,"var":"strength","skin":"ui/quick_finish.png"}},{"type":"Image","props":{"y":177,"x":35,"var":"upgrade","skin":"ui/upgrade.png"}},{"type":"Image","props":{"y":188,"x":413,"var":"info","skin":"ui/info.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.UpgradeInfoUI.uiView);
        }
    }
}

module ui {
    export class UpgradeSuccessUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":197,"x":315,"skin":"ui/FurniturePromote/_0012_升级弹窗-底板.png","name":"Bg"}},{"type":"Image","props":{"y":127,"x":275,"skin":"ui/FurniturePromote/Title_Victory.png","name":"Title_bg"}},{"type":"Image","props":{"y":103,"x":743,"skin":"ui/FurniturePromote/Lable_intensify.png","name":"upgrade"}},{"type":"Image","props":{"y":102,"x":739,"skin":"ui/FurniturePromote/Lable_levelup.png","name":"intensify"}},{"type":"Sprite","props":{"y":302,"x":344,"width":1243,"name":"Details","height":515},"child":[{"type":"Image","props":{"y":18.000000000000057,"x":24.999999999999886,"width":1186,"skin":"ui/FurniturePromote/Bg_01.png","sizeGrid":"46,0,51,0","name":"Bg","height":456}},{"type":"Sprite","props":{"y":389,"x":174.9999999999999,"width":213,"name":"Level","height":68},"child":[{"type":"Image","props":{"y":4,"x":33,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg1"},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":85,"width":46,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":132,"width":46,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":8,"x":35,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg1"},"child":[{"type":"Image","props":{"y":7.000000000000114,"x":4.999999999999886,"skin":"ui/FurniturePromote/Round.png","name":"round1"}}]},{"type":"Image","props":{"y":8,"x":86.00000000000011,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg2"},"child":[{"type":"Image","props":{"y":6.000000000000114,"x":4.999999999999773,"skin":"ui/FurniturePromote/Round.png","name":"round2"}}]},{"type":"Image","props":{"y":8,"x":135,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg3"},"child":[{"type":"Image","props":{"y":6,"x":4.999999999999886,"skin":"ui/FurniturePromote/Round.png","name":"round3"}}]}]},{"type":"Image","props":{"y":65,"x":71.00000000000006,"skin":"ui/zhuozi2.png","name":"Furniture"}},{"type":"Label","props":{"y":108,"x":567.0000000000002,"width":191,"text":"制作时间","name":"Des1","height":55,"fontSize":40,"font":"SimHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":176,"x":555,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":180,"width":117,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":184,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":104.00000000000006,"x":1117.9999999999998,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}},{"type":"Label","props":{"y":290,"x":567.9999999999998,"width":191,"text":"顾客耐心","name":"Des2","height":55,"fontSize":40,"font":"Microsoft YaHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":366,"x":554,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":146,"width":151,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":154,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":294.9999999999999,"x":1119.0000000000002,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}}]},{"type":"Image","props":{"y":848,"x":757,"skin":"ui/FurniturePromote/BT_Green.png","name":"Confirm"},"child":[{"type":"Image","props":{"y":30.999999999999886,"x":140.00000000000023,"skin":"ui/FurniturePromote/Lable_Confirm.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.UpgradeSuccessUI.uiView);
        }
    }
}
