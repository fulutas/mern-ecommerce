import React from "react";
import "./user-list.css";
import { DataGrid } from "@mui/x-data-grid";
import { Add, DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt={params.row.username}
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "transaction", headerName: "Transaction", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userListTitleContainer">
        <h1 className="userListTitle">Users</h1>
        <Link to="/newuser" className="link">
          <button className="userAddButton">
            <Add className="icon" style={{ marginRight: "8px" }} />
            Create User
          </button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
