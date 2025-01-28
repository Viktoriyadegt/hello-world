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

function declareWinner(fighter1, fighter2, firstAttacker) {
    const attackF1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const attackF2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    if (attackF1 === attackF2)
        return firstAttacker
    if (attackF1 > attackF2) {
        return fighter1.name
    } else {
        return fighter2.name
    }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))  // 'Leo'
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")) //'Harald'
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")) //'Jerry'