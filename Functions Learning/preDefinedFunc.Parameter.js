const greeting = (
  name = "I've been put on as default parameter. Means, when invoking the function you haven't put a parameter but I did predifine it before in the function"
) => "Hello " + name;

console.log(greeting("Doncho"));
console.log(greeting());
