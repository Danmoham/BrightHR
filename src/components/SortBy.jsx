export const SortBy = ({
  setIsLoading,
  isSortedBy,
  setIsSortedBy,
  setIsAscending,
  isAscending,
}) => {
  const order = {
    true: "ascending",
    false: "descending",
  };
  const changeOrder = (event) => {
    event.preventDefault();
    if (event.target.value !== isAscending) {
      setIsLoading(true);
      setIsAscending(!isAscending);
    }
  };

  return (
    <div>
      <p>
        Currently sorted by folder {isSortedBy} in {order[isAscending]} order
      </p>
      <button
        onClick={(event) => {
          event.preventDefault();
          if (!(isSortedBy === "name")) setIsLoading(true);
          setIsAscending(true);
          setIsSortedBy("name");
        }}
      >
        Name
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          if (!(isSortedBy === "added")) setIsLoading(true);
          setIsAscending(true);
          setIsSortedBy("added");
        }}
      >
        Date
      </button>
      <button onClick={changeOrder}>
        Click here to sort by {order[!isAscending]} order
      </button>
    </div>
  );
};
