class UpgradeInfo extends ui.UpgradeInfoUI{

    private type : string;
    private sn : number;
    private level : number;
    private stageManager : StageManager = new StageManager();

    constructor() {
        super();
        this.upgrade.on("click", this, this.onUpgradeClick);
        this.strength.on("click", this, this.onStrengthClick);
        this.info.on("click", this, this.onInfoClick);
    }

    public setParam(type : string, sn : number, level : number) {
        this.type = type;
        this.sn = sn;
        this.level = level;
    }

    private onUpgradeClick(){

        if(this.type == "item") {
            var levelNow : number= this.level + 1;
            this.stageManager.data["item"][this.sn] = levelNow;
        }
        if(this.type == "kitchenware") {
            var levelNow : number= this.level + 1;
            this.stageManager.data["kitchenware"][this.sn] = levelNow;
        }
        console.log(this.sn);
        console.log(this.stageManager.data["kitchenware"][this.sn]);
        
    }

    private onStrengthClick(){

    }

    private onInfoClick(){

    }

}