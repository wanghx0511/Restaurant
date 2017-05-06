class ConfigCustomer{
	private confJson: any;

	constructor(){
		this.confJson = eval(Loader.getRes("res/json/ConfCustomer.json"));
	}

	public get(sn : number): any {
		for(var conf of this.confJson) {
			if(conf.sn == sn) return conf;
		}
	}

	public getBy(...args) {
		var paramsFilter = [];
		for(var i = 0; i < args.length; i += 2) {
			var key = args[i]
			var val = args[i + 1];
			paramsFilter.push([key, val]);
		}

		for(var conf of this.confJson) {
			var bingo: boolean = true;
			
			for(var filter of paramsFilter) {
				var filterKey = filter[0];
				var filterVal = filter[1];
				
				if(conf[filterKey] != filterVal) {
					bingo = false;
					break;
				}
			}

			if(bingo) return conf;
		}

	}

	public findBy(...args) {
		var arr = []
		var paramsFilter = [];

		for(var i = 0; i < args.length; i += 2) {
			var key = args[i]
			var val = args[i + 1];
			paramsFilter.push([key, val]);
		}

		for(var conf of this.confJson) {
			var bingo: boolean = true;
			
			for(var filter of paramsFilter) {
				var filterKey = filter[0];
				var filterVal = filter[1];
				
				if(conf[filterKey] != filterVal) {
					bingo = false;
					break;
				}
			}

			if(bingo) arr.push(conf);
		}
		return arr;
	}

	public findAll(): any {
		return this.confJson;
	}
}