function prepareGifts(gifts) {
  let uniqueGifts = [];
  gifts.forEach((value) => {
    if (!uniqueGifts.some((item) => item === value)) uniqueGifts.push(value);
  });

  return uniqueGifts.sort((a, b) => a - b);
}
