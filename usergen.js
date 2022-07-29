const names = ["Kenny","Airfried CPU","Duck","Eternus","test"]
const btn = document.getElementById("btn");

// generator
btn.addEventListener('click', function() {
const randomUser = getrandomUser();
console.log(getrandomUser)
document.textContent(getrandomUser)
});

function getRandomNumber(){
    return Math.floor(Math.random() * names.length);
}
