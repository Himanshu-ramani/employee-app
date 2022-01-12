import React,{useState} from "react";
import {useSelector,useDispatch} from "react-redux"
import classes from "./Nav.module.css"
import Button from "../UI/Button";

const Nav = (props) =>{
     const dispatch = useDispatch()
    const [isFrom ,setIsForm ] = useState(false)
    const FormHandler = ()=>{
        dispatch({type:'form'})
       
    }

    return <nav className={classes.Nav}>
        <h2 className={classes.heading}>Employee</h2>
        <div>
        <input type="text" />
        <Button>Search</Button>
        </div>
        <ul>
            <li>
               
                <Button onClick={FormHandler}>Add Employee</Button>
               
            </li>
        </ul>
    </nav>
}

export default Nav;
