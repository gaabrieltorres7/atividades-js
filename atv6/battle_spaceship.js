class BattleSpaceship extends Spaceship {
  constructor(name, crewQuantity, weaponsQuantity) {
    super(name, crewQuantity);
    this.weaponsQuantity = weaponsQuantity;
  }
}

transport_spaceship.js;

class TransportSpaceship extends Spaceship {
  constructor(name, crewQuantity, sitsQuantity) {
    super(name, crewQuantity);
    this.sitsQuantity = sitsQuantity;
  }
}
