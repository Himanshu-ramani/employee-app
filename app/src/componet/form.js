import { useState, useContext,createContext } from "react";
import classes from "./form.module.css";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";


const getdata = JSON.parse(localStorage.getItem("listData"));
export const Data = createContext()
const Form = (props) => {
  
;
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch({ type: "closeform" });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");

  const [enterfristname, setenterfirstname] = useState(true);
  const [enterlastname, setenterlastname] = useState(true);
  const [enterage, setenterage] = useState(true);
  const [enternumber, setenternumber] = useState(true);
  const enteredFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const enteredLastName = (event) => {
    setLastName(event.target.value);
  };
  const enteredAge = (event) => {
    setAge(event.target.value);
  };
  const enteredNumber = (event) => {
    setNumber(event.target.value);
  };
  let [data, setdata] = useState();

  const [update , setUpdate] =useState(getdata)
  const submitHandler = (event) => {
    event.preventDefault();
    if(firstName.trim() === ""){
        setenterfirstname(false)
        return
    }
    setenterfirstname(true)
    if(lastName.trim() === ""){
        setenterlastname(false)
        return
    }
    setenterlastname(true)
    if(age < 0){
        setenterage(false)
        return
    }
    setenterage(true)
    if(number.length !== 10){
        setenterfirstname(false)
        return
    }
    setenternumber(true)
  let  resdata = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      number: number,
      id: Math.random(),
    };
    // setdata(resdata)
    
 update.push(resdata)
  // setUpdate(prestate =>{
  //   return [resdata,...prestate]
  // })
  localStorage.setItem("listData",JSON.stringify(update))
  dispatch({type:"setdata",payload:data})
    console.log(update)
    setFirstName("")
    setLastName("")
    setAge("")
    setNumber("")
  };



  return (
   <Data.Provider value={update} >
      <div className={classes.cover}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="fname">First Name</label>
            <input id="fname" type="text" onChange={enteredFirstName} value={firstName} />
            {!enterfristname && <p>Please enter your name proper!</p>}
          </div>
          <div>
            <label htmlFor="fname">last Name</label>
            <input id="fname" type="text" onChange={enteredLastName} value={lastName} />
            {!enterlastname && <p>Please enter your name proper!</p>}
          </div>
          <div>
            <label htmlFor="fname">Age</label>
            <input id="fname" type="number" onChange={enteredAge} value={age}/>
            {!enterage && <p>Please enter your age proper </p>}
          </div>
          <div>
            <label htmlFor="fname">Ph. Number</label>
            <input id="fname" type="number" onChange={enteredNumber} value={number} />
            {!enternumber && <p>Please enter your proper Number!</p>}
          </div>
          <div>
            <div></div>
            <div className={classes.button_div}>
              <Button type="submit" >
                Add
              </Button>
              <Button onClick={closeForm} type="button">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
      </Data.Provider>
  );
};

export default Form;
