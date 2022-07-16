export {}
function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'wayne'
}

fullName(p)


interface Person {
    firstName: string,
    lastName ?: string
}

function fullNamea(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}