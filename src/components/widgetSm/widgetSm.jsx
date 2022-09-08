import React from "react";
import "./widget-sm.css";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../axios";
import { format } from 'timeago.js'

const widgetSm = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        // last 5 new users request
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    };

   getUsers()

  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members <span className="widgetBadge">Top 5</span></span>
      <ul className="widgetSmList">
        {users.length > 0 && users.map(user => (
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || 'https://img.favpng.com/17/19/1/business-google-account-organization-service-png-favpng-sUuKmS4aDNRzxDKx8kJciXdFp.jpg'}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}
            {user.isAdmin && ( <span style={{ color : '#f6cd2c'}}><i className="fa-solid fa-crown"></i></span> )}
            </span>
            <span className='userDate'>{format(user.createdAt)}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
          </button>
        </li>
        ))}
      </ul>
      
      {!users.length && !loading && (
        <div>Does not match any results.</div>
      )}

      {loading && (
        <div>Loading...</div>
      )}

    </div>
  );
};

export default widgetSm;
