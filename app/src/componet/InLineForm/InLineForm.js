import React from "react";
import { useState } from "react";
import Button from "../../UI/Button";
import "./inLineForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const InLineForm = (props) => {
  const [id, setid] = useState(props.props.id);
  // console.log(props.id);
  const [firstName, setfirstName] = useState(props.props.firstName);
  const [lastName, setlastName] = useState(props.props.lastName);
  const [age, setage] = useState(props.props.age);
  const [number, setnumber] = useState(props.props.number);
  const [editdata, seteditdata] = useState({
    firstName: "",
    lastName: "",
    age: "",
    number: "",
    id: "",
  });

  const [validFirstName, setvalidFirstName] = useState(true);
  const [validLastName, setvalidLastName] = useState(true);
  const [validAge, setvalidAge] = useState(true);
  const [validNumber, setvalidNumber] = useState(true);
  const firstNameHandler = (event) => {
    setfirstName(event.target.value);
    if (event.target.value === "") {
      setvalidFirstName(false);
    } else {
      setvalidFirstName(true);
    }
  };

  const lastNameHandler = (event) => {
    setlastName(event.target.value);
    if (event.target.value === "") {
      setvalidLastName(false);
    } else {
      setvalidLastName(true);
    }
  };
  const ageHandler = (event) => {
    setage(event.target.value);
    if (event.target.value === "") {
      setvalidAge(false);
    }
    if (event.target.value < 1) {
      setvalidAge(false);
    } else {
      setvalidAge(true);
    }
  };
  const numberHandler = (event) => {
    setnumber(event.target.value);
    if (event.target.value === "") {
      setvalidNumber(false);
    }
    if (event.target.value.length !== 10) {
      setvalidNumber(false);
    } else {
      setvalidNumber(true);
    }
  };
  let formIsValid = false;
  if (validFirstName && validLastName && validAge && validNumber) {
    formIsValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const updateData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      number: number,
      id: id,
    };
    seteditdata(updateData);
    // console.log(updateData);
    props.seteditContactId(null);
    props.getdata(updateData);
  };
  const firstnameClasses = !validFirstName ? "td invalid" : "td";
  const lastnameClasses = !validLastName ? "td invalid" : "td";
  const ageClasses = !validAge ? "td invalid" : "td";
  const numberClasses = !validNumber ? "td invalid" : "td";
  return (
    // <tr>
    //   <td colSpan="6">
    //     <div className={classes.expand}>
    //       <p className={classes.label}>FIRST NAME</p>{" "}
    //       <p>
    //         <input type="text" value={firstName} onChange={firstNameHandler} />
    //       </p>
    //       <p className={classes.label}>LAST NAME</p> <p>{item.lastName}</p>
    //       <p className={classes.label}>AGE</p> <p>{item.age}</p>
    //       <p className={classes.label}>NUMBER</p> <p>{item.number}</p>
    //       <p className={classes.label}>EMAIL</p> <p>{item.email}</p>
    //       <p className={classes.label}>DATE OF BIRTH</p> <p>{item.birth}</p>
    //     </div>
    //     <button onClick={stopView}>Cancel</button>
    //   </td>
    // </tr>
    <tr>
      <td className={firstnameClasses}>
        <input type="text" value={firstName} onChange={firstNameHandler} />
      </td>
      <td className={lastnameClasses}>
        <input type="text" value={lastName} onChange={lastNameHandler} />
      </td>
      <td className={ageClasses}>
        <input type="number" value={age} onChange={ageHandler} />
      </td>
      <td className={numberClasses}>
        <input type="number" value={number} onChange={numberHandler} />
      </td>

      <td>
        <Button onClick={submitHandler}><FontAwesomeIcon icon={faListCheck} /></Button>
        <Button onClick={props.cancel}><FontAwesomeIcon icon={faTimes} /></Button>
      </td>
    </tr>
  );
};
export default InLineForm;
