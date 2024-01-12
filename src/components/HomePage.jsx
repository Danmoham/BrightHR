import { useState, useEffect } from "react";
import data from "../data/information.json";
import { FormattingData } from "./FormattingData";
export const HomePage = () => {
  const [allDocuments, setAllDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setAllDocuments(data);
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <FormattingData allDocuments={allDocuments} />;
  }
};
