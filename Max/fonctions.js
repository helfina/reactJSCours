function somme1(a, b){
    return a + b;
}

let somme2 = function(a, b){
    return a + b;
}

var somme3 = (a, b) => {
    return a + b;
}

const somme4 = (a, b) => (
    a + b
);

var somme5 = (a, b) => a + b;



console.log("somme1", somme1(1, 2));
console.log("somme2", somme2(1, 2));
console.log("somme3", somme3(1, 2));
console.log("somme4", somme4(1, 2));
console.log("somme5", somme5(1, 2));




//fonction anonyme : ici on définit une fonction et on l'appelle directement
(function (a, b){
    alert("somme = " + (a+b));
})(2, 3);




(event) => (
    this.handleDraftName(event, index)
)

(function(event){
    return this.handleDraftName(event, index);
})


//callback
var alertMe = (text) => {
    alert(text);
}

var consoleMe = (text) => {
    console.log(text);
}



function afficherPlusTard(donnee, callback){
    console.log("on a fourni la donnée : " + donnee);

    setTimeout(function(){
        callback(donnee);
    }, 3000)
}


afficherPlusTard(3, alertMe);
afficherPlusTard(4, alertMe);
afficherPlusTard(5, consoleMe);






