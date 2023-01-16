const assert = require("assert");

const combatRobot = {
  weapon: "particleLance",
  killCount: 9999,
  Startup: function () {
    return "started up!";
  },
  GetAmmo: function (input) {
    if (input.includes("Radiation")) return "Depleted Uranium";
    if (input.includes("Toxic")) return "Nerve Gas Shells";
  },
  getID: function () {
    return 12943992;
  },
  size: { height: 40, width: 20 },
};

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
assert.deepStrictEqual(combatRobot.size, { height: 40, width: 20 }, [
  "Correct Size type is not returned",
]);

assert.deepStrictEqual(
  combatRobot.Move({ L: 1, R: 5 }),
  { Left: 1, Right: 5 },
  "movement is not correctly accounted for"
);
assert.deepStrictEqual(
  combatRobot.Move({ L: 3, R: 2 }),
  { Left: 3, Right: 2 },
  "movement is not correctly accounted for"
);
