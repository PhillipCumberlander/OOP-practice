///Encapsulation

let newEmployee = {
    name: "Phillip",
    bday: "December 3rd",
    wage: 60000,
    age: 28,
    overview: function() {
        console.log(this.name + " is our new employee. He was born on " + this.bday + "." + " He makes " + this.wage + " at " + this.age + " years old")
    }
}
newEmployee.overview()

///Destructing Objects

let {name, bday, gender = "unknown"} = newEmployee
// console.log(name + bday + gender)

function print({name, bday, age}){

    console.log(`My name is ${name} and my bday is ${bday} and I am ${age} years old`)
}
print(newEmployee)

///Destructing Arrays

let names = ["Kobe", "Lebron", "Jordan"]

let [lakers, Miami, Bulls] = names

// console.log(lakers)
// console.log(Miami)
// console.log(Bulls)

function liquids(){
    return ['juice', 'milk']
}

let [hiC, dairy] = liquids()
console.log(hiC)
console.log(dairy)



