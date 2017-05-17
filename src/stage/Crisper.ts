class Crisper extends Laya.Sprite{
        //配置
    private configKitchenware: any;
    public item: Item = null;

    constructor(id: number, level: number) {
        super();
        this.configKitchenware = new ConfigKitchenware().getBy("id", id, "level", level);
        this.loadImage("stage/" + this.configKitchenware.picture);
    }

    public addItem(item: Item) {
        this.item = item;
        this.item.box.handle();
        this.item.pos(this.x, this.y);
        this.item.box = this;
    }

    public handle() {
        this.item = null;
    }
}