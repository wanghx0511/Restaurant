// class Upgrade extends Laya.Sprite{
//     private stageSn : number;
//     private configStage : ConfigStage = new ConfigStage();
//     private configItem: ConfigItem = new ConfigItem();
//     private configKitchenware : ConfigKitchenware = new ConfigKitchenware();
//     public upgradeUiInfo: UpgradeInfo;
//     public uiInfo : StageOneUpgradeInfo;
//     constructor(stageSn : number) {
//         super();
//         this.stageSn = stageSn;
//         console.log("当前关sn=" + stageSn);
//         var confStage = this.configStage.get(this.stageSn);
//         //场景图
//         var bg = new Laya.Sprite();
//         bg.loadImage("res/atlas/beijing.jpg");
//         bg.pos(-488, 0);
//         this.addChild(bg);
//         //操作台
//         var caozuotai = new Laya.Sprite();
//         caozuotai.loadImage("res/atlas/caozuotai.png");
//         caozuotai.pos(-275, 490);
//         this.addChild(caozuotai);
//         //创建UI
//         this.uiInfo = new StageOneUpgradeInfo();
//         this.addChild(this.uiInfo);
//         var sprites = StageManager.data;
//         for(var sn in sprites["item"]){
//             var configItem = this.configItem.getBy("itemSn", sn, "level", sprites["item"][sn]);
//             var item = new Item(configItem);
//             var uiItem = this.uiInfo.getChildByName("itemSn" + sn) as Laya.Sprite;
//             if(uiItem == null) continue;
//             item.pos(uiItem.x, uiItem.y);
//             item.scale(uiItem.scaleX, uiItem.scaleY);
//             item.pivot(uiItem.pivotX, uiItem.pivotY);
//             this.addChild(item);
//             //替换后删除
//             this.uiInfo.removeChildByName("itemSn" + sn);
//             var uiView = this.uiInfo.getChildByName("itemSn" + sn + "_ui") as Laya.View;
//             if(uiView == null) {
//                 console.log("warning::::: 缺少ui，name=itemSn" + sn + "_ui");
//                 continue;
//             }
//             uiView.on("click", this, this.onUIClick,["i"+":"+ sn+":"+sprites["item"][sn]]);
//         }
//         for(var id in sprites["kitchenware"]) {
//             var configKitchenware = this.configKitchenware.getBy("id", id, "level", sprites["kitchenware"][id]);
//             for(var i = 1; i <= configKitchenware.spacenum; i++) {
//                 var uiKitchenware = this.uiInfo.getChildByName("kitchenwareSn" + id + "_" + i) as Laya.Sprite;
//                 if(uiKitchenware == null) continue;
//                 var kitchenware = eval("new " + configKitchenware.type + "(" + id + "," + i + ")");
//                 kitchenware.pos(uiKitchenware.x, uiKitchenware.y);
//                 kitchenware.scale(uiKitchenware.scaleX, uiKitchenware.scaleY);
//                 kitchenware.pivot(uiKitchenware.pivotX, uiKitchenware.pivotY);
//                 this.addChild(kitchenware);
//                 // //如果是放置台则加到列表里
//                 // if(configKitchenware.type == "Plate") {
//                 //     StageManager.stage.plates.push(kitchenware);
//                 // }
//                 // //如果是锅则加到列表里
//                 // else if(configKitchenware.type == "Pot") {
//                 //     StageManager.stage.pots.push(kitchenware);
//                 // }
//                 //替换后删除
//                 this.uiInfo.removeChildByName("kitchenwareSn" + id + "_" + i);
//             }
//             var uiView = this.uiInfo.getChildByName("kitchenwareSn" + id + "_" + configKitchenware.spacenum + "_ui") as Laya.View;
//             if(uiView == null) {
//                 console.log("warning::::: 缺少ui，name=kitchenwareSn" + id + "_" + configKitchenware.spacenum + "_ui");
//                 continue;
//             }
//             uiView.visible = true;
//             uiView.on("click", this, this.onUIClick, ["k" + ":"+ id+":"+configKitchenware.spacenum]);
//         }
//         Laya.stage.addChild(this);
//     }
//     private onUIClick(param : any[]){
//         var type = param[0];
//         var sn = param[2];
//         var level = param[4];
//         if(type == "k"){
//             var uiView = this.uiInfo.getChildByName("kitchenwareSn" + sn + "_" + level + "_ui") as Laya.View;
//             this.upgradeUiInfo = new UpgradeInfo();
//             this.upgradeUiInfo.setParam("kitchenware", sn, level);
//             this.upgradeUiInfo.pos(uiView.x, uiView.y);
//             this.upgradeUiInfo.pivot(uiView.pivotX, uiView.pivotY);
//             this.upgradeUiInfo.scale(uiView.scaleX, uiView.scaleY);
//             this.addChild(this.upgradeUiInfo);
//             this.uiInfo.removeChildByName("kitchenwareSn" + sn + "_" + level + "_ui") as Laya.View;
//         }
//         if(type == "i") {
//             var uiView = this.uiInfo.getChildByName("itemSn" + sn + "_" + level + "_ui") as Laya.View;
//             this.upgradeUiInfo = new UpgradeInfo();
//             this.upgradeUiInfo.setParam("item", sn, level);
//             this.upgradeUiInfo.pos(uiView.x, uiView.y);
//             this.upgradeUiInfo.pivot(uiView.pivotX, uiView.pivotY);
//             this.upgradeUiInfo.scale(uiView.scaleX, uiView.scaleY);
//             this.addChild(this.upgradeUiInfo);
//             this.uiInfo.removeChildByName("itemSn" + sn + "_" + level + "_ui") as Laya.View;
//         }
//     }
// } 
//# sourceMappingURL=Upgrade.js.map