interface myUser {
    name: string
    age: number
    email: string
    address?: {
        city: string
        country: string
    }
}


const mango:myUser = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly:myUser = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

console.log(mango,poly)