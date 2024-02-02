export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Você depositou ${value} reais`)
    }
  }

  withdraw = (value: number): void => {
    if(this.balance > value) {
      this.balance -= value
      console.log(`Você sacou ${value} reais`)
      this.getBalance
    }else {
      console.log(`Saldo Insulficiente!`)
    }
  }

  getBalance = (): void => {
    console.log(`Seu Saldo é de ${this.balance} reais`)
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
