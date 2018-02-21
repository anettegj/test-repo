
class Die {
	constructor(name, sides, color){
		this.sides = sides
		this.name = name
		this.color = color
	}

	get numSides() {
		return this.sides.length
	}

	get expectedValue() {
		var sum = 0
		this.sides.forEach((side) => {sum += side})
		return sum / this.sides.length
	}
}

var allDice = {
	d6: new Die("D6", [1,2,3,4,5,6], [1,1,1]),
	d8: new Die("D8", [1,2,3,4,5,6,7,8], [1,1,1]),
	dsBlack: new Die("Dark Sould Black", [0,1,1,1,2,2], [0,0,0]),
	dsBlue: new Die("Dark Sould Blue", [1,1,2,2,2,3], [0,0,0.8]),
	dsOrange: new Die("Dark Sould Orange", [1,2,2,3,3,4], [0.7,0.5,0]),
}

class DiceSet {
	constructor() {
		this.dice = [allDice.d6, allDice.dsBlack]
		this.modifier = 1
	}

	get expectedValue() {
		var sum = 0
		this.dice.forEach((die) => {sum += die.expectedValue})
		sum += this.modifier
		return sum
	}
}

export default class MainState {
	constructor() {
		this.title = "Dice Stat Comparator"
		this.diceSets = [new DiceSet(), new DiceSet()]
	}
}