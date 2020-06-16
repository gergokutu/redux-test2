const hunter = {
  firstName: "Alice",
  lastName: "the Rabbit Hunter"
};

const showObject = person => console.log("PERSON: ", person);

showObject({
  firstName: "Bela",
  lastName: "the Foshos"
});

showObject(hunter);

const objectTwo = hunter;
objectTwo.lastName = "The nice girl";

showObject(hunter);
showObject(objectTwo);

// create a (shallow!) copy
const granny = {
  ...hunter
};
granny.firstName = "Magdi";
granny.lastName = "The Anyus";
showObject(granny);
showObject(hunter);

// now we create an object that has a nested object:
const cast = {
  hunter,
  prey: "The Rabbit"
};

console.log("Value of Object hunter: ", hunter);
console.log("Value of Object cast: ", cast);

// let's mutate our hunter
hunter.firstName = "bob";

console.log("Value of Object hunter: ", hunter);
console.log("Value of Object cast: ", cast);