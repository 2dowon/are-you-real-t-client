export type TMbtiType = "energy" | "information" | "decision" | "lifeStyle";

export const mbtiTypeMetaMap: {
  [key in TMbtiType]: { typeList: string[]; typeText: string };
} = {
  energy: { typeList: ["I", "E"], typeText: "I/E" },
  information: { typeList: ["N", "S"], typeText: "N/S" },
  decision: { typeList: ["F", "T"], typeText: "F/T" },
  lifeStyle: { typeList: ["P", "J"], typeText: "P/J" },
};
