export function iota(value) {
  return value;
}

export const formatMoney = ammount => {
  if (ammount !== 0) {
    return ("$" + Number.parseFloat(ammount).toFixed(2));
  } // else
  return "";
};

export const finished = bool => bool ? "X" : "";
