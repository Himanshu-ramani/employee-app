import { Fragment ,useState} from "react";
import Table from "./table";
import Form from "./form";
import { useSelector } from "react-redux";

const Main = () =>{
    const [newData , setNewData] = useState([])
    const getData = (data) =>{
       
        console.log(data);
    }

    const isForm = useSelector(state => state.isfrom)
    return<Fragment>
        {isForm &&<Form getData = {getData}/>}
        <Table item={newData} />
    </Fragment>
}

export default Main