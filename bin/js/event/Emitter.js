/**
 * 事件
 */
var Emitter = (function () {
    function Emitter() {
    }
    /**
     * 注册事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.register = function (name, callback, context) {
        var observers = Emitter.listeners[name];
        if (!observers) {
            Emitter.listeners[name] = [];
        }
        Emitter.listeners[name].push(new Observer(callback, context));
    };
    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.remove = function (name, callback, context) {
        var observers = Emitter.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            if (observer.compar(context)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete Emitter.listeners[name];
        }
    };
    /**
     * 发送事件
     * @param name 事件名称
     */
    Emitter.fire = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var observers = Emitter.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            observer.notify.apply(observer, [name].concat(args));
        }
    };
    return Emitter;
}());
/** 监听数组 */
Emitter.listeners = {};
//# sourceMappingURL=Emitter.js.map