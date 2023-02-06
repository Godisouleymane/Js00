//Écrire un programme qui déclare une variable a avec la valeur 10 et une 
//variable b avec la valeur 20, puis qui échange ces valeurs avant d'afficher 
//les nouvelles valeurs de a et b à l'écran

a = 10;
b = 20;
c = b; 

b = a;
a = c;
console.log(`New value of a: ${a}`);
console.log(`New value of b: ${b}`);
