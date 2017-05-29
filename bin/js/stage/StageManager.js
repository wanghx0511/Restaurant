var StageManager = (function () {
    function StageManager() {
    }
    StageManager.createStage = function (stageSn) {
        // Laya.stage.destroy();
        StageManager.stage = new StageOne(stageSn);
        Laya.stage.addChild(StageManager.stage);
    };
    return StageManager;
}());
StageManager.stage = null;
//模拟服务端发的数据
StageManager.data = { "item": { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1 }, "kitchenware": { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1 } };
//# sourceMappingURL=StageManager.js.map