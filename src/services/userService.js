export const userService = {
    getUser
}

const gUser = {
    name: "Donald Trump",
    coins: 100,
    moves: []
}


function getUser() {
    return {...gUser}
}

