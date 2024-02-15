import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.getValidateStatus()) {
      this.setBalance(value)
      console.log(`Você pegou um empréstimo no valor de ${value} reais.`)
      this.getBalance()
    }
  }
}
