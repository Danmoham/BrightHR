import { useState, useEffect } from "react";
import data from "../data/information.json";
import csv from '../icons/public/csv.png'

export const DocumentsLocation = () => {
  const [allDocuments, setAllDocuments] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    setAllDocuments(data);
    setIsLoading(false)
  }, []);
  if (isLoading){
    return <div>Loading...</div>
  }else{
    return <div>
        {allDocuments.map((item) =>{
            if (item.type !== "folder"){
                const imagePath = `/icons/${item.type}.png`;

            return <ul>
                <img src={imagePath} alt={`image of ${item.type}`} />
                <li>{item.name}</li>
                <li>{item.added}</li>
            </ul>
            }else{
                return <ul></ul>
            }
  })
        }
    </div>
  }
};
