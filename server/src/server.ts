interface User {
    name: string
    age: number
}

function showUser(user: User){
    console.log(user);
}

showUser({
    name: 'ContaComigo',
    age: 10
})