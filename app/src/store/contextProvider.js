import { useContext } from "react"
import Data from "./context"
const DataProvider = props =>{
     const context = useContext(Data)
  
    return <Data.Provider value={context}>
        {props.children}
    </Data.Provider>
}

export default DataProvider