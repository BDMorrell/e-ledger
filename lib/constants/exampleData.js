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
    Done: true,
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
    selected: false,
    subAccounts: [
      {
        name: "Account 1",
        selected: false,
        subAccounts: [
          {
            name: "Sub account 1",
            selected: false,
            subAccounts: [],
          },
          {
            name: "Sub account 2",
            selected: false,
            subAccounts: [],
          },
        ],
      },
      {
        name: "Account 2",
        selected: false,
        subAccounts: [],
      },
      {
        name: "Account 3",
        selected: false,
        subAccounts: [

          {
            name: "Sub account 3.1",
            selected: false,
            subAccounts: [],
          },
          {
            name: "Sub account 3.2",
            selected: false,
            subAccounts: [],
          },
        ],
      },
      {
        name: "Account 4",
        selected: false,
        subAccounts: [],
      },
      {
        name: "Account 5",
        selected: false,
        subAccounts: [],
      },
    ],
  }
];
