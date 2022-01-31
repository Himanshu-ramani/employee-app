import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Nav.module.css";
import Button from "../../UI/Button";

const Nav = (props) => {
  const dispatch = useDispatch();
  const [isFrom, setIsForm] = useState(false);
 
  const FormHandler = () => {
    dispatch({ type: "form" });
  };
  const [search, setSearch] = useState("");
  const searchValue = (event) => {
    setSearch(event.target.value);
    props.getSearchTerm(event.target.value);
    
  };

  return (
    <nav className={classes.Nav}>
      <h2 className={classes.heading}>Employee</h2>
      <div>
        <input type="text" placeholder="Search..." onChange={searchValue} />
       
      </div>
      <ul>
        <li>
          <Button onClick={FormHandler}>Add Employee</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
