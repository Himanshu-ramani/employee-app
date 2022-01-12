import { Fragment ,useContext, useState}  from "react"
import classes from "./table.module.css"
import Button from "../UI/Button"
import TableData from "./TableData"
import Data from "../store/context"
const Table = (props) =>{
  // const data = useContext(Data)
  // console.log(data  );

    return <Fragment>
<table className={classes.table}>
  <thead>
  <tr>
    <th>Frist Name</th>
    <th>Last Name</th>
    <th>Age</th>
    <th>Ph. number</th>
    <th>Button</th>
  </tr>
  </thead>
  <tbody>
<TableData item={props.item}/>
{/* <tr>
     <td>{"hi"}</td>
    <td>lastName</td>
    <td>18</td>
    <td>9998060495</td>
    <td> <Button>Delete</Button><Button>Edit</Button></td>
</tr> */}

  </tbody>
</table>

    </Fragment>
}

export default Table;