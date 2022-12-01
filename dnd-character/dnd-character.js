export class DnDCharacter {
    strength;
    dexterity;
    constitution;
    intelligence;
    wisdom;
    charisma;
    hitpoints;
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
    static generateAbilityScore() {
        let numScore = [];
        for (let i = 0; i < 4; i++) {
            const randomNum = Math.floor(Math.random() * 7);
            numScore.push(randomNum);
        }
        numScore.sort().shift();
        const totalScore = numScore.reduce((prevVal, currVal) => (prevVal + currVal), 0);
        return totalScore;
    }
    static getModifierFor(abilityValue) {
        return Math.floor((abilityValue - 10) / 2);
    }
}
