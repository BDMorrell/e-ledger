export const exampleTableBodyObject = [
  {
    Account: "Account 1",
    Check: "XXXX",
    Date: "Yesterday",
    Description: "Payment to my friend",
    Done: false,
    Debit: 1000,
    Credit: 0,
  },
  {
    Account: "Account 5",
    Check: "XXXY",
    Date: "Today",
    Description: "Payment to my not friend",
    Done: false,
    Debit: 0.01,
    Credit: 0,
  },
  {
    Account: "Sub account 2",
    Check: "",
    Date: "1 Jan 1970",
    Description: "Money from a golden gift card",
    Done: false,
    Debit: 0,
    Credit: 25000.00,
  },
  {
    Account: "",
    Check: "",
    Date: "",
    Description: "",
    Done: false,
    Debit: 0,
    Credit: 0,
  },
];
export const exampleAccountData = [
  {
    name: "Main",
    subAccounts: [
      {
        name: "Account 1",
        subAccounts: [
          {
            name: "Sub account 1",
            subAccounts: [],
          },
          {
            name: "Sub account 2",
            subAccounts: [],
          },
        ],
      },
      {
        name: "Account 2",
        subAccounts: [],
      },
      {
        name: "Account 3",
        subAccounts: [],
      },
      {
        name: "Account 4",
        subAccounts: [],
      },
      {
        name: "Account 5",
        subAccounts: [],
      },
    ],
  }
];
