// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions()

// Deel A: Bekijk de bovenstaande functie. Bouw deze functie om tot een arrow function
// Remember: => vervangt het woord function en wordt in plaats van vóór de haken (), áchter de haken () geplaatst.

// Deel B: Met arrow functions kun je ook de curly braces ("{" en "}") weglaten wanneer je de functie body op één regel kunt schrijven. De arrow heeft namelijk ook een impliciete return statement in zich wanneer je de curly braces weglaat.
// Remember: waar de arrow naar wijst wordt automatisch geretourneerd.

const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!")

// Als de functie-body te veel is voor 1 regel, dan wijst de arrow dus niet meer direct naar hetgeen je wilt returnen. Ergo: je hebt een return statement nodig.

// Opdracht: schrijf de onderstaande functie om naar een arrow functie op 1 regel.

const fivePlusSeven = function () {
    return 5 + 7
};

fivePlusSeven();

const fivePlusSeven = () => 5 + 7

fivePlusSeven();

// Deel C: Als je parameter toe wilt voegen aan een arrow function, dan gaat dat op precies dezelfde manier als je gewend bent: tussen de haakjes.
// Opdracht: Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bij-elkaar optelt. Noem de functie myFunction.

const myFunction = (a, b) => a + b

// Deel D: Als je slechts 1 parameter hebt, kun je de haakjes zelfs helemaal weglaten.
// Opdracht: Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive.

const addFive = a => a + 5

// Deel E: Je hebt gezien dat arrow functions een implicit return statement hebben wanneer je de code op 1 regel kunt schrijven. Er is 1 uitzondering, namelijk bij het returnen van een object {} . Wanneer je een object returned moet het object in een () gezet worden, om niet verward te worden met de curly braces {} van een function.
// Opdracht: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({ greeting: "hoi" })

