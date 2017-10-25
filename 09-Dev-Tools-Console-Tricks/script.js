const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "nice");
// console.log(`Hello I am a ${var} string`); for use in ES6

// Styled
console.log(
  "%c I am some great text",
  "font-size: 20px; background: lightGreen;"
);

// warning!
console.warn("OH NOOOOO");

// Error :|
console.error("O-OOOOO");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 1, "That is wrong!");

const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

console.table(dogs);

// counting
console.count("Antonijo");
console.count("Ivan");
console.count("Antonijo");
console.count("Antonijo");
console.count("Ivan");
console.count("Ivan");
console.count("Ivan");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/Galiant")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });
