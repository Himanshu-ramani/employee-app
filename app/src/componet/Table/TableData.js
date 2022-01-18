import Button from "../../UI/Button";
import { useContext, useEffect, Fragment, useState } from "react";
import classes from "./TableData.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Data } from "../../App";
import InLineForm from "../InLineForm/InLineForm";
import { Search } from "../../App";
import { SearchData } from "../../App";
import Expandform from "../ExpandRow/Expandform";

const TableData = (props) => {
  const sreachterm = useContext(Search);

  const [editContactId, seteditContactId] = useState(null);
  const [viewID, setviewID] = useState(null);
  const [editFormData, seteditFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    number: "",
    id: "",
  });
  const searchData = useContext(SearchData);
  const [searchArray, setSearchArray] = useState([]);
  useEffect(() => {
    setSearchArray(searchData);
  }, [sreachterm]);

  const date = useContext(Data);

  const [array, setArray] = useState(date);

  useEffect(() => {
    const fetchdata = JSON.parse(localStorage.getItem("listData"));

    setArray(fetchdata);
  }, [date]);

  const [update, setupdate] = useState({
    firstName: "",
    lastName: "",
    age: "",
    number: "",
  });

  const [id, setid] = useState();
  const deleteData = (event, curid) => {
    setid(curid);
    props.getid(id);
    const newArray = array.filter((elem) => {
      return elem.id !== curid;
    });
    ///
    localStorage.setItem("listData", JSON.stringify(newArray));
    setArray(newArray);

    const newSearchArray = searchArray.filter((elem) => {
      return elem.id !== curid;
    });

    setSearchArray(newSearchArray);
  };
  const cancel = () => {
    seteditContactId(null);
  };

  const handleEdit = (event, item) => {
    event.preventDefault();

    seteditContactId(item.id);
    const formValues = {
      firstName: item.firstName,
      lastName: item.lastName,
      age: item.age,
      number: item.number,
      id: item.id,
    };
    seteditFormData(formValues);
  };
  const getUpdateData = (updatedata) => {
    setupdate(updatedata);
    const fetchdata = JSON.parse(localStorage.getItem("listData"));
    const newDataArray = array.map(
      (obj) => [updatedata].find((o) => o.id === obj.id) || obj
    );

    localStorage.setItem("listData", JSON.stringify(newDataArray));
    setArray(newDataArray);

    const newSearchArray = searchData.map(
      (obj) => [updatedata].find((o) => o.id === obj.id) || obj
    );

    setSearchArray(newSearchArray);

    seteditContactId(null);
  };
  const expandHnadler = (event, obj) => {
    setviewID(obj.id);
  };
  const stopView = () => {
    setviewID(null);
  };
  let newSearch = searchArray === null ? [] : searchArray;
  const finalArray = sreachterm !== "" ? newSearch : array;

  return (
    <tbody>
      {finalArray.map((item) => (
        <Fragment key={item.id}>
          <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.number}</td>
            <td>
              <Button onClick={(event) => expandHnadler(event, item)}>
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <Button onClick={(event) => deleteData(event, item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
          {editContactId=== item.id ? <Expandform item={item} /> : viewID === item.id && (
            <tr>
              <td colSpan="6">
                <div className={classes.head}>
                  <h2>
                    {item.firstName} {item.lastName}
                  </h2>
                  <div>
                    <button onClick={(event) => handleEdit(event, item)}>
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button onClick={stopView}>
                      <FontAwesomeIcon icon={faArrowUp} /> up
                    </button>
                  </div>
                </div>
                <div className={classes.expand}>
                  <p className={classes.label}>FIRST NAME</p>
                  <p>{item.firstName}</p>
                  <p className={classes.label}>LAST NAME</p>
                  <p>{item.lastName}</p>
                  <p className={classes.label}>AGE</p> <p>{item.age}</p>
                  <p className={classes.label}>NUMBER</p> <p>{item.number}</p>
                  <p className={classes.label}>EMAIL</p> <p>{item.email}</p>
                  <p className={classes.label}>DATE OF BIRTH</p>
                  <p>{item.birth}</p>
                  <p className={classes.label}>ADDRESS</p>
                  <p>{item.address}</p>
                </div>
              </td>
            </tr>
          ) 
          }
        </Fragment>
      ))}
    </tbody>
  );
};

export default TableData;
