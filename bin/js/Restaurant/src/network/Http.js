var network;
(function (network) {
    var Event = Laya.Event;
    var HttpRequest = Laya.HttpRequest;
    var Byte = laya.utils.Byte;
    var Browser = Laya.Browser;
    var Loader = Laya.Loader;
    var Http = (function () {
        function Http() {
            this.protoBuf = Browser.window.dcodeIO.ProtoBuf;
        }
        Http.prototype.request = function (msg) {
            this.hr = new HttpRequest();
            this.hr.once(Event.PROGRESS, this, this.onHttpRequestProgress);
            this.hr.once(Event.COMPLETE, this, this.onHttpRequestComplete);
            this.hr.once(Event.ERROR, this, this.onHttpRequestError);
            var buffer = msg.encode().toBuffer();
            var byte = new Byte();
            var len = buffer.byteLength + Http.MSG_HEAD_SIZE;
            byte.writeInt32(len); //包总长
            byte.writeInt16(msg.$options.msgid); //消息ID
            byte.writeArrayBuffer(buffer); //消息体
            this.hr.send('http://123.206.219.172:9001', byte.buffer, 'post', 'arraybuffer');
        };
        Http.prototype.onHttpRequestError = function (e) {
            console.log(e);
        };
        Http.prototype.onHttpRequestProgress = function (e) {
            console.log(e);
        };
        Http.prototype.onHttpRequestComplete = function (e) {
            var dataView = new DataView(e);
            //包总长
            var len = dataView.getInt32(0, true);
            //取出消息ID
            var msgid = dataView.getInt16(4, true);
            //消息体
            var byte = new Byte();
            for (var i = Http.MSG_HEAD_SIZE; i < dataView.byteLength; i++) {
                byte.writeByte(dataView.getInt8(i));
            }
            var proto = Loader.getRes("res/msg.proto");
            var UserModel = this.protoBuf.loadProto(proto).build("UserModel");
            var userInfo = UserModel.decode(byte.buffer);
        };
        return Http;
    }());
    Http.MSG_HEAD_SIZE = 6; //消息ID长度
    network.Http = Http;
})(network || (network = {}));
//# sourceMappingURL=Http.js.map