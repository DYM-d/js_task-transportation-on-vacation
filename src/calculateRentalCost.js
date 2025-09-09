/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const BasePrice = DAILY_RATE * days;
  const LONG_TERM_DAYS = 7;
  const MID_TERM_DAYS = 3;

  if (days >= LONG_TERM_DAYS) {
    return BasePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return BasePrice - MID_TERM_DISCOUNT;
  }

  return BasePrice;
}

module.exports = calculateRentalCost;
