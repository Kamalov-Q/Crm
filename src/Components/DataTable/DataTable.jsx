/* eslint-disable no-unused-vars */
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, Rows } from "../../dataSource";
import { Link } from "react-router-dom";
const DataTable = () => {

  const action = [{
    field: "action",
    headerName: "Action",
    width: 250,
    renderCell : () => {
      return (
        <div className="cellAction">
          <Link to={`/users/test`}>
          <button className="viewButton">
            View
          </button>
          </Link>
          <button className="deleteButton">
            Delete
          </button>
        </div>
      )
    }
  }]
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
       <span> Add New User </span>
       <Link to={`/users/new`} className="link">Add New</Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={Rows}
        columns={userColumns.concat(action)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
