
let pets = ["Milo", "Otis", "Garfield"];

let dog = "Odie";

let append = [...pets, dog]

let prepend = [dog, ...pets]

let removeFirst = [...pets]
removeFirst.shift()

let removeLast = [...pets]
removeLast.pop()

// append.push(dog);
//
// prepend.unshift(dog);
//
// removeLast.pop();
//
// removeFirst.shift();
