export type TMbtiType = "energy" | "information" | "decision" | "lifeStyle";

export const mbtiTypeMetaMap: {
  [key in TMbtiType]: { typeList: string[]; typeText: string };
} = {
  energy: { typeList: ["I", "E"], typeText: "I/E" },
  information: { typeList: ["S", "N"], typeText: "S/N" },
  decision: { typeList: ["T", "F"], typeText: "T/F" },
  lifeStyle: { typeList: ["J", "P"], typeText: "J/P" },
};
