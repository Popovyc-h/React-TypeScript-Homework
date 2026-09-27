// task 1

let userName: string
let userAge: number
let isAdmin: boolean

let skills: string[] = ['HTML', 'CSS', 'JS']

// userAge = '123'

//task 2

function formatPrice(price: number, currency: string): string {
  if (currency === '$') {
    return `${currency}${price}`
  } else if (currency === 'грн') {
    return `${price} ${currency}`
  }
  return ''
}

function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title}. ${name}`
  }

  return `Hello, ${name}`
}

function logMessage(message: string): void {
  console.log(message)
}

// task 3

interface User {
  readonly id: number
  name: string
  email: string
  phone?: string
}

const user1: User = {
  id: 1,
  name: 'Bob',
  email: 'Bob@gmail.com',
}

// user1.id = 999

// task 4

type ID = string | number
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled'

function printStatus(orderId: ID, status: OrderStatus): void {
  console.log(`Id: ${orderId}\nStatus: ${status}`)
}

// task 5

enum Role {
  Admin,
  User,
  Guest,
}

function checkAccess(role: Role): boolean {
  if (role === Role.Admin) {
    return true
  }

  return false
}

// task 6

function doubleValue(input: string | number): string | number {
  if (typeof input === 'number') {
    return input * 2
  }
  return input.repeat(2)
}

// task 7

class BankAccount {
  constructor(
    public owner: string,
    private balance: number = 0,
  ) {}

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount
    }
  }

  getBalance() {
    return this.balance
  }
}

function App() {
  console.log(formatPrice(200, '$'))
  console.log(formatPrice(50, 'грн'))

  console.log(greet('John'))
  console.log(greet('John', 'Mr'))

  logMessage('Hello')

  printStatus(1, 'pending')
  printStatus('2', 'shipped')

  console.log(checkAccess(Role.User))
  console.log(checkAccess(Role.Admin))
  console.log(checkAccess(Role.Guest))

  console.log(doubleValue(3))
  console.log(doubleValue('Hi'))

  const acc = new BankAccount('Bob')

  console.log(acc.getBalance())
  acc.deposit(200)
  acc.deposit(-100)
  console.log(acc.getBalance())
  // console.log((acc.balance += 1))

  return <></>
}

export default App
