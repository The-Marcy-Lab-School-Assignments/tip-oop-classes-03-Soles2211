class Fruit {
    constructor (name, texture, color, size) {
        this.name = name;
        this.texture = texture; 
        this.color= color;
        this.size = size;
    }
    describeFruit(taste) {
        return `This ${this.name} has a ${this.texture} texture. it tastes ${taste}`;
    }
}

const myFruit = new Fruit('grapefruit', 'rough', 'yellow', 6);
console.log(myFruit); // Square
console.log(myFruit.texture); // 5
console.log(myFruit.color); // 5
console.log(myFruit.size); // 5
console.log(myFruit.describeFruit('bitter')); // 25