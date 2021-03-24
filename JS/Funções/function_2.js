// function scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
    
}

console.log(createThink(subject))
console.log(subject)



//arrow function

const sayMyName = (name) => {
        console.log(name)
}

sayMyName ('Guiga')




// callback function    

function sayMyName(name) {
    console.log ('antes de executar a função callback')

    name()

    console.log('depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)


/* Function() constructor

*expressão new
*criar novo objeto
*this keyword

*/

function Person(name) {
    this.name = name
}

const guiga = new Person("Guiga")
const joao = new Person("João")

console.log(guiga)
console.log(joao)


