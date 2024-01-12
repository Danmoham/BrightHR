import { useState, useEffect } from "react";
import data from "../data/information.json";
import { imageObject } from "../icons/imageObject";
import { Link } from "react-router-dom";

export const DocumentsLocation = () => {
  const [allDocuments, setAllDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setAllDocuments(data);
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="folders-files-group">
        {allDocuments.map((item) => {
          if (item.type !== "folder") {
            return (
              <ul className={`${item.type}`}>
               <img
                  className="icon"
                  src={imageObject[item.type]}
                  alt={`image of ${item.type}`}
                />
                 <li>
                  <b>{item.name}</b>
                </li>
                <li id="date">{item.added}</li>
              </ul>
            );
          } else {
            return (
             <Link to={`/folder/${item.name}`}> <ul className={`${item.type}`}>
                <img
                  className="icon"
                  src={imageObject[item.type]}
                  alt={`image of ${item.type}`}
                />
                  <li>
                  <b>{item.name}</b>
                </li>
              </ul></Link>
            );
          }
        })}
      </div>
    );
  }
};
