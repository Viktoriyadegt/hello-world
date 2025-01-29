//Create a function that returns the name of the winner in a fight between two fighters.
//
// Each fighter takes turns attacking the other and whoever kills the other first is victorious.
// Death is defined as having health <= 0.
//
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
// You can mutate the Fighter objects.
//
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
//
// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
//
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
//______________________________________________________________________________________________________________________

function findDifference(a, b) {
    const sumA = a.reduce((a, b) => a * b)
    const sumB = b.reduce((a, b) => a * b)
    return sumA > sumB ? sumA - sumB : sumB - sumA
}

console.log(findDifference([15, 20, 25], [10, 30, 25])) //0
console.log(findDifference([3, 2, 5], [1, 4, 4])) //14
