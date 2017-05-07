/**
 * 事件初始化
 */
var Eventinit = (function () {
    function Eventinit() {
    }
    Eventinit.init = function () {
        Emitter.register("nihao", new Stage().test, null);
    };
    return Eventinit;
}());
//# sourceMappingURL=Eventinit.js.map