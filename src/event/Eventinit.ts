/**
 * 事件初始化
 */
class Eventinit {
    public static init() {
        Emitter.register("nihao", new Stage().test, null);
    }
}