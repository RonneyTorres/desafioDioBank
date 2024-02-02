import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { UniversityAccount } from './class/UniversityAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
peopleAccount.withdraw(35)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.getLoan(200)
companyAccount.deposit(100)
companyAccount.withdraw(25)
companyAccount.getBalance()

const universityAccount: UniversityAccount = new UniversityAccount('Aluno', 30)
universityAccount.deposit(100)
universityAccount.getBalance()
universityAccount.deposit(100)
universityAccount.getBalance()