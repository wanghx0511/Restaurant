var StageManager = (function () {
    function StageManager() {
        //模拟服务端发的数据
        this.data = { "item": { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1 }, "kitchenware": { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1 } };
    }
    StageManager.prototype.createStage = function () {
        // Laya.stage.destroy();
        StageManager.stage = new StageOne(1);
        Laya.stage.addChild(StageManager.stage);
        console.log(this.data["kitchenware"][7]);
    };
    return StageManager;
}());
StageManager.stage = null;
//# sourceMappingURL=StageManager.js.map