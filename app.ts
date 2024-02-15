import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { UniversityAccount } from './class/UniversityAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.getBalance()
peopleAccount.deposit(80)
peopleAccount.withdraw(35)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.getBalance()
companyAccount.deposit(100)
companyAccount.withdraw(25)
companyAccount.getLoan(200)

const universityAccount: UniversityAccount = new UniversityAccount('Aluno', 30)
console.log(universityAccount)
universityAccount.getBalance()
universityAccount.deposit(50)
universityAccount.withdraw(20)


