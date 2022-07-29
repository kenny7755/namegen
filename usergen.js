const names = ["DirtyPenguin72","ChickenLover99","greg","AwesomeGuy25","ZippyZappy777"]
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

