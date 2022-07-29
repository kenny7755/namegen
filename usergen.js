
const names = ["Kenny","Airfried CPU","Duck","Eternus","test"]
const btn = document.getElementById("btn");

function getRandomUser(){
    return Math.floor(Math.random() * names[getRandomUser()]);
};

btn.addEventListener('click', function() {
    const randomUser = getRandomUser();
    console.log(randomUser)
    }); 

    const name = document.querySelector("nameplace").innerHTML = randomUser;
