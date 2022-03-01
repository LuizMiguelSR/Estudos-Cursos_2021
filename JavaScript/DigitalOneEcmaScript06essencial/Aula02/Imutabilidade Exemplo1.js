const user = {name: 'Luiz Miguel', lastname: 'Santos Rodrigues'};

function getUserWithFullName(user){
    return{...user, fullName: `${user.name} ${user.lastname}` }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);