import React, { useEffect, useState } from 'react'
import './widget-lg.css'
import { userRequest } from "../../axios";
import { format } from 'timeago.js'

const widgetLg = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getOrders = async () => {
      try { 
        setLoading(true)
        // last 5 new users request
        const res = await userRequest.get("orders");
        setOrders(res.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    };

    getOrders()

  }, []);

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        </thead>
        {orders.length > 0 && orders.slice(0.,4).map(order => (
        <tbody key={order._id}>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={order.userInfo[0].img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">{order.userInfo[0].username}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status}></Button>
          </td>
        </tr>
        </tbody>
       ))}
      </table>

      {!orders.length && !loading && (
        <div>Does not match any results.</div>
      )}

      {loading && (
        <div>Loading...</div>
      )}

    </div>
  )
}

export default widgetLg