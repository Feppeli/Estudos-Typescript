// Existem dois conceitos de interfaces o primeiro relacionado a atribuição de uma variável - Criando um Objeto:

interface Person { // Interface com atribuições vazias
    name: string;
    age: number
}

function  printName(person: Person) { // criando função para mostrar o nome atribuido nas interfaces
    console.log(person.name)
}

const john = {name: 'John', age: 21};   // atribuição das interfaces
const mary = {name: 'Mary', age: 21, phone: '123-45678'}; //atribuição das interfaces
printName(john);
printName(mary);

// O segundo conceito de interface no Typescript está relacionado á POO considere o código abaixo:
interface Comparable {
    compareTo(b): number;
}
class MyObject implements Comparable {
    age:number;
    compareTo(b): number {
        if (this.age ===b.age){
            return 0;
        }
        return this.age > b.age ? 1: -1;
    }
}

// O Comparable diz a classe MyObject que ela deve implementar um método chamado compareTo que recebe um argumento.