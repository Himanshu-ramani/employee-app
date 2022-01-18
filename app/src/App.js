import React, { useState, useEffect, createContext } from "react";
import { useSelector } from "react-redux";

import Nav from "./componet/Nav/Nav";
import "./App.css";
import Form from "./componet/Form/form";

import Table from "./componet/Table/table";
export const Data = createContext();
export const Search = createContext();
export const SearchData = createContext([]);

const fetchdata = JSON.parse(localStorage.getItem("listData"));
if (fetchdata === null) {
  localStorage.setItem("listData", JSON.stringify([]));
}
function App() {


  const isForm = useSelector((state) => state.isfrom);
  const statedata = useSelector((state) => state.data);
  let inidata = fetchdata === null ? [] : fetchdata;
  const [data, setdata] = useState(inidata);
  const [getterm, setTerm] = useState("");
  const [newEmploye, setNewEmploye] = useState(data);
  const storeData = (gdata) => {
    localStorage.setItem("listData", JSON.stringify(gdata));
    const hdata = JSON.parse(localStorage.getItem("listData"));
    console.log(hdata);
    setdata(hdata);
  };

  const getSearchTerm = (search) => {
    setTerm(search);

    if (getterm !== "") {
      const ldata = JSON.parse(localStorage.getItem("listData"));
      let ndata = ldata === null ? [] : ldata;
      const newData = ndata.filter((employe) => {
        return Object.values(employe)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      setNewEmploye(newData);
    } else {
      setNewEmploye(fetchdata);
    }
  };
  // setdata(JSON.parse(localStorage.getItem("listData")))
  return (
    <Data.Provider value={data}>
      <Search.Provider value={getterm}>
        <SearchData.Provider value={newEmploye}>
          <div className="App">
            <Nav getSearchTerm={getSearchTerm} />

            {isForm && <Form extdata={storeData} />}
            <Table />
          </div>
        </SearchData.Provider>
      </Search.Provider>
    </Data.Provider>
  );
}

export default App;
