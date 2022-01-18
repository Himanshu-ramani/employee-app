import { useState } from "react";
import "./form.css";
import Button from "../../UI/Button";
import useInput from "../../hooks/input_hook";
import { useDispatch } from "react-redux";

let getdata = JSON.parse(localStorage.getItem("listData"));

const Form = (props) => {
  if (getdata === null) {
    getdata = [];
  }
  const {
    value: firstNamevalue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastNamevalue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: agevalue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetage,
  } = useInput((value) => value > 0);
  const {
    value: numbervalue,
    isValid: numberIsValid,
    hasError: numberHasError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetnumber,
  } = useInput((value) => value.length == 10);
  const {
    value: emailvalue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput((value) => value.trim() !== "");
  const {
    value: birthvalue,
    isValid: birthIsValid,
    hasError: birthHasError,
    valueChangeHandler: birthChangeHandler,
    inputBlurHandler: birthBlurHandler,
    reset: resetbirth,
  } = useInput((value) => value.trim() !== "");
  const {
    value: addressvalue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetaddress,
  } = useInput((value) => value.trim() !== "");
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch({ type: "closeform" });
  };
  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    ageIsValid &&
    numberIsValid &&
    emailIsValid &&
    birthIsValid &&
    addressIsValid
  ) {
    formIsValid = true;
  }

  // const keyup = () => {
  //   textarea.style.height = calcHeight(textarea.value) + "px"}
  const [update, setUpdate] = useState(getdata);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    let resdata = {
      firstName: firstNamevalue,
      lastName: lastNamevalue,
      age: agevalue,
      number: numbervalue,
      email: emailvalue,
      birth: birthvalue,
      address: addressvalue,
      id: Math.random(),
    };

    update.push(resdata);

    props.extdata(update);

    resetFirstName();
    resetlastName();
    resetage();
    resetnumber();
    resetemail();
    resetbirth();
    resetaddress();
  };

  const firstnameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const ageClasses = ageHasError ? "form-control invalid" : "form-control";

  const numberClasses = numberHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const birthClasses = birthHasError ? "form-control invalid" : "form-control";
  const addressClasses = addressHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <div className="control-group">
      <form onSubmit={submitHandler}>
        <div className={firstnameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            type="text"
            onChange={firstNameChangeHandler}
            value={firstNamevalue}
            onBlur={firstNameBlurHandler}
            placeholder="First Name"
          />
          {firstNameHasError && (
            <p className="error-text">Please enter firstName</p>
          )}
        </div>

        <div className={lastnameClasses}>
          <label htmlFor="fname">last Name</label>
          <input
            id="fname"
            type="text"
            onChange={lastNameChangeHandler}
            value={lastNamevalue}
            onBlur={lastNameBlurHandler}
            placeholder="Last Name"
          />
          {lastNameHasError && (
            <p className="error-text">Please enter lastName</p>
          )}
        </div>
        <div className={ageClasses}>
          <label htmlFor="fname">Age</label>
          <input
            id="fname"
            type="number"
            onChange={ageChangeHandler}
            value={agevalue}
            onBlur={ageBlurHandler}
            placeholder="Age"
          />
          {ageHasError && (
            <p className="error-text">Please enter valid age !</p>
          )}
        </div>
        <div className={numberClasses}>
          <label htmlFor="fname">Ph. Number</label>
          <input
            id="fname"
            type="number"
            onChange={numberChangeHandler}
            value={numbervalue}
            onBlur={numberBlurHandler}
            placeholder="Number"
          />
          {numberHasError && (
            <p className="error-text">Please enter 10(ten) digit number!</p>
          )}
        </div>
        <div className={emailClasses}>
          <label htmlFor="fname">Email</label>
          <input
            id="fname"
            type="email"
            onChange={emailChangeHandler}
            value={emailvalue}
            onBlur={emailBlurHandler}
            placeholder="Email"
          />
          {lastNameHasError && (
            <p className="error-text">Please enter Email include"@"</p>
          )}
        </div>
        <div className={birthClasses}>
          <label htmlFor="fname">Birth of date</label>
          <input
            id="fname"
            type="date"
            onChange={birthChangeHandler}
            value={birthvalue}
            onBlur={birthBlurHandler}
            placeholder="Last Name"
          />
          {lastNameHasError && <p className="error-text">Add birth of date</p>}
        </div>
        <div className={addressClasses}>
          <label htmlFor="fname">Address</label>
          <textarea
            placeholder="Address..."
            onChange={addressChangeHandler}
            value={addressvalue}
            onBlur={addressBlurHandler}
            
          ></textarea>
          {/* <input
            id="fname"
            type="textarea"
            onChange={lastNameChangeHandler}
            value={lastNamevalue}
            onBlur={lastNameBlurHandler}
            placeholder="Last Name"
          /> */}
          {lastNameHasError && (
            <p className="error-text">Please enter Address</p>
          )}
        </div>
        <div>
          <div></div>
          <div className="button_div">
            <Button type="submit" disabled={!formIsValid}>
              Add
            </Button>
            <Button onClick={closeForm} type="button">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
