function createCatsClass(array) {
  class Cats {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const line of array) {
    let [name, age] = line.split(" "); // ["Mellow","2"] name = Mellow, age = 2 DESTRUCTOR OF ARRAY;
    // SAME AS THE BELOW ONE !
    
    // let arg = line.split(" ");
    // let name = arg[0];
    // let age = Number(arg[1]);

    let cat = new Cats(name, age);
    cat.meow();
  }
}

createCatsClass(["Mellow 2", "Tom 5"]);
