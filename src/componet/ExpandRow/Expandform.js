import React, { useState } from "react";
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Expand.module.css";
const ExpandRow = (props) => {
 
  let item =props.item

  const [isValue, setIsValue] = useState({
    firstName: item.firstName,
    lastName: item.lastName,
    age: item.age,
    number: item.number,
    email: item.email,
    birth: item.birth,
    address: item.address,
    id:item.id

  })
  // console.log(isValue);
  const SubmitHandler = (event) =>{
    event.preventDefault()
    
   props.getUpdateData(isValue)
  }
  return (
    <tr>
      <td colSpan="6">
        <form onSubmit={SubmitHandler}>
        <div className={classes.head}>
          <h2>
            {item.firstName} {item.lastName}
          </h2>
          <div>
          
            <button type="submit">
              <FontAwesomeIcon icon={faCheck} /> Confirm
            </button>
            <button>
              <FontAwesomeIcon icon={faTimes} /> Cancel
            </button>
          </div>
        </div>
        <div className={classes.expand}>
          <p className={classes.label}>FIRST NAME</p>
          <p>
            <input type="text" value={isValue.firstName} onChange={(e) => setIsValue({...isValue ,firstName: e.target.value })} />
          </p>
          <p className={classes.label}>LAST NAME</p>
          <p>
            <input type="text" value={isValue.lastName} onChange={(e) => setIsValue({ ...isValue ,lastName: e.target.value })} />
          </p>
          <p className={classes.label}>AGE</p>
          <p>
            <input type="number" value={isValue.age} onChange={(e) => setIsValue({ ...isValue ,age: e.target.value })} />
          </p>
          <p className={classes.label}>NUMBER</p>
          <p>
            <input type="number" value={isValue.number} onChange={(e) => setIsValue({ ...isValue ,number: e.target.value })} />
          </p>
          <p className={classes.label}>EMAIL</p>
          <p>
            <input type="emial" value={isValue.email} onChange={(e) => setIsValue({ ...isValue ,email: e.target.value })} />
          </p>
          <p className={classes.label}>DATE OF BIRTH</p>
          <p>
            <input type="date" value={isValue.birte} onChange={(e) => setIsValue({ ...isValue ,birth: e.target.value })} />
          </p>
          <p className={classes.label}>Address</p>
          <p>
            <textarea value={isValue.address} onChange={(e) => setIsValue({...isValue , address: e.target.value })} ></textarea>
          </p>
        </div>
        </form>
      </td>
    </tr>
  );
};

export default ExpandRow;
