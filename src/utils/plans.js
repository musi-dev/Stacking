// Builds plan rows: bonus = 3% of amount per month, maturity = 2x over 24 months
export function buildPlans(amounts, unit, bonusUnit = unit) {
  return amounts.map((a, i) => ({
    no: i + 1,
    amount: `${a.toLocaleString("en-US")} ${unit}`,
    bonus: `3% = ${(a * 0.03).toLocaleString("en-US")} ${bonusUnit}`,
    months: "24 Months",
    maturity: `${(a * 2).toLocaleString("en-US")} ${unit}`,
  }));
}
