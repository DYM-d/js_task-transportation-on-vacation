/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const LongTermDiscount = 50;
  const ShortTermDiscount = 20;
  const BasePrice = price * days;

  if (days >= 7) {
    return BasePrice - LongTermDiscount;
  }

  if (days >= 3) {
    return BasePrice - ShortTermDiscount;
  }

  return BasePrice;
}

module.exports = calculateRentalCost;
