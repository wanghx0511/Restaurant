class Stage extends Laya.Node{

    constructor() {
        super();
        Emitter.register("nihao", this.test, this);
    }
    
    public test() {
        console.log("nihao");
    }
}