function showMessage(message) 
{
    document.getElementById('message').textContent = message;

}
//console.log("coucou")
let welcome = false;

//On peux déclarer plusieurs variables à la suite en utilisant les virgules et les indentations : 
let price = 49.99,
    name = "Hiking Boot",
    discounted = false;


//showMessage(typeof price);

showMessage(price);

/* règles pour les variables : 
    Commence par _ ou $ suivi d'un chiffre ou _ ou $ */

/* Attention la place des incrémenteur est importante en JS : 

showMessage(price++);

showMessage(++price);

console.log(price);

Si on place le ++ après il executer après l'affichage. Avant il est excuter avant 
const monExempleDeConstante = 40;

*/

//Exemple d'utilisation d'une variable dans l'affichage avec les `` :

let exempleString = 'Jérémie';
let message = `Hello ${exempleString}`;
console.log(message);

//Convertion : 

let amount = 123;
amount = amount.toString();

amout = Number.parseFloat("123.12");

let saved = true;
saved = !saved; //=false du coup

//Pour rénitialiser une variable on uitlise "null" :
let var15 = 10;
var15 = null;

//Exemple d'objet : 

let personne = {
    prenom : 'Jérémie',
    nom : 'Vidal'
};
console.log(personne.nom);

//Quand on manipule les float il faut faire attention car le nb de decimal est pas fix
//On peux utiliser la function toFixed pour régler le pb, sauf que ça renvoi un string
//Du coup on ajoute un "+" pour indiquer c'est un nombre, c'est tordu... :
/*
if (+(1.1 + 1.3).toFixed(2) === 2.4) {
    showMessage('true');
}*/

// Exemple de l'opérateur Ternaire : 
// (condition) ? true-statement : false-statement

message = (price > 10) ? "c'est cher ma gueule" : "pas cher";
showMessage(message);

// Syntaxe for : 

for (let i = 0; i < 3; i++)
{ 
    console.log(i);
}

// Syntaxe while : 
let count = 1;
while (count <5)
{
    console.log(count);
    count++;
}

// Syntaxe Do... while 
/*
let count2 = 3;
do {
    console.log(count2);
} while(count2 <5); */