import { useState } from "react";
import classes from "./table.module.css";

import TableData from "./TableData";

const Table = (props) => {
  const [recid, setrecid] = useState();
  const getid = (id) => {};

  return (
    <div className={classes["table-wrapper"]}>
      <table className={classes["fl-table"]}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Ph. number</th>
            <th>Button</th>
          </tr>
        </thead>
        
          <TableData getid={getid} />
        
      </table>
    </div>
  );
};

export default Table;
