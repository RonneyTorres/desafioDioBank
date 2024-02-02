import { DioAccount } from "./DioAccount";

export class UniversityAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.getValidateStatus()){
      this.balance = value + this.balance + 10
      console.log(`Você depositou ${value} reais`)
    }
  }

}