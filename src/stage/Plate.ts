//盘子
class Plate extends Laya.Sprite{
    //配置
    private configKitchenware: any;
    //装的食材
    public item: Item = null;

    constructor(id: number) {
        super();
        this.configKitchenware = new ConfigKitchenware().getBy("id", id);
        this.loadImage("atlas/" + this.configKitchenware.picture);
    }

    public handle() {
        this.item = null;
    }

    public getMakeItemSn() {
        return this.configKitchenware.itemSn;
    }

}