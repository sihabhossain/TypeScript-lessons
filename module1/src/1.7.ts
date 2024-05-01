

// spread operator

const frens1: string[] = ['sihab', 'sabbir']

const frens2: string[] = ['dhuchuc', 'aree']

frens1.push(...frens2)



// obj
const mentors1 ={
    redux: 'Mir',
    web: 'jhankar bhai',
}

const mentors2 = {
    web3: 'harkirat',
    topTal: 'Stack learner',
}


const mentorList = {
    ...mentors1,
    ...mentors2
}


// rest operator

const greetFriends =(...friends: string[])=>{
    friends.forEach((friend: string)=> console.log(`HI ${friend}`))
}

greetFriends('sihab', 'notSihab', 'yesSihab')


