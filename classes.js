//1
class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender
  }
  get nameAndGender() {
    return `${this.name} ${this.gender}`
  }
  set nameAndGender(str) {
    return this._nameAndGender = str
  }
  stringAuthor() {
    return `${this.name} is a ${this.gender} and she is an author. You can contact her with this email - ${this.email}`
    }
}
let a = new Author('Jane Jey', 'jeyyuk@gmail.com', 'female');
a.nameAndGender // "Jane Jey female"
a.stringAuthor() // "Jane Jey is a female and she is an author. You can contact her with this email - jeyyuk@gmail.com"

class Book extends Author {
    constructor(title, author, quantity, price) {
        super()
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.price = price;
    }
    get bookNameAndQuantity() {
        return `${this.title} has ${this.quantity} examples.`
    }
    set bookNameAndQuantity(str) {
        this._title = str
    }
        getProfit() {
        return this.quantity * this.price
    }
    stringBook() {
        return `If You want to buy ${this.title} book, You must pay ${this.price}. This book has only ${this.quantity} examples and it's wrote by ${this.author}.`
    }
}
let b = new Book('<Heyyou>', a.name, 200, 20000);
b.bookNameAndQuantity // "<Heyyou> has 200 examples."
b.stringBook() // "If You want to buy <Heyyou> book, You must pay 20000. This book has only 200 examples and it's wrote by Jane Jey."

//2
class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance
  }
  get forBalance () {
    return  this.balance
  }
  set forBalance (n) {
    if(typeof n !== 'number') {
      alert('enter a number')
    } else {
      return this.balance = n
    }
  }
  get forName () {
    return this.name
  }
  set forName (str) {
    if (typeof str !== 'string') {
      alert('enter a name')
    } else {
      return this.name = str
    }
  }
  get forId () {
    return this.id
  }
  credit(amount) {
    this.balance += amount;
    return this.balance
  }
  debit(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      return this.balance
    } else {
      alert('Amount exceeded balance.')
    }
  }
  transferTo(anotherAccount, amount) {
    let anotherAccBalance = 0;
    if (amount < this.balance) {
      this.balance = this.balance - amount;
      anotherAccBalance += amount
    } else {
      alert('Amount exceeded balance.')
    }
  }
  stringAccount () {
    return `${this.account}'s balance is {this.balance}.`
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if(accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance ==== accountSecond.balance) {
      alert('Accounts are the same.')
    } else {
      alert('Accounts are different.')
    }
  }
}

//3
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age
  }
  get fullName (){
    return `${this.firstName} ${this.lastName}`
  }
  set fullName (str) {
    fullName = str.split(' ')
   }
  stringPerson (){
    return `My name is ${this.firstName} and lastname is ${this.lastName}. I'm ${this.age} years old and my gender is ${this.gender}.`
  }
}
class Student extends Person {
  constructor(program, year, fee) {
    super()
    this.program = program;
    this.year = year;
    this.fee = fee
  }
  get feeInYear () {
    return this.fee
  }
  set feeInYear (n) {
    this.fee = n
  }
  passExam(grade) {
    let point = 0;
    for (let i in this.program) {
      let passedOrNot;
      if (grade >= 50) {
        passedOrNot = `${this.program[i]} passed.`
      }
      else if (grade < 50){
        passedOrNot = `${this.program[i]} doesn't passed.`
      }
      point += grade;
      console.log(passedOrNot)
    }
    if (point >= 50) {
      ++this.year
    }
  }
}
class Staff extends Person {
  constructor(program, pay) {
    super()
    this.program = program;
    this.pay = pay
  }
  get payment (){
    return this.pay
  }
  set payment (n) {
    if(typeof n === 'number') {
      return this.pay
    } else {
      alert('enter number')
    }
  }
  stringStaff (){
    return `For this program- ${this.program} you mast pay ${this.pay}$`
  }
}