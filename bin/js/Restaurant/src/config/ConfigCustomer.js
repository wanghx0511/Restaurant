var ConfigCustomer = (function () {
    function ConfigCustomer() {
        this.confJson = eval(Loader.getRes("res/json/ConfCustomer.json"));
    }
    ConfigCustomer.prototype.get = function (sn) {
        for (var _i = 0, _a = this.confJson; _i < _a.length; _i++) {
            var conf = _a[_i];
            if (conf.sn == sn)
                return conf;
        }
    };
    ConfigCustomer.prototype.getBy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var paramsFilter = [];
        for (var i = 0; i < args.length; i += 2) {
            var key = args[i];
            var val = args[i + 1];
            paramsFilter.push([key, val]);
        }
        for (var _a = 0, _b = this.confJson; _a < _b.length; _a++) {
            var conf = _b[_a];
            var bingo = true;
            for (var _c = 0, paramsFilter_1 = paramsFilter; _c < paramsFilter_1.length; _c++) {
                var filter = paramsFilter_1[_c];
                var filterKey = filter[0];
                var filterVal = filter[1];
                if (conf[filterKey] != filterVal) {
                    bingo = false;
                    break;
                }
            }
            if (bingo)
                return conf;
        }
    };
    ConfigCustomer.prototype.findBy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var arr = [];
        var paramsFilter = [];
        for (var i = 0; i < args.length; i += 2) {
            var key = args[i];
            var val = args[i + 1];
            paramsFilter.push([key, val]);
        }
        for (var _a = 0, _b = this.confJson; _a < _b.length; _a++) {
            var conf = _b[_a];
            var bingo = true;
            for (var _c = 0, paramsFilter_2 = paramsFilter; _c < paramsFilter_2.length; _c++) {
                var filter = paramsFilter_2[_c];
                var filterKey = filter[0];
                var filterVal = filter[1];
                if (conf[filterKey] != filterVal) {
                    bingo = false;
                    break;
                }
            }
            if (bingo)
                arr.push(conf);
        }
        return arr;
    };
    ConfigCustomer.prototype.findAll = function () {
        return this.confJson;
    };
    return ConfigCustomer;
}());
//# sourceMappingURL=ConfigCustomer.js.map