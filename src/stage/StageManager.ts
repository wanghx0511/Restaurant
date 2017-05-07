class StageManager{
    public static stage: Stage = null;

    public createStage() {
        StageManager.stage = new Stage(1);

        var bg = new Laya.Sprite();
        bg.loadImage("res/atlas/beijing.jpg");
        bg.pos(-488, 0);
        StageManager.stage.addChild(bg);
        Laya.stage.addChild(StageManager.stage);
    }
}