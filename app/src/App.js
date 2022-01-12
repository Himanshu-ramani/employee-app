import React, { useState ,useContext} from "react";
import { useSelector } from "react-redux";
import Nav from "./componet/Nav";
import "./App.css";
import Form from "./componet/form";
import DataProvider from "./store/contextProvider";
import Table from "./componet/table";
import { Data } from "./componet/form";

function App() {
  const isForm = useSelector((state) => state.isfrom);


  return (

    <div className="App">
      <DataProvider>
        <Nav></Nav>
        {/* <Main /> */}
        {isForm &&<Form/>}
        <Table />
      </DataProvider>
    </div>

  );
}

export default App;
