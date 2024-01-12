import { imageObject } from "../icons/imageObject";
import { Link } from "react-router-dom";

export const FormattingData = ({ allDocuments }) => {
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
              <li key={item.name}>
                <b>{item.name}</b>
              </li>
              <li key={item.name + item.added} id="date">
                {item.added}
              </li>
            </ul>
          );
        } else {
          return (
            <Link to={`/folder/${item.name}`}>
              {" "}
              <ul className={`${item.type}`}>
                <img
                  className="icon"
                  src={imageObject[item.type]}
                  alt={`image of ${item.type}`}
                />
                <li>
                  <b>{item.name}</b>
                </li>
                <li key={item.name + item.added} id="date">
                  {item.added}
                </li>
              </ul>
            </Link>
          )
        }
      })}
    </div>
  );
};
