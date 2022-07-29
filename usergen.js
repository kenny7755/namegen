const names = ["Kenny","Airfried CPU","Duck","Eternus","test"]
const btn = document.getElementById("btn");
const nameplace = document.getElementById("nameplace");
function getRandomUser(){
    return Math.floor(Math.random() * names.length);
};

btn.addEventListener('click', function() {
    const randomUser = getRandomUser();
    console.log(randomUser)
    nameplace.textContent = names[getRandomUser()];
    }); 

document.getElementById("nameplace").innerHTML = names[getRandomUser()];

