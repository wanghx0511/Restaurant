class StageOneUpgradeInfo extends ui.StageOneUpgradeUI{

    constructor() {
        super();
        this.startGame.on("click", this, this.onStartGame);
    }

    public onStartGame(){
        var stageManager = new StageManager();
        stageManager.createStage();
    }

}