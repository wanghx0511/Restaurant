module config {
    export class ConfigKitchenware{
        public sn: number;
		public id: number;
		public picture: string;
        public automatic: boolean;
        public level: number;
        public cooldown: number;
        public singetime: number;
        public spacenum: number;
        public lvupcost: string;
        public unlock: number;

		constructor(sn: number, id: number, picture: string, automatic: boolean, level: number
        , cooldown: number, singetime: number, spacenum: number, lvupcost: string, unlock: number){
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
    }
}