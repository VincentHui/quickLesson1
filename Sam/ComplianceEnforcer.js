const assert = require("assert");

const complianceEnforcer = {
  version: 10121,
  caseCount: 14,
  PassPhrase: function () {
    return "All Glory to the Union State, purge all dissent for glory";
  },
  ParseDissent: function (a) {
    if (a === "Low") return "UnderWatch";
    if (a === "Mild") return "Isolation";
    if (a === "High") return "FormalSeditionCharges";
    if (a === "Severe") return "Reconditioning";
    return "DefaultTermination";
  },
  GetCaseByID: function (a) {
    if (a === 1) return { id: 1, name: "Ben", Dissent: "Severe" };
    if (a === 2) return { id: 2, name: "Vince", Dissent: "Low" };
  },
  GetCaseByName: function (a) {
    if (a === "Vince") return { id: 2, name: "Vince", Dissent: "Low" };
  },
};

console.assert(
  typeof complianceEnforcer.version === "number",
  "version is not a type of number"
);

console.assert(complianceEnforcer.version === 10121, "version is not correct");

console.assert(
  complianceEnforcer.caseCount > 12,
  "caseCount should be bigger than 12"
);
console.assert(
  complianceEnforcer.PassPhrase() ===
    "All Glory to the Union State, purge all dissent for glory",
  "PassPhrase doesn't return correct message"
);

console.assert(
  complianceEnforcer.ParseDissent("Low") === "UnderWatch",
  "Low Dissent needs to match the correct action"
);

console.assert(
  complianceEnforcer.ParseDissent("Mild") === "Isolation",
  "Mild Dissent needs to match the correct action"
);

console.assert(
  complianceEnforcer.ParseDissent("High") === "FormalSeditionCharges",
  "High Dissent needs to match the correct action"
);

console.assert(
  complianceEnforcer.ParseDissent("Severe") === "Reconditioning",
  "Severe Dissent needs to match the correct action"
);

assert.deepStrictEqual(
  complianceEnforcer.GetCaseByID(1),
  { id: 1, name: "Ben", Dissent: "Severe" },
  ["Ben ID needs to return correct Case"]
);

assert.deepStrictEqual(
  complianceEnforcer.GetCaseByID(2),
  { id: 2, name: "Vince", Dissent: "Low" },
  ["Vince ID needs to return correct Case"]
);

assert.deepStrictEqual(
  complianceEnforcer.GetCaseByName("Vince"),
  { id: 2, name: "Vince", Dissent: "Low" },
  ["Vince needs to return correct Case"]
);
