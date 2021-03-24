// 1. Declare uma variável de nome weight
//let weight

// 2. Que tipo de dado é a variável acima?
//console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String
        *age: number (integer = número inteiro)
        *stars: number (float)
        *isSubscribed: Boolean
     
//let name = "Guiga"
//let age = 28
//let stars = 4.8
//let isSubscribed = true     

*/



/*
    4. A variável student abaixo é de que tipo de dados?
    let student = {};

    console.log(typeof student)
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

let student = {
name: "Guiga",
age: 28,
stars: 4.8,
isSubscribed: true

}

console.log(student)
    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto



let student = {
    name: "Guiga",
    age: 28,
    stars: 4.8,
    isSubscribed: true
    
    }

console.log(`${student.name} de idade ${student.age} pesa ${student.stars} kg.`)

*/

//objeto da questão 4

let student = {
    name: "Guiga",
    age: 28,
    stars: 4.8,
    isSubscribed: true
}

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. 
*/

students = [
    student
]

 //console.log(students)


 /*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])
 /*
    8. Crie um novo student e coloque na posição 1 do Array students
*/



 /*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por quê? 
    console.log(a)
    var a = 1

    -- Undefined pq a variavel está depois do console.

    -- Se fosse ''let'' daria um erro de referencia
*/






