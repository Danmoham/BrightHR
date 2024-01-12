import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormattingData } from "./FormattingData";
import data from "../data/information.json";
import { gettingCorrectFolderDetails } from "../libs/gettingFolderDetails";
import { SortBy } from "./SortBy";

export const OpenedFolder = () => {
  const [allDocuments, setAllDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { folder_name } = useParams();
  useEffect(() => {
    setAllDocuments(gettingCorrectFolderDetails(data, folder_name));
    setIsLoading(false);
  }, [folder_name]);
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div id="align-home">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <FormattingData allDocuments={allDocuments} />;
      </>
    );
  }
};
