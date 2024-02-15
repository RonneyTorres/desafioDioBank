import { DioAccount } from "./DioAccount";

export class UniversityAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.getValidateStatus()){
      this.setBalance(value + 10)
      console.log(`Você depositou ${value} reais`)
      this.getBalance()
    }
  }

}