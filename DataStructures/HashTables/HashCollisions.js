let user = {
    age: 54,
    name: 'Kylix',
    magic: true,
    scream: function() {
        console.log('ahhh!');
    }
}

user.spell = "some spell";
console.log(user);
user.scream();
// O(n) Worst;

const a = new Map();
// ^^ can save keys in any type, even a function.
