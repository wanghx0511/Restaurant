module network{

	import Event = Laya.Event;
	import HttpRequest = Laya.HttpRequest;
	import Byte = laya.utils.Byte;
	import Browser = Laya.Browser;
	import Loader = Laya.Loader;

	export class Http{
		private hr: HttpRequest;
		private protoBuf:any = Browser.window.dcodeIO.ProtoBuf;
		private static MSG_HEAD_SIZE: number = 6;			//消息ID长度

		constructor(){

		}

		public request(msg: any): void {
			this.hr = new HttpRequest();
			this.hr.once(Event.PROGRESS, this, this.onHttpRequestProgress);
			this.hr.once(Event.COMPLETE, this, this.onHttpRequestComplete);
			this.hr.once(Event.ERROR, this, this.onHttpRequestError);

			var buffer:any = msg.encode().toBuffer();

			var byte: Byte = new Byte();
			var len = buffer.byteLength + Http.MSG_HEAD_SIZE;
			byte.writeInt32(len);					//包总长
			byte.writeInt16(msg.$options.msgid);	//消息ID
			byte.writeArrayBuffer(buffer);			//消息体

			this.hr.send('http://123.206.219.172:9001', byte.buffer, 'post', 'arraybuffer');
		}


		private onHttpRequestError(e: any): void {
			console.log(e);
		}

		private onHttpRequestProgress(e: any): void {
			console.log(e);
		}

		private onHttpRequestComplete(e: any): void {
			var dataView = new DataView(e);
			//包总长
			var len = dataView.getInt32(0, true);
			
			//取出消息ID
			var msgid = dataView.getInt16(4, true);

			//消息体
			var byte: Byte = new Byte();
			for(var i = Http.MSG_HEAD_SIZE; i < dataView.byteLength; i++) {
				byte.writeByte(dataView.getInt8(i));
			}

			var proto = Loader.getRes("res/msg.proto");
			var UserModel: any = this.protoBuf.loadProto(proto).build("UserModel");
			var userInfo:any = UserModel.decode(byte.buffer);
		}
	}
}