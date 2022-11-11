let username = "Doncho  is a mother fkaaa and he will succeed ! ";

let trimmedUsername = username.trim(); // Trim the SPACES,Tabs from behind and from of the username!
console.log(trimmedUsername);

let startsWith = username.startsWith("Doncho"); // Return True VERY CASE SENSITIVE!
let endsWith = username.endsWith("mother"); // Return False

console.log(startsWith, endsWith);
