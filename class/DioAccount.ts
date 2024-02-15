
export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance += balance
  }
  
  getBalance = (): void => {
    console.log(`Seu Saldo é de ${this.balance} reais`)
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Você depositou ${value} reais`)
      this.getBalance()
    }
  }

  withdraw = (value: number): void => {
    if(this.balance > value && this.getValidateStatus()) {
      this.balance -= value
      console.log(`Você sacou ${value} reais`)
      this.getBalance()
    }else {
      console.log(`Saldo Insulficiente!`)
    }
  }
 

  protected getValidateStatus = (): boolean => {
    return this.validateStatus()
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
