// Interfaces
interface Attacker {
    attack(): void;
  }
  
  interface Defender {
    defend(): void;
  }
  
  interface GoldCollector {
    collectGold(): void;
  }
  
  abstract class Character implements Attacker, Defender, GoldCollector {
    name: string
    health: number
    gold: number
  
    constructor(name: string, health: number) {
      this.name = name
      this.health = health
      this.gold = 0
    }
  
    takeDamage(damage: number): void {
      this.health -= damage
      if (this.health <= 0) {
        console.log(`${this.name} has been defeated.`)
      }
    }
  
    heal(amount: number): void {
      this.health += amount
      console.log(`${this.name} has been healed for ${amount} health.`)
    }
  
    abstract attack(): void
    abstract defend(): void
  
    collectGold(): void {
      console.log(`${this.name} collected ${this.gold} gold.`)
    }
  }
  
  // Class: Ogre
  class Ogre extends Character {
    attack(): void {
      console.log(`${this.name} attacks with a club.`)
    }
  
    defend(): void {
      console.log(`${this.name} defends with a shield.`)
    }
  }
  
  // Class: Peon
  class Peon extends Character {
    attack(): void {
      console.log(`${this.name} attacks with a club.`)
    }
  
    defend(): void {
      console.log(`${this.name} defends with a shield.`)
    }
  }
  
  // Class: Knight
  class Knight extends Character {
    attack(): void {
      console.log(`${this.name} attacks with a sword.`)
    }
  
    defend(): void {
      console.log(`${this.name} defends with armor.`)
    }
  }
  
  // Class: Archer
  class Archer extends Character {
    attack(): void {
      console.log(`${this.name} attacks with a bow and arrow.`)
    }
  
    defend(): void {
      console.log(`${this.name} defends with a tunic.`)
    }
  }
  
  
  const ogre1 = new Ogre("Ogre", 100);
  const peon1 = new Peon("Peon", 80);
  const knight1 = new Knight("Sir Arthur", 120)
  const archer1 = new Archer("Archer", 90)
  
  ogre1.attack();
  ogre1.defend();
  ogre1.collectGold()
  ogre1.gold += 50
  ogre1.collectGold()
  
  peon1.attack()
  peon1.defend()
  peon1.collectGold()
  peon1.gold += 30
  peon1.collectGold()
  
  knight1.attack()
  knight1.defend()
  knight1.collectGold()
  knight1.gold += 70
  knight1.collectGold()
  
  archer1.attack()
  archer1.defend()
  archer1.collectGold()
  archer1.gold += 40
  archer1.collectGold()
  