var config;
(function (config) {
    var ConfigKitchenware = (function () {
        function ConfigKitchenware(sn, id, picture, automatic, level, cooldown, singetime, spacenum, lvupcost, unlock) {
            this.sn = sn;
            this.id = id;
            this.picture = picture;
            this.automatic = automatic;
            this.level = level;
            this.cooldown = cooldown;
            this.singetime = singetime;
            this.spacenum = spacenum;
            this.lvupcost = lvupcost;
            this.unlock = unlock;
        }
        return ConfigKitchenware;
    }());
    config.ConfigKitchenware = ConfigKitchenware;
})(config || (config = {}));
//# sourceMappingURL=ConfigKitchenware.js.map