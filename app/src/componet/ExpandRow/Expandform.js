import React,{useState} from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Expand.module.css";
const ExpandRow = ({ item }) => {
  console.log(item);
// const [firstName, setFirstName] = useState(item.firstName)
// const [lastName, setlastName] = useState(item.lastName)
// const [age, setage] = useState(item.age)
// const [email, setemail] = useState(item.email)
// const [number, setnumber] = useState(item.number)
// const [birth, setbirth] = useState(item.birth)
// const [address, setaddress] = useState(item.address)
// const firstNameHandler = event =>{
//   setFirstName(event.traget.value)
// }
// const lastNameHandler = event =>{
//   setlastName(event.traget.value)
// }
// const ageHandler = event =>{
//   setage(event.traget.value)
// }
// const emailHandler = event =>{
  
// }
// const numberHandler = event =>{}
// const birthHandler = event =>{}
// const addressHandler = event =>{}

const [isValue, setIsValue] = useState({
  firstNameValue : item.firstName,
  lastNameValue : item.lastName,
  ageValue : item.age,
  numberValue : item.number,
  emailValue : item.email,
  birthValue : item.birth,
  addressValue : item.address,

})
console.log(isValue);

return (
  <tr>
      <td colSpan="6">
        <div className={classes.head}>
          <h2>
            {item.firstName} {item.lastName}
          </h2>
          <div>
            {" "}
            <button>
              <FontAwesomeIcon icon={faEdit} /> right
            </button>
            <button>
              <FontAwesomeIcon icon={faArrowUp} /> wrong
            </button>
          </div>
        </div>
        <div className={classes.expand}>
          <p className={classes.label}>FIRST NAME</p>
          <p>
            <input type="text" value={isValue.firstNameValue} />
          </p>
          <p className={classes.label}>LAST NAME</p>{" "}
          <p>
            <input type="text" />
          </p>
          <p className={classes.label}>AGE</p>{" "}
          <p>
            <input type="number" />
          </p>
          <p className={classes.label}>NUMBER</p>{" "}
          <p>
            <input type="number" />
          </p>
          <p className={classes.label}>EMAIL</p>{" "}
          <p>
            <input type="emial" />
          </p>
          <p className={classes.label}>DATE OF BIRTH</p>{" "}
          <p>
            <input type="date" />
          </p>
          <p className={classes.label}>Address</p>{" "}
          <p>
            <textarea></textarea>
          </p>
        </div>
      </td>
    </tr>
  );
};

export default ExpandRow;
