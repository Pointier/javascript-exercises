const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();
  const old = arr.reduce((oldest, current) => {
    const ageOldest =
      (oldest.hasOwnProperty("yearOfDeath")
        ? oldest.yearOfDeath
        : currentYear) - oldest.yearOfBirth;
    const ageCurrent =
      (oldest.hasOwnProperty("yearOfDeath")
        ? current.yearOfDeath
        : currentYear) - current.yearOfBirth;
    return ageOldest < ageCurrent ? current : oldest;
  });

  return old;
};

// Do not edit below this line
module.exports = findTheOldest;
