
export class invoice {
    public uuid: string;
    public paid: string;
    public registerId: string;
    public currentWage: number;
  
    constructor(uuid: string, paid: string, registerId: string, currentWage: number) {
      this.uuid = uuid;
      this.paid = paid;
      this.registerId = registerId;
      this.currentWage = currentWage;
    }
  }