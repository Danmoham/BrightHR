import { useParams } from "react-router-dom"

export const OpenedFolder = () =>{
   let {folder_name} = useParams()
    return <p>{folder_name}</p>
    
}