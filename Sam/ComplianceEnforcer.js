const complianceEnforcer = {};
console.assert(
  typeof complianceEnforcer.version === "number",
  "version is not a type of number"
);

console.assert(complianceEnforcer.version === 10121, "version is not correct");

console.assert(
  complianceEnforcer.caseCount > 12,
  "caseCount shouldn't be bigger than 12"
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

//extra
console.assert(
  complianceEnforcer.GetCaseByID(1) ===
    { id: 1, name: "Ben", Dissent: "Severe" },
  "ID needs to return correct Case"
);

console.assert(
  complianceEnforcer.GetCaseByID(2) ===
    { id: 2, name: "Vince", Dissent: "Low" },
  "ID needs to return correct Case"
);

console.assert(
  complianceEnforcer.GetCaseByName("Vince") ===
    { id: 2, name: "Vince", Dissent: "Low" },
  "weapon is not a type of string"
);
