for(var i=1; i<11; i++) {
  console.log("9 x " + i + " = " + (9*i));
}

function isEven(number) {
 return number % 2 === 0; 
}

function label(conditional) {
  return (conditional) ? "Yes" : "Nope!";
}

for(var i=1; i<11; i++) {
  console.log(i + " is even? " + label(isEven(i)));
}