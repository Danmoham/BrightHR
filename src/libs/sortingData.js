export const SortingData = (data, sortTerm, isAscending) => {
  if (data.length === 0) return [];

  if (isAscending === true && sortTerm === "name") {
    const mySortedData = data.sort((firstObject, secondObject) => {
      if (firstObject.name.toUpperCase() < secondObject.name.toUpperCase()) {
        return -1;
      }
      if (firstObject.name.toUpperCase() > secondObject.name.toUpperCase()) {
        return 1;
      }
    });
    return mySortedData;
  } else if (isAscending === true && sortTerm === "added") {
    const mySortedData = data.sort((firstObject, secondObject) => {
      const firstDate = new Date(firstObject.added);
      const secondDate = new Date(secondObject.added);
      return firstDate - secondDate;
    });
    return mySortedData;
  } else if (isAscending === false && sortTerm === "added") {
    const mySortedData = data.sort((firstObject, secondObject) => {
      const firstDate = new Date(firstObject.added);
      const secondDate = new Date(secondObject.added);
      return secondDate - firstDate;
    });
    return mySortedData;
  } else if (isAscending === false && sortTerm === "name") {
    const mySortedData = data.sort((firstObject, secondObject) => {
      if (firstObject.name.toUpperCase() > secondObject.name.toUpperCase()) {
        return -1;
      }
      if (firstObject.name.toUpperCase() < secondObject.name.toUpperCase()) {
        return 1;
      }
    });
    return mySortedData;
  }
};
