export const friendsList = [{ name: "aman" }, { name: "ankit" }];
export const expensesList = [
  {
    description: "water bill",
    amount: "1000",
    paidBy: "ankit",
    addedBy: "ankit",
    sharingDetails: {
      you: { owedOrGetAmount: "300" },
      aman: { owedOrGetAmount: "300" },
      ankit: { owedOrGetAmount: "400" },
    },
  },
  {
    description: "maid",
    amount: "1500",
    paidBy: "ankit",
    addedBy: "ankit",
    sharingDetails: {
      you: { owedOrGetAmount: "500" },
      aman: { owedOrGetAmount: "500" },
      ankit: { owedOrGetAmount: "500" },
    },
  },
  {
    description: "electricity",
    amount: "1800",
    paidBy: "you",
    addedBy: "you",
    sharedWith: ["ankit", "aman"],
    splitAmount: [600, 600],
    owed: [true, true],
    sharingDetails: {
      you: { owedOrGetAmount: "600" },
      ankit: { owedOrGetAmount: "600" },
      aman: { owedOrGetAmount: "600" },
    },
  },
];
