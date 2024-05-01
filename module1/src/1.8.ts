
// destructuring in typeScript
const userDetails = {
    id: 1,
    name: {
        firstName: 'sihab',
        LastName: 'Hossain',
    },
    contact: 13123115415,
    adress: 'Dhaka'
}


const {contact : phoneNumber , name:{firstName : myName}} = userDetails;



// array destructuring
const myFriends = ['me', 'him', 'her', 'who?']

const [,,bestFriend, ...rest] = myFriends
