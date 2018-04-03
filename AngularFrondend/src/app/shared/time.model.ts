
export class time {
    public uuid: string;
    public description: string;
    public date: string;
    public workedHours: string;
    public paid: string;
  
    constructor(uuid: string, description: string, date: string,paid:string, workedHours: string) {
      this.uuid = uuid;
      this.description = description;
      this.date = date;
      this.workedHours = workedHours;
      this.paid = paid;
    }
  }