
export class invoice {
    public uuid: string;
    public paid: string;
    public registerId: string;
    public currentWage: number;
    public totalprice: number;
  
    constructor(uuid: string, paid: string, registerId: string,totalprice:number, currentWage: number) {
      this.uuid = uuid;
      this.paid = paid;
      this.registerId = registerId;
      this.totalprice = totalprice;
      this.currentWage = currentWage;
    }
  }