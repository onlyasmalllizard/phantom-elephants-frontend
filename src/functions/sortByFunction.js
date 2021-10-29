export const sortByFunction = (heading, isASC) => (a, b) => {
  if (typeof a[heading] === "string" || a[heading] instanceof String) {
    let nameA = a[heading].toUpperCase(); // ignore upper and lowercase
    let nameB = b[heading].toUpperCase(); // ignore upper and lowercase
    return isASC
      ? nameA < nameB
        ? -1
        : nameA > nameB
        ? 1
        : 0
      : nameB < nameA
      ? -1
      : nameB > nameA
      ? 1
      : 0;
  } else {
    return isASC ? a[heading] - b[heading] : b[heading] - a[heading];
  }
};
