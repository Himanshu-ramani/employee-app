import Button from "../UI/Button";
import { useContext, useEffect, Fragment, useState } from "react";
import { Data } from "./form";
import { useSelector } from "react-redux";
// const Dummy = [
//   {
//     firstName: "himanshu",
//     lastName: "ramani",
//     age: "18",
//     number: "9998060495",
//     id: 0.5191706769766842,
//   },
//   {
//     firstName: "parth",
//     lastName: "ramani",
//     age: "22",
//     number: "9978489418",
//     id: 0.3706614688882761,
//   },

// ];

const TableData = (props) => {
  console.log("hi");
  const arry = useContext(Data)
console.log(arry);
  const statedata = useSelector((state) => state.data);
  const dataArray = [...statedata];

  const data = JSON.parse(localStorage.getItem("listData"));
  // data.splice(0, 1);
  // const [array, setArray ]= useState(data)

  const deleteData = (curid) =>{
    // console.log(id);
   
    // const newArray = data.filter((elem )=>{
      
    //   // console.log(curid);
    //   // console.log(elem.id);
    //   // console.log(elem.id != curid);
    //  return elem.id !== curid
    // })

    // setArray(newArray);
  }
  // localStorage.setItem("listData",JSON.stringify(array))
  // console.log(data);
// const data =[]
useEffect(() => {
console.log(data);
 
}, [statedata])
  return (
    <Fragment>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.age}</td>
          <td>{item.number}</td>
          <td>
            <Button onClick ={() =>deleteData(item.id)}>Delete</Button>
            <Button>Edit</Button>
          </td>
        </tr>
      ))}
    </Fragment>
  );
};

export default TableData;
