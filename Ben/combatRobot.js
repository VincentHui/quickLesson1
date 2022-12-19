const combatRobot = {};
console.assert(
  typeof combatRobot.weapon === "string",
  "weapon is not a type of string"
);

console.assert(
  combatRobot.weapon === "particleLance",
  "weapon is not a particleLance"
);

console.assert(
  combatRobot.killCount < 10000,
  "killCount shouldn't be less than 10000"
);
console.assert(
  combatRobot.Startup() === "started up!",
  "start up doesn't return correct message"
);

console.assert(
  combatRobot.GetAmmo("Radiation") === "Depleted Uranium",
  "GetAmmo doesn't return correct Radiation ammo"
);

console.assert(
  combatRobot.GetAmmo("Toxic") === "Nerve Gas Shells",
  "GetAmmo doesn't return correct Toxic ammo"
);

console.assert(
  combatRobot.getID() === 12943992,
  "getID doesn't return correct ID number"
);

//extra
console.assert(
  combatRobot.size === { height: 40, width: 20 },
  "Correct Size type is not returnded"
);

console.assert(
  combatRobot.Move({ L: 1, R: 5 }) === { Left: 1, Right: 5 },
  "movement is not correctly accounted for"
);
console.assert(
  combatRobot.Move({ L: 3, R: 2 }) === { Left: 3, Right: 2 },
  "movement is not correctly accounted for"
);
