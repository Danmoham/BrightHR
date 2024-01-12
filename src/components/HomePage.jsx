import { useState, useEffect } from "react";
import data from "../data/information.json";
import { FormattingData } from "./FormattingData";
import { SortBy } from "./SortBy";
import { SortingData } from "../libs/sortingData";
export const HomePage = () => {
  const [allDocuments, setAllDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);
  const [isSortedBy, setIsSortedBy] = useState("name");

  useEffect(() => {
    setAllDocuments(SortingData(data, isSortedBy, isAscending));
    setIsLoading(false);
  }, [isLoading, isAscending, isSortedBy]);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <SortBy
          setIsLoading={setIsLoading}
          isSortedBy={isSortedBy}
          setIsSortedBy={setIsSortedBy}
          isAscending={isAscending}
          setIsAscending={setIsAscending}
        />
        <FormattingData allDocuments={allDocuments} />;
      </>
    );
  }
};
