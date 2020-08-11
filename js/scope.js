 
 /*a var function scope-ja van, fügvényen belül él*/
 var globalName = "Joe";



 /*ha nem lenne ott a var globalName = "Jack"; akkor a külső globalName-el dolgozna. busz effektus.
 A fügvények határozzák meg a scope-ját */
 function something() { 
        var globalName = "Jack";
        console.log(globalName)
  }

something();

console.log(globalName);