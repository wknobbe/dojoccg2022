class Card{
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }
}
class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost)
        this.power = power
        this.resilience = resilience
    }
    attack(target){
        target.resilience -= this.power
    }
    showStats(){
        console.log(`Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`)
    }
}
class Effect extends Card{
    constructor(name,cost,stat,magnitude){
        super(name,cost)
        this.stat = stat
        this.magnitude = magnitude
    }
    play(target){
        if (target instanceof Unit){
            if(this.stat == 'power'){
                target.power += this.magnitude
            }
            if(this.stat == 'resilience'){
                target.resilience += this.magnitude
            }
        }
        else {
            throw new Error('Target must be a Unit!')
        }
    }
    showStats(){
        console.log(`Name: ${this.name}, Cost: ${this.cost}, Stat: ${this.stat}, Magnitude: ${this.magnitude}`)
    }
}
const redninja = new Unit('Red Ninja',3,3,4)
const blackninja = new Unit('Black Ninja',4,5,4)
const hardalgor = new Effect('Hard Algorithm',2,'resilience',3)
const unprorej = new Effect('Unhandled Promise Rejection',1,'resilience',-2)
const pairprog = new Effect('Pair Programming',3,'power',2)
redninja.showStats()
blackninja.showStats()
hardalgor.play(redninja)
redninja.showStats()
blackninja.showStats()
unprorej.play(redninja)
redninja.showStats()
blackninja.showStats()
pairprog.play(redninja)
redninja.showStats()
blackninja.showStats()
redninja.attack(blackninja)
redninja.showStats()
blackninja.showStats()