export class user {
    public Name: string;
    public UserId: string;
    public AccountNumber: string;
    public CurrentWage: number;

    constructor(name: string, userId: string, accountNumber: string, currentWage: number) {
            this.Name = name;
            this.UserId = userId;
            this.AccountNumber = accountNumber;
            this.CurrentWage = currentWage;
    }
  }